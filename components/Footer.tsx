import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-light/70 hover:text-accent transition-colors duration-300">
        {children}
    </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="py-8">
      <div className="container mx-auto max-w-6xl px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p className="text-light/70 mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Kamel Rahmoun. All Rights Reserved.
        </p>
        <div className="flex space-x-6">
           <SocialIcon href={SOCIAL_LINKS.facebook}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"></path></svg>
            </SocialIcon>
            <SocialIcon href={SOCIAL_LINKS.whatsapp}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91s-4.45-9.91-9.91-9.91zm0 18.16c-1.5 0-2.98-.38-4.32-1.11L4.26 20.74l1.7-4.42c-.83-1.4-1.28-3.01-1.28-4.68 0-4.54 3.69-8.23 8.23-8.23 4.54 0 8.23 3.69 8.23 8.23s-3.69 8.23-8.23 8.23zm4.49-5.32c-.26-.13-1.55-.77-1.79-.85-.24-.08-.42-.13-.59.13-.17.26-.68.85-.83 1.02-.15.17-.3.19-.56.06-.26-.13-1.09-.4-2.07-1.28-.77-.68-1.29-1.53-1.44-1.79-.15-.26-.02-.4.12-.52.12-.11.26-.28.39-.42.13-.14.17-.24.26-.4.09-.16.04-.3-.02-.43-.06-.13-.59-1.42-.81-1.95-.22-.53-.44-.45-.59-.45-.15 0-.32-.01-.48-.01s-.42.06-.64.31c-.22.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.55.12.17 1.71 2.73 4.14 3.82.58.26 1.04.41 1.4.53.52.17.99.15 1.36.09.42-.06 1.25-.51 1.42-1 .18-.49.18-.9.13-1s-.17-.15-.42-.28z"/></svg>
            </SocialIcon>
        </div>
      </div>
    </footer>
  );
};

export default Footer;