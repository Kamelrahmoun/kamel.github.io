import React from 'react';
import Section from './Section';
import { SOCIAL_LINKS } from '../constants';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-light/70 hover:text-accent transition-all duration-300 transform hover:scale-110">
        {children}
    </a>
);

const Contact: React.FC = () => {
  return (
    <Section id="contact">
      <div className="text-center max-w-2xl mx-auto reveal reveal-up">
        <h2 className="text-4xl font-bold">Let's Create Together</h2>
        <p className="text-lg text-light/70 mt-4 mb-12">
          Have a project in mind or just want to say hello? I'd love to hear from you.
        </p>

        <div className="space-y-8">
            {/* Email Contact */}
            <div className="glass-card rounded-lg p-8 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/10">
                 <div className="inline-block p-3 bg-secondary rounded-full mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                 </div>
                <h3 className="text-xl font-bold text-light mb-2">Email Me</h3>
                <a 
                    href={SOCIAL_LINKS.email} 
                    className="text-lg text-light/80 hover:text-accent transition-colors duration-300"
                    aria-label="Email Kamel Rahmoun"
                >
                    kamel.rahmoun@example.com
                </a>
            </div>

            {/* Phone Contact */}
            <div className="glass-card rounded-lg p-8 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/10">
                 <div className="inline-block p-3 bg-secondary rounded-full mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                 </div>
                <h3 className="text-xl font-bold text-light mb-2">Call Me</h3>
                <a 
                    href={SOCIAL_LINKS.phone} 
                    className="text-lg text-light/80 hover:text-accent transition-colors duration-300"
                    aria-label="Call Kamel Rahmoun"
                >
                    +1 (555) 123-4567
                </a>
            </div>

            {/* Social Links */}
            <div className="pt-8">
                 <h3 className="text-xl font-bold text-light mb-6">Or find me on</h3>
                 <div className="flex justify-center space-x-8">
                    <SocialIcon href={SOCIAL_LINKS.facebook}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"></path></svg>
                    </SocialIcon>
                    <SocialIcon href={SOCIAL_LINKS.whatsapp}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91s-4.45-9.91-9.91-9.91zm0 18.16c-1.5 0-2.98-.38-4.32-1.11L4.26 20.74l1.7-4.42c-.83-1.4-1.28-3.01-1.28-4.68 0-4.54 3.69-8.23 8.23-8.23 4.54 0 8.23 3.69 8.23 8.23s-3.69 8.23-8.23 8.23zm4.49-5.32c-.26-.13-1.55-.77-1.79-.85-.24-.08-.42-.13-.59.13-.17.26-.68.85-.83 1.02-.15.17-.3.19-.56.06-.26-.13-1.09-.4-2.07-1.28-.77-.68-1.29-1.53-1.44-1.79-.15-.26-.02-.4.12-.52.12-.11.26-.28.39-.42.13-.14.17-.24.26-.4.09-.16.04-.3-.02-.43-.06-.13-.59-1.42-.81-1.95-.22-.53-.44-.45-.59-.45-.15 0-.32-.01-.48-.01s-.42.06-.64.31c-.22.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.55.12.17 1.71 2.73 4.14 3.82.58.26 1.04.41 1.4.53.52.17.99.15 1.36.09.42-.06 1.25-.51 1.42-1 .18-.49.18-.9.13-1s-.17-.15-.42-.28z"/></svg>
                    </SocialIcon>
                 </div>
            </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;