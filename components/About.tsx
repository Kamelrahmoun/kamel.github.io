import React from 'react';
import Section from './Section';
import Timeline from './Timeline';
import { CORE_SERVICES } from '../constants';


const About: React.FC = () => {
  const bio = "I'm a passionate graphic designer with a keen eye for modern aesthetics and visual storytelling. My journey in design is driven by a love for crafting compelling brand identities, intuitive user interfaces, and impactful illustrations. I thrive on transforming complex ideas into clean, elegant, and engaging visuals.";

  return (
    <Section id="about">
       <div className="reveal reveal-up mb-20 md:mb-32">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-4xl mx-auto">
          {/* Image */}
          <div className="relative group w-48 h-48 md:w-60 md:h-60 flex-shrink-0">
            <div className="absolute -inset-2 bg-gradient-to-r from-accent to-red-800 rounded-full blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <img
              src="https://picsum.photos/seed/kamel/500/500"
              alt="Kamel Rahmoun"
              className="relative rounded-full w-full h-full aspect-square object-cover border-4 border-secondary shadow-lg"
            />
          </div>
          {/* Bio Text */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-light/90 text-lg leading-relaxed">
              {bio}
            </p>
          </div>
        </div>
      </div>
      
      <Timeline />

      <div className="mt-20 md:mt-32 reveal reveal-up">
        <h3 className="text-3xl font-bold text-center mb-10">My Core Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {CORE_SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
               <div key={index} className="glass-card p-8 rounded-lg text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/10">
                <div className="inline-block p-4 bg-secondary rounded-full mb-4">
                  <Icon className="w-8 h-8 text-accent"/>
                </div>
                <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                <p className="text-light/70">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      
       <div className="text-center mt-16 reveal reveal-up">
          <a
            href="./kamel-rahmoun-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-primary font-bold py-3 px-8 rounded-full transition-all duration-300 hover:bg-accent-hover hover:scale-105"
          >
           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download CV
          </a>
        </div>
      <style>{`
        @keyframes tilt {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-1deg); }
          75% { transform: rotate(1deg); }
        }
        .animate-tilt {
          animation: tilt 10s infinite linear;
        }
      `}</style>
    </Section>
  );
};

export default About;
