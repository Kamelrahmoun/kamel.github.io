import React, { useState } from 'react';
import Section from './Section';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import type { Project } from '../types';

const PROJECTS: Project[] = [
  {
    "id": 1,

    "imageUrl": "https://res.cloudinary.com/ddxnntc2u/image/upload/v1756947953/kamel_rahmoun_1_eho7mn.jpg",
   
  "title": "SPIRIT",
  "category": "Book Cover Design",
  "description": "A conceptual book cover design that emphasizes spirituality, protection, and adventure.",
  "detailedDescription": "The design uses a monochrome portrait as the main visual element, highlighting depth and emotion. Bold typography for the title 'SPIRIT' at the top conveys strength and presence, while supporting texts like 'Spiritual Peace,' 'The Protection,' and 'Adventure' create thematic balance. The contrast between the dark background and the white text enhances readability and visual impact, making the design modern, minimalistic, yet emotionally engaging. This layout is suitable for books focusing on spirituality, self-discovery, or personal growth.",
    "gallery": [

    ],
    "driveLink": "https://drive.google.com/"
  },
  {
    "id": 2,
    "title": "Oasis Resort & Spa",
    "category": "Architecture & Interior Design — Hospitality",
    "description": "A full resort package: site masterplan, public-area floor plans, guest-room layout, sectional elevations, and pool construction details.",
    "detailedDescription": "The project organizes arrival, lobby, café/bar, dining, and lounge seating around a central water feature with direct spill-out to a tiered pool deck. A multipurpose hall sits off the lobby for events. The leisure wing groups a gym, spa/beauty suites, locker areas, and a games lounge for clear, short circulation from the elevator core. Guest accommodation is a compact twin-bed capsule with terrace glazing, a seating nook, and a bathroom with tub, bidet, and vanity; built-ins keep the plan efficient. The masterplan places villas in nested circles around a central plaza and fountain, adds a landmark pool, tennis courts, small football pitch, amphitheater, shaded parking, and walkable garden promenades. Sections A–A’ and B–B’ show the relationship between tall arched façades, interior feature walls, and the pool edge. Material palette: white stone/marble floors, deep blue upholstery, warm amber/onyx panels, light wood, and metal trims. Technical sheets document the pool build-up—reinforced concrete shell, cementitious waterproofing, insulation/protection layers, ceramic tiling, marble copings, and step profiles—ensuring durability and clean execution.",
        
    "imageUrl": "https://res.cloudinary.com/ddxnntc2u/image/upload/v1756949063/%D9%84%D8%A7%D8%A7%D9%86%D8%AF_%D8%B5%D8%A7%D9%84%D8%AD_1_jr79t5.jpg",
    
    "gallery": [
      "https://res.cloudinary.com/ddxnntc2u/image/upload/v1756947946/%D9%85%D8%B3%D9%82%D8%B7_2Model_hzddfi.jpg",
      "https://res.cloudinary.com/ddxnntc2u/image/upload/v1756947938/4_tngbuc.jpg",
      "https://res.cloudinary.com/ddxnntc2u/image/upload/v1756947935/%D9%85%D9%82%D8%A7%D8%B7%D8%B9_%D8%A7%D8%AE%D8%B1%D8%A7%D8%AC_awczjm.jpg",
      "https://res.cloudinary.com/ddxnntc2u/image/upload/v1756947931/5_e6xoa9.jpg",
      "https://res.cloudinary.com/ddxnntc2u/image/upload/v1756947914/%D9%83%D8%A8%D8%B3%D9%88%D9%84%D8%A9_x_djgije.jpg",
      "https://res.cloudinary.com/ddxnntc2u/image/upload/v1756947911/3_g52dcd.jpg",
      "https://res.cloudinary.com/ddxnntc2u/image/upload/v1756947908/%D9%85%D8%B3%D9%82%D8%B7_1-Model_krl6tz.jpg",
      "https://res.cloudinary.com/ddxnntc2u/image/upload/v1756947881/43_ceneau.jpg",
      "https://res.cloudinary.com/ddxnntc2u/image/upload/v1756947861/2_au7sde.jpg"
    ],
    "driveLink": "https://drive.google.com/"
  },
  {
    "id": 3,
  
  "title": "Visual Branding Interfaces",
  "category": "Web & UI Design",
  "description": "Two contrasting website design concepts that showcase different approaches to branding and user experience.",
  "detailedDescription": "The first design (CHANEL) reflects luxury web aesthetics: clean black-and-white visuals, elegant typography, and minimal layouts that emphasize sophistication and high-end branding. The second design (BURGER KING) applies a vibrant and playful style: bold colors, large product images, and clear category divisions that enhance usability and engagement. Together, these designs demonstrate how web interfaces adapt to brand identity—luxury brands favoring simplicity and elegance, while fast-food brands emphasize energy, accessibility, and visual appetite appeal.",
    "imageUrl": "https://res.cloudinary.com/ddxnntc2u/image/upload/v1756947818/%D9%83%D8%A7%D9%85%D9%84_%D8%B1%D8%AD%D9%85%D9%88%D9%86_1_sz1vat.jpg",
   "gallery": [
      "https://res.cloudinary.com/ddxnntc2u/image/upload/v1756947830/%D9%83%D8%A7%D9%85%D9%84_z96cm1.jpg"
    ],
    "driveLink": "https://drive.google.com/"
  },
  {
    "id": 4,
    "title": "EcoPack Packaging Design",
    "category": "Packaging",
    "imageUrl": "https://res.cloudinary.com/ddxnntc2u/image/upload/v1756947770/%D9%83%D9%88%D9%83%D8%A8_x-0%D9%A1_mgmt2e.jpg",
    "description": "Sustainable and creative packaging solutions for an eco-friendly product line.",
    "detailedDescription": "EcoPack required packaging that was not only visually appealing but also environmentally friendly. I designed a system of recyclable and biodegradable packaging for their line of organic snacks. The design uses earthy tones, clean typography, and custom illustrations to highlight the natural quality of the products. The project balanced aesthetic appeal with practical, sustainable constraints.",
     "gallery": [
      "https://res.cloudinary.com/ddxnntc2u/image/upload/v1756947776/%D8%B4%D8%AE%D8%B5%D9%8A%D8%A9_%D8%B4%D8%A8_x-0%D9%A1_u3vnvu.jpg",
      "https://res.cloudinary.com/ddxnntc2u/image/upload/v1756947772/%D8%B4%D8%AC%D8%B1%D8%A9_x-0%D9%A1_f1lzmb.jpg",
      "https://res.cloudinary.com/ddxnntc2u/image/upload/v1756947770/%D9%83%D9%88%D9%83%D8%A8_x-0%D9%A1_mgmt2e.jpg",
      "https://res.cloudinary.com/ddxnntc2u/image/upload/v1756947758/%D8%B5%D9%86%D8%AF%D9%88%D9%82_x-0%D9%A1_vhvtww.jpg",
      "https://res.cloudinary.com/ddxnntc2u/image/upload/v1756947769/Free_Square_String_Gift_Box_Mockup_gudfnf.jpg",
      "https://res.cloudinary.com/ddxnntc2u/image/upload/v1756947762/%D8%B4%D8%AE%D8%B5%D9%8A%D8%A9_%D8%A8%D9%86%D8%AA-0%D9%A1_xble3a.jpg",
      "https://res.cloudinary.com/ddxnntc2u/image/upload/v1756947751/%D8%AC%D9%88%D8%A7%D9%84-0%D9%A1_y8nor6.jpg",
      "https://res.cloudinary.com/ddxnntc2u/image/upload/v1756947746/Polo_Shirt_Mockup_1_dtfmvu.jpg",
      "https://res.cloudinary.com/ddxnntc2u/image/upload/v1756947748/Mailer_Bag_Mockup_3_buhevh.jpg",
      "https://res.cloudinary.com/ddxnntc2u/image/upload/v1756947745/Envelope_With_String_Mockup_pzotme.jpg",
      "https://res.cloudinary.com/ddxnntc2u/image/upload/v1756947742/Car_Mockup_Free_PSD_dngndl.jpg",
      "https://res.cloudinary.com/ddxnntc2u/image/upload/v1756947741/Free_Paper_Square_Box_Mockup11_jkclmh.jpg"
          ]
  }
];


const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <Section id="projects">
        <div className="text-center mb-12 reveal reveal-up">
          <h2 className="text-4xl font-bold">My Portfolio</h2>
          <p className="text-lg text-light/70 mt-2">A selection of my favorite projects.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <div key={project.id} className="reveal reveal-up" style={{'--delay': `${index * 100}ms`} as React.CSSProperties}>
              <ProjectCard 
                project={project} 
                onClick={() => handleOpenModal(project)}
              />
            </div>
          ))}
        </div>
      </Section>
      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
    </>
  );
};

export default Projects;