import React from 'react';

const Header: React.FC = () => {
  const handleViewWorkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const section = document.querySelector('#projects');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header id="home" className="h-screen flex items-center justify-center relative overflow-hidden">
      <div className="text-center z-20">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-light to-accent animate-gradient-text">
            Kamel Rahmoun
          </span>
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-light/80 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          Graphic Designer
        </p>
        <a 
          href="#projects" 
          onClick={handleViewWorkClick}
          className="mt-8 inline-block bg-accent text-primary font-bold py-3 px-8 rounded-full transition-transform duration-300 hover:bg-accent-hover hover:scale-105 animate-fade-in-up"
          style={{ animationDelay: '500ms' }}
        >
          View My Work
        </a>
      </div>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        @keyframes animate-gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-text {
          background-size: 200% auto;
          animation: animate-gradient 5s ease-in-out infinite;
        }
      `}</style>
    </header>
  );
};

export default Header;