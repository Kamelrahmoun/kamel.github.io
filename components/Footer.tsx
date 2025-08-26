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
           <SocialIcon href={SOCIAL_LINKS.linkedin}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </SocialIcon>
            <SocialIcon href={SOCIAL_LINKS.behance}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h4a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H4Z"></path><path d="M14 12h5a2 2 0 0 0 2-2V8.5a2.5 2.5 0 0 0-5 0V12Z"></path><path d="M4 18h4a2 2 0 0 0 2-2v-2H4Z"></path><path d="M14 18h6a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2h-6v5Z"></path><line x1="10" y1="6" x2="14" y2="6"></line></svg>
            </SocialIcon>
            <SocialIcon href={SOCIAL_LINKS.dribbble}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 4.1-13.74 6.94"></path><path d="M9.8 8.6c-2.29 2.58-2.04 6.9-1.3 9.42"></path></svg>
            </SocialIcon>
        </div>
      </div>
    </footer>
  );
};

export default Footer;