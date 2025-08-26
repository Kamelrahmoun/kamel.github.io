import React from 'react';
import type { Milestone } from '../constants';

interface TimelineItemProps {
  milestone: Milestone;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ milestone, index }) => {
  const isEven = index % 2 === 0;
  const revealAnimation = isEven ? 'reveal-right' : 'reveal-left';
  const containerPosition = isEven ? 'md:w-1/2 md:mr-auto' : 'md:w-1/2 md:ml-auto';
  const cardAlignment = isEven ? 'md:text-left' : 'md:text-right';
  const dotPosition = isEven ? 'md:right-0' : 'md:left-0';
  const contentPadding = isEven ? 'md:pr-8' : 'md:pl-8';

  return (
    <div className={`relative mb-12 ${containerPosition}`}>
      {/* Dot */}
      <div className={`absolute top-2 left-5 md:left-auto -translate-x-1/2 z-10 ${dotPosition}`}>
        <div className="w-5 h-5 bg-primary border-2 border-accent rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-accent rounded-full -translate-x-1/2 -translate-y-1/2 -z-10 animate-ping"></div>
      </div>

      {/* Content */}
      <div
        className={`pl-12 md:pl-0 md:pr-0 reveal ${revealAnimation}`}
        style={{ '--delay': `${index * 150}ms` } as React.CSSProperties}
      >
        <div className={`glass-card p-6 rounded-lg shadow-lg ${contentPadding} ${cardAlignment}`}>
          <p className="text-accent font-semibold mb-1">{milestone.year}</p>
          <h3 className="text-xl font-bold mb-2 text-light">{milestone.title}</h3>
          <p className="text-light/70 text-left md:text-inherit">{milestone.description}</p>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
