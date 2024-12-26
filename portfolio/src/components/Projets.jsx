import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PortfolioCarousel = () => {
  const items = [
    {
      id: 1,
      title: "Projet 1",
      description: "Description du projet 1",
      tools: "React, Node.js, Express",
      githubLink: "#",
      demoLink: "#",
      image: "/api/placeholder/800/400"
    },
    {
      id: 2,
      title: "Projet 2",
      description: "Description du projet 2",
      tools: "Python, Pandas, Scikit-learn",
      githubLink: "#",
      demoLink: "#",
      image: "/api/placeholder/800/400"
    },
    {
      id: 3,
      title: "Projet 3",
      description: "Description du projet 3",
      tools: "HTML, CSS, JavaScript",
      githubLink: "#",
      demoLink: "#",
      image: "/api/placeholder/800/400"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(handleNext, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, isAutoPlaying]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div id='projets'
      className={`relative w-full mt-7 md-7 max-w-6xl mx-auto overflow-hidden rounded-2xl shadow-xl 
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} 
                  transition-all duration-1000`}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Arrière-plan animé */}
      <div className="absolute inset-0 -z-10 overflow-hidden blur-xl">
        <div
          className="absolute w-full h-full bg-gradient-to-tr from-indigo-200 to-indigo-600 opacity-30 animate-pulse"
          style={{
            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
          }}
        />
      </div>

      {/* Carousel principal */}
      <div className="relative h-[32rem] bg-gray-50/90">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute w-full h-full"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
              {/* Image du projet */}
              <div className="relative overflow-hidden">
                <img
                  src={items[currentIndex].image}
                  alt={items[currentIndex].title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Contenu du projet */}
              <div className="relative flex flex-col justify-center p-8 bg-white/90">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {items[currentIndex].title}
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  {items[currentIndex].description}
                </p>
                <div className="space-y-4">
                  <p className="text-sm text-gray-600 italic">
                    <span className="font-semibold">Technologies utilisées:</span> {items[currentIndex].tools}
                  </p>
                  <div className="flex gap-4">
                    <a
                      href={items[currentIndex].githubLink}
                      className="flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-500 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      Code source
                    </a>
                    <a
                      href={items[currentIndex].demoLink}
                      className="flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-500 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Démo en ligne
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Boutons de navigation */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 z-10"
      >
        <ChevronLeft className="w-6 h-6 text-gray-900" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 z-10"
      >
        <ChevronRight className="w-6 h-6 text-gray-900" />
      </button>

      {/* Points de navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'w-8 bg-indigo-600' : 'w-2 bg-indigo-300 hover:bg-indigo-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioCarousel;