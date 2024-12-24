import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import image from '../assets/IMG_1015.jpg'
const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);
    

    // Animation pour le texte qui apparaît caractère par caractère
    const text = "Développeur Full Stack";
    const [displayText, setDisplayText] = useState('');
    
    useEffect(() => {
        let index = -1;
        const timer = setInterval(() => {
            if (index < text.length) {
                setDisplayText((prev) => prev + text.charAt(index));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 100);
        
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-gray-50 min-h-screen">
            <header className="absolute inset-x-0 top-0 z-50">
                <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                    {/* En-tête existant... */}
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="text-xl font-bold text-indigo-600 hover:scale-110 transition-transform duration-300">JP</span>
                        </a>
                    </div>
                    
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <span className="sr-only">Toggle menu</span>
                            {mobileMenuOpen ? (
                                <X className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>

                    <div className="hidden lg:flex lg:gap-x-12">
                        {['Projets', 'À propos', 'Compétences', 'Contact'].map((item, index) => (
                            <a 
                                key={item} 
                                href={`#${item.toLowerCase()}`}
                                className={`text-sm font-semibold text-gray-900 hover:text-indigo-600 
                                          transition-all duration-300 hover:scale-110
                                          ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
                        {[<Github />, <Linkedin />, <Mail />].map((icon, index) => (
                            <a 
                                key={index}
                                href="#"
                                className={`text-gray-600 hover:text-indigo-600 transition-all duration-300
                                          hover:scale-110 transform hover:rotate-12
                                          ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}
                                style={{ transitionDelay: `${(index + 4) * 100}ms` }}
                            >
                                {React.cloneElement(icon, { className: "h-5 w-5" })}
                            </a>
                        ))}
                    </div>
                </nav>

                {/* Menu mobile existant... */}
                {mobileMenuOpen && (
                    <div className="lg:hidden">
                        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-indigo px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 flex flex-col space-y-4 h-full">
                        {['Projets', 'À propos', 'Compétences', 'Contact'].map((item, index) => (
                            <a 
                                key={item} 
                                href={`#${item.toLowerCase()}`}
                                className={`text-sm mt-8 font-semibold text-gray-900 hover:text-indigo-600 
                                          transition-all duration-300 hover:scale-110
                                          ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                {item}
                            </a>
                        ))}
                        </div>
                    </div>
                )}
            </header>

            {/* Hero Section avec Photo */}
            <div className="relative isolate px-6 pt-14 lg:px-8">
                {/* Arrière-plan animé */}
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-200 to-indigo-600 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] animate-pulse"
                        style={{
                            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
                        }}
                    />
                </div>

                <div className="mx-auto max-w-6xl py-32 sm:py-48 lg:py-56">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Texte */}
                        <div className={`text-center lg:text-left ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'} transition-all duration-1000`}>
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                {displayText}
                                <span className="animate-pulse">|</span>
                            </h1>
                            <p className={`mt-6 text-lg leading-8 text-gray-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-1000 delay-500`}>
                                Je crée des expériences web innovantes en combinant design créatif et développement robuste.
                                Spécialisé en React, Node.js et architecture cloud.
                            </p>
                            <div className={`mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-1000 delay-700`}>
                                <a
                                    href="#projects"
                                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 hover:scale-105 transition-all duration-300"
                                >
                                    Voir mes projets
                                </a>
                                <a 
                                    href="#contact" 
                                    className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 transition-colors duration-300 flex items-center justify-center lg:justify-start"
                                >
                                    Me contacter <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">→</span>
                                </a>
                            </div>
                        </div>

                        {/* Photo */}
                        <div className={`relative ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'} transition-all duration-1000 delay-300`}>
                            <div className="relative mx-auto w-64 h-64 lg:w-80 lg:h-80">
                                {/* Cercles décoratifs animés */}
                                <div className="absolute inset-0 rounded-full bg-indigo-100 animate-spin-slow"></div>
                                <div className="absolute inset-2 rounded-full bg-indigo-200 animate-spin-slow-reverse"></div>
                                <div className="absolute inset-4 rounded-full bg-white"></div>
                                {/* Photo */}
                                <div className="absolute inset-4 rounded-full overflow-hidden">
                                    <img
                                        src={image}
                                        alt="Portrait"
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                {/* Points décoratifs */}
                                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-indigo-600/10 rounded-full animate-bounce delay-300"></div>
                                <div className="absolute -left-4 -top-4 w-16 h-16 bg-indigo-600/20 rounded-full animate-bounce"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;