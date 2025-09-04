import React from 'react';
import type { Project, Skill } from './types';

// Icons (simple SVGs for demonstration)
const AdobeIllustratorIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M13.23 8.12H15.5a.5.5 0 0 1 .5.5v6.88a.5.5 0 0 1-.5.5h-2.27a.5.5 0 0 1-.5-.5v-6.88a.5.5 0 0 1 .5-.5Z"/><path d="M8.5 8.12h2.5a.5.5 0 0 1 .5.5v.38a.5.5 0 0 1-.5.5h-2.5a.5.5 0 0 1-.5-.5v-.38a.5.5 0 0 1 .5-.5Z"/><path d="M4.5 20.5h15a1 1 0 0 0 1-1v-15a1 1 0 0 0-1-1h-15a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1Z"/><path d="M8.5 12h2.5a.5.5 0 0 1 .5.5v3.38a.5.5 0 0 1-.5.5h-2.5a.5.5 0 0 1-.5-.5v-3.38a.5.5 0 0 1 .5-.5Z"/></svg>
);
const AdobePhotoshopIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15.5 8.12h2.5a.5.5 0 0 1 .5.5v6.88a.5.5 0 0 1-.5.5h-2.5a.5.5 0 0 1-.5-.5v-6.88a.5.5 0 0 1 .5-.5Z"/><path d="M8.5 8.12h2.5a.5.5 0 0 1 .5.5v3.38a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-3.38a.5.5 0 0 1 .5-.5Z"/><path d="M4.5 20.5h15a1 1 0 0 0 1-1v-15a1 1 0 0 0-1-1h-15a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1Z"/><path d="M8.5 12.5v3.38a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-3.38"/></svg>
);
const FigmaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"/><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/></svg>
);
const BrandingIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
);
const AdobeAfterEffectsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M4.5 20.5h15a1 1 0 0 0 1-1v-15a1 1 0 0 0-1-1h-15a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1Z"/>
        <path d="M8.5 16L10 8h2.5l1.5 8"/>
        <path d="M9.5 12h3"/>
        <path d="M14.5 16V8h3"/>
        <path d="M14.5 12h2"/>
    </svg>
);
const AdobePremiereIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M4.5 20.5h15a1 1 0 0 0 1-1v-15a1 1 0 0 0-1-1h-15a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1Z"/>
        <path d="M8.5 16V8h3a2 2 0 0 1 0 4h-3"/>
        <path d="M14.5 16V8h3a2 2 0 0 1-2 2h-1"/>
        <path d="M14.5 12h3"/>
    </svg>
);

// Timeline Icons
const BookOpenIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
);
const PenToolIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m12 19 7-7 3 3-7 7-3-3z"></path><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="m2 2 7.586 7.586"></path><path d="m11 13 2.5 2.5"></path></svg>
);
const LayoutIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
);
const BriefcaseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
);

// Core Services Icons
const UiUxIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M19 9a7 7 0 1 0-13.88 2.34"/><path d="M22 12A10 10 0 1 0 12 22"/></svg>
);

const IllustrationIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
);


export const SKILLS: Skill[] = [
  { name: 'Adobe Illustrator', icon: AdobeIllustratorIcon, size: 'large' },
  { name: 'Figma', icon: FigmaIcon, size: 'large' },
  { name: 'Adobe Photoshop', icon: AdobePhotoshopIcon, size: 'small' },
  { name: 'Adobe After Effects', icon: AdobeAfterEffectsIcon, size: 'small' },
  { name: 'Adobe Premiere Pro', icon: AdobePremiereIcon, size: 'small' },
  { name: 'Branding', icon: BrandingIcon, size: 'small' },
];

export const SOCIAL_LINKS = {
  email: "mailto:kamel.rahmoun@example.com",
  phone: "tel:+15551234567",
  facebook: "https://www.facebook.com/",
  whatsapp: "https://wa.me/15551234567"
};


export interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const TIMELINE_MILESTONES: Milestone[] = [
  {
    year: "2022",
    title: "Started Graphic Design Journey",
    description: "Began my studies, diving into the fundamental principles of design theory, color, and typography that form the foundation of my work.",
    icon: BookOpenIcon,
  },
  {
    year: "2023",
    title: "Mastered the Adobe Suite",
    description: "Gained proficiency in industry-standard tools like Illustrator, Photoshop, and After Effects, enabling me to turn complex concepts into digital art.",
    icon: PenToolIcon,
  },
  {
    year: "2024",
    title: "Explored UI/UX Design",
    description: "Expanded my skills into user interface and experience design, learning to craft intuitive and visually compelling digital experiences using Figma.",
    icon: LayoutIcon,
  },
  {
    year: "Present",
    title: "Freelance & Portfolio Building",
    description: "Actively taking on freelance projects and building a diverse portfolio to showcase my creative solutions and passion for design.",
    icon: BriefcaseIcon,
  },
];

export interface Service {
  title: string;
  description: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const CORE_SERVICES: Service[] = [
    {
        title: "Branding",
        description: "Crafting memorable logos and cohesive visual systems that tell a compelling story.",
        icon: BrandingIcon,
    },
    {
        title: "UI/UX Design",
        description: "Designing intuitive, user-centric interfaces for web and mobile applications.",
        icon: UiUxIcon,
    },
    {
        title: "Digital Illustration",
        description: "Bringing concepts to life with vibrant custom graphics and artwork.",
        icon: IllustrationIcon,
    }
];