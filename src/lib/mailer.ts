import nodemailer, { type Transporter } from 'nodemailer';

let cached: Transporter | null = null;

function required(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(
      `Missing environment variable ${name}. Add it to .env.local (see .env.example).`,
    );
  }
  return value;
}

/**
 * Gmail SMTP transport.
 * Gmail requires an App Password (2FA on the account) — a normal password will be rejected.
 */
export function getTransporter(): Transporter {
  if (cached) return cached;

  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = Number(process.env.SMTP_PORT || 465);
  const secure = (process.env.SMTP_SECURE ?? 'true') === 'true';

  cached = nodemailer.createTransport({
    host,
    port,
    secure, // true for 465, false for 587 (STARTTLS)
    auth: {
      user: required('GMAIL_USER'),
      pass: required('GMAIL_APP_PASSWORD'),
    },
    pool: true,
    maxConnections: 2,
  });

  return cached;
}

export const mailConfig = {
  get from() {
    return process.env.MAIL_FROM || `Élan Forge <${process.env.GMAIL_USER ?? ''}>`;
  },
  get to() {
    return process.env.MAIL_TO || process.env.GMAIL_USER || '';
  },
};
