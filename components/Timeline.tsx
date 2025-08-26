import React from 'react';
import TimelineItem from './TimelineItem';
import { TIMELINE_MILESTONES } from '../constants';

const Timeline: React.FC = () => {
  return (
    <div className="relative container mx-auto max-w-4xl px-4 py-12">
      {/* Responsive timeline: left on mobile, centered on desktop */}
      <div className="absolute left-5 md:left-1/2 top-0 h-full w-0.5 bg-secondary -translate-x-1/2"></div>
      
      <div>
        {TIMELINE_MILESTONES.map((milestone, index) => (
          <TimelineItem 
            key={index} 
            milestone={milestone} 
            index={index} 
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;