import { FormEvent, useState } from 'react';
import { submitContactForm } from '../config/api';
import './ContactForm.css';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    setStatus('sending');
    await submitContactForm(data);
    setStatus('sent');
    form.reset();
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="contact-name">Full name</label>
        <input id="contact-name" name="name" type="text" required placeholder="Alex Rivera" />
      </div>
      <div className="form-row">
        <label htmlFor="contact-email">Work email</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          placeholder="alex@company.com"
        />
      </div>
      <div className="form-row">
        <input name="companyUrl" type="url" />
      </div>
      <div className="form-row">
        <label htmlFor="contact-message">How can we help?</label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          placeholder="Tell us about your analytics goals..."
        />
      </div>
      <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Message sent' : 'Send message'}
      </button>
    </form>
  );
}
