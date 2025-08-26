import React, { useState } from 'react';
import Section from './Section';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitting');
    // Simulate network request
    setTimeout(() => {
      setStatus('submitted');
    }, 1500);
  };

  if (status === 'submitted') {
    return (
      <Section id="contact">
        <div className="text-center max-w-2xl mx-auto reveal reveal-up">
          <h2 className="text-4xl font-bold">Thank You!</h2>
          <p className="text-lg text-light/90 mt-4">
            Your message has been sent. I'll get back to you as soon as possible.
          </p>
        </div>
      </Section>
    )
  }

  return (
    <Section id="contact">
      <div className="text-center max-w-2xl mx-auto reveal reveal-up">
        <h2 className="text-4xl font-bold">Let's Create Together</h2>
        <p className="text-lg text-light/70 mt-4 mb-8">
          Have a project in mind or just want to say hello? I'd love to hear from you.
        </p>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-light/80 mb-2">Name</label>
                <input type="text" id="name" name="name" required className="w-full glass-card rounded-md py-3 px-4 text-light focus:outline-none focus:ring-2 focus:ring-accent transition-colors" />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-light/80 mb-2">Email</label>
                <input type="email" id="email" name="email" required className="w-full glass-card rounded-md py-3 px-4 text-light focus:outline-none focus:ring-2 focus:ring-accent transition-colors" />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-light/80 mb-2">Message</label>
            <textarea id="message" name="message" rows={5} required className="w-full glass-card rounded-md py-3 px-4 text-light focus:outline-none focus:ring-2 focus:ring-accent transition-colors"></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="mt-4 inline-block bg-accent text-primary font-bold py-4 px-10 rounded-full transition-all duration-300 hover:bg-accent-hover hover:scale-105 text-lg disabled:bg-gray-500 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
};

export default Contact;