import type React from 'react';

export interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  detailedDescription: string;
  gallery?: string[];
  driveLink?: string;
}

export interface Skill {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  size?: 'small' | 'large';
}
