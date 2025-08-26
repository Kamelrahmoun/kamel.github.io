import React from 'react';
import Section from './Section';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <Section id="skills">
      <div className="text-center mb-12 reveal reveal-up">
        <h2 className="text-4xl font-bold">Skills & Expertise</h2>
        <p className="text-lg text-light/70 mt-2">The tools and technologies I use to bring ideas to life.</p>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {SKILLS.map((skill, index) => {
            const sizeClass = skill.size === 'large' ? 'col-span-2' : 'col-span-1';
            const IconComponent = skill.icon;
            return (
              <div 
                key={skill.name} 
                className={`reveal reveal-up ${sizeClass}`}
                style={{'--delay': `${index * 100}ms`} as React.CSSProperties}
              >
                <div className="glass-card flex flex-col items-center justify-center p-6 rounded-lg h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-accent/10">
                  <div className="text-accent h-12 w-12 mb-4 flex items-center justify-center">
                    <IconComponent className="w-10 h-10" />
                  </div>
                  <p className="font-semibold text-light text-lg text-center">{skill.name}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  );
};

export default Skills;
