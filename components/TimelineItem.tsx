import React from 'react';
import type { Milestone } from '../constants';

interface TimelineItemProps {
  milestone: Milestone;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ milestone, index }) => {
  const isEven = index % 2 === 0;
  const alignmentClasses = isEven ? 'md:flex-row' : 'md:flex-row-reverse';
  const revealAnimation = isEven ? 'reveal-left' : 'reveal-right';

  return (
    <div className={`flex items-center w-full ${alignmentClasses}`}>
      {/* Content Card */}
      <div
        className={`w-full md:w-5/12 reveal ${revealAnimation}`}
        style={{ '--delay': `${index * 150}ms` } as React.CSSProperties}
      >
        <div className="glass-card p-6 rounded-lg shadow-lg">
          <p className="text-accent font-semibold mb-1">{milestone.year}</p>
          <h3 className="text-xl font-bold mb-2 text-light">{milestone.title}</h3>
          <p className="text-light/70">{milestone.description}</p>
        </div>
      </div>
      
      {/* Spacer and Dot */}
      <div className="relative w-full md:w-2/12 flex-shrink-0">
        <div className="hidden md:block absolute inset-0 w-full h-full">
           <div className="absolute top-1/2 left-1/2 w-5 h-5 bg-primary border-2 border-accent rounded-full -translate-x-1/2 -translate-y-1/2 z-10"></div>
           <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-accent rounded-full -translate-x-1/2 -translate-y-1/2 z-0 animate-ping"></div>
        </div>
      </div>

      {/* Icon (visible on mobile, spacer on desktop) */}
       <div className="w-full md:w-5/12 px-4 md:px-0 flex items-center gap-4 md:hidden">
          <div className="bg-secondary p-3 rounded-full border border-light/10">
            <milestone.icon className="w-6 h-6 text-accent" />
          </div>
       </div>

    </div>
  );
};

export default TimelineItem;
