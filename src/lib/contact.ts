const CONTACT_EMAIL = 'kumarshiva1990@gmail.com';

// Formspree form id (the part after /f/ in the form's endpoint). Without it
// the form falls back to opening the visitor's mail app.
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID || '';

export type ContactMessage = { name: string; email: string; message: string };

/** 'sent' when delivered via the form backend, 'mailto' when the mail app was opened. */
export async function sendContact({ name, email, message }: ContactMessage): Promise<'sent' | 'mailto'> {
  if (FORMSPREE_ID) {
    const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ name, email, message, _subject: 'Portfolio enquiry from ' + name }),
    });
    if (!res.ok) throw new Error('Form backend responded ' + res.status);
    return 'sent';
  }
  const body = encodeURIComponent(message + '\n\n— ' + name + ' (' + email + ')');
  window.location.href =
    `mailto:${CONTACT_EMAIL}?subject=` + encodeURIComponent('Portfolio enquiry from ' + name) + '&body=' + body;
  return 'mailto';
}
