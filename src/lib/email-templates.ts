export type Lead = {
  name: string;
  email: string;
  phone?: string;
  goal?: string;
  message?: string;
  interests?: string[];
};

const FOREST = '#1B3A2B';
const CREAM = '#F5EFE3';
const GOLD = '#C2A15A';

function esc(value = '') {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function shell(inner: string) {
  return `<!doctype html>
<html><body style="margin:0;padding:32px 0;background:${CREAM};font-family:Helvetica,Arial,sans-serif;color:#12281E;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:92%;background:#ffffff;border:1px solid rgba(27,58,43,0.12);">
        <tr><td style="background:${FOREST};padding:32px 36px;">
          <div style="font-size:26px;letter-spacing:4px;color:${CREAM};font-weight:700;">ÉLAN</div>
          <div style="font-size:10px;letter-spacing:8px;color:${GOLD};margin-top:6px;">FORGE</div>
        </td></tr>
        <tr><td style="padding:36px;">${inner}</td></tr>
        <tr><td style="background:${FOREST};padding:20px 36px;color:rgba(245,239,227,0.6);font-size:11px;letter-spacing:2px;text-transform:uppercase;">
          Strength With Purpose · © 2026 Élan Forge
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

function row(label: string, value?: string) {
  if (!value) return '';
  return `<tr>
    <td style="padding:10px 0;border-bottom:1px solid rgba(27,58,43,0.1);font-size:11px;letter-spacing:2px;text-transform:uppercase;color:rgba(27,58,43,0.55);width:150px;vertical-align:top;">${esc(label)}</td>
    <td style="padding:10px 0;border-bottom:1px solid rgba(27,58,43,0.1);font-size:14px;color:#12281E;">${esc(value).replace(/\n/g, '<br/>')}</td>
  </tr>`;
}

/** Internal notification to the Élan Forge inbox. */
export function leadNotification(lead: Lead) {
  const inner = `
    <p style="margin:0 0 6px;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:${GOLD};">New Membership Request</p>
    <h1 style="margin:0 0 24px;font-size:24px;line-height:1.2;color:${FOREST};">${esc(lead.name)} wants to join.</h1>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      ${row('Name', lead.name)}
      ${row('Email', lead.email)}
      ${row('Phone', lead.phone)}
      ${row('Goal', lead.goal)}
      ${row('Interested in', lead.interests?.join(', '))}
      ${row('Message', lead.message)}
    </table>
    <p style="margin:28px 0 0;font-size:13px;color:rgba(27,58,43,0.65);">Reply directly to this email to reach them.</p>`;

  return {
    subject: `New membership request — ${lead.name}`,
    html: shell(inner),
    text: [
      'New membership request',
      `Name: ${lead.name}`,
      `Email: ${lead.email}`,
      lead.phone ? `Phone: ${lead.phone}` : '',
      lead.goal ? `Goal: ${lead.goal}` : '',
      lead.interests?.length ? `Interested in: ${lead.interests.join(', ')}` : '',
      lead.message ? `Message: ${lead.message}` : '',
    ]
      .filter(Boolean)
      .join('\n'),
  };
}

/** Auto-reply to the person who submitted the form. */
export function leadAutoReply(lead: Lead) {
  const first = lead.name.split(' ')[0] || 'there';
  const inner = `
    <p style="margin:0 0 6px;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:${GOLD};">Welcome To Élan Forge</p>
    <h1 style="margin:0 0 20px;font-size:24px;line-height:1.25;color:${FOREST};">${esc(first)}, we received your request.</h1>
    <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:rgba(18,40,30,0.85);">
      Thank you for reaching out. A coach will reply personally within one business day with
      session times, pricing, and the next step for your baseline assessment.
    </p>
    <p style="margin:0 0 24px;font-size:15px;line-height:1.7;color:rgba(18,40,30,0.85);">
      In the meantime, here is the weekly rhythm you&rsquo;re stepping into:
    </p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      ${row('Monday 6:30 AM', 'Strength & Conditioning')}
      ${row('Tuesday 7:00 PM', 'Mentor Circle')}
      ${row('Wednesday 6:30 AM', 'Mobility + Recovery')}
      ${row('Thursday 7:00 PM', 'Performance Workout')}
      ${row('Saturday 9:00 AM', 'Élan Community Meetup')}
      ${row('Sunday 5:00 PM', 'Weekly Reset')}
    </table>
    <p style="margin:28px 0 0;font-size:16px;font-style:italic;color:${FOREST};">
      Find what you&rsquo;re fighting for. Build toward it. Become stronger because of it.
    </p>`;

  return {
    subject: 'Welcome to Élan Forge — we received your request',
    html: shell(inner),
    text: `${first}, thank you for reaching out to Élan Forge. A coach will reply personally within one business day with session times, pricing, and your baseline assessment. — Strength With Purpose.`,
  };
}
