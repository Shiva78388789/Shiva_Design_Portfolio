import { sendContact } from './contact';

type NotePage = { setState: (s: { cfNote: string }) => void };

/** Shared contact-form submit for the pages whose form shows a single status note. */
export function submitContactForm(page: NotePage, form: HTMLFormElement, name: string, email: string, message: string) {
  page.setState({ cfNote: 'Sending…' });
  sendContact({ name, email, message })
    .then((how) => {
      form.reset();
      page.setState({
        cfNote:
          how === 'sent'
            ? "Thanks — your message is on its way. I'll get back to you soon."
            : 'Thanks — your mail app should open with the message ready to send.',
      });
    })
    .catch(() => page.setState({ cfNote: 'Something went wrong sending that. Please email kumarshiva1990@gmail.com instead.' }));
}
