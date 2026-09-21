import { NextResponse } from 'next/server';
import { getTransporter, mailConfig } from '@/lib/mailer';
import { leadAutoReply, leadNotification, type Lead } from '@/lib/email-templates';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Very small in-memory rate limit (per server instance). */
const hits = new Map<string, { count: number; reset: number }>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

function rateLimited(key: string) {
  const now = Date.now();
  const entry = hits.get(key);

  if (!entry || now > entry.reset) {
    hits.set(key, { count: 1, reset: now + WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > MAX_PER_WINDOW;
}

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      'local';

    if (rateLimited(ip)) {
      return NextResponse.json(
        { ok: false, error: 'Too many requests. Please try again a little later.' },
        { status: 429 },
      );
    }

    const body = (await request.json()) as Partial<Lead> & { interests?: unknown };

    const name = String(body.name ?? '').trim();
    const email = String(body.email ?? '').trim();
    const phone = String(body.phone ?? '').trim();
    const goal = String(body.goal ?? '').trim();
    const message = String(body.message ?? '').trim();
    const interests = Array.isArray(body.interests)
      ? body.interests.map((i) => String(i)).slice(0, 12)
      : [];

    if (name.length < 2) {
      return NextResponse.json({ ok: false, error: 'Please enter your name.' }, { status: 400 });
    }
    if (!EMAIL_RE.test(email)) {
      return NextResponse.json(
        { ok: false, error: 'Please enter a valid email address.' },
        { status: 400 },
      );
    }
    if (message.length > 4000) {
      return NextResponse.json({ ok: false, error: 'Message is too long.' }, { status: 400 });
    }

    const lead: Lead = { name, email, phone, goal, message, interests };

    const transporter = getTransporter();
    const notification = leadNotification(lead);
    const autoReply = leadAutoReply(lead);

    await transporter.sendMail({
      from: mailConfig.from,
      to: mailConfig.to,
      replyTo: `${name} <${email}>`,
      subject: notification.subject,
      html: notification.html,
      text: notification.text,
    });

    // Confirmation to the prospective member — never block the lead on this.
    try {
      await transporter.sendMail({
        from: mailConfig.from,
        to: `${name} <${email}>`,
        subject: autoReply.subject,
        html: autoReply.html,
        text: autoReply.text,
      });
    } catch (autoReplyError) {
      console.error('[contact] auto-reply failed:', autoReplyError);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('[contact] failed:', error);
    const dev = process.env.NODE_ENV !== 'production';
    return NextResponse.json(
      {
        ok: false,
        error: dev && error instanceof Error
          ? error.message
          : 'We could not send your request. Please email us directly.',
      },
      { status: 500 },
    );
  }
}
