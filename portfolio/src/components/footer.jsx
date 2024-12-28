import React from 'react';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Email',
      icon: <Mail className="w-6 h-6" />,
      href: 'mailto:abdoulkarimcoulibaly525@gmail.com',
    },
    {
      name: 'GitHub',
      icon: <Github className="w-6 h-6" />,
      href: 'https://github.com/votrecompte',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      href: 'www.linkedin.com/in/abdoul-karim-coulibaly-3ba1a1328',
    }
  ];

  const navigationLinks = [
    { name: 'Accueil', id: 'top' },
    { name: 'Projets', id: 'projets' },
    { name: 'Compétences', id: 'competences' },
    { name: 'Contact', id: 'contact' }
  ];

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col items-center">
          {/* Nom ou Logo */}
          <h3 className="text-2xl font-bold mb-8">Coulibaly Abdoul Karim</h3>
          
          {/* Liens sociaux */}
          <div className="flex gap-6 mb-8">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-all duration-300 hover:text-white hover:scale-110 hover:-translate-y-1"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          {/* Section de contact rapide */}
          <div className="text-center mb-8">
            <p className="mb-2">Disponible pour de nouvelles opportunités</p>
            <button 
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
            >
              Contactez-moi <ExternalLink className="w-4 h-4" />
            </button>
          </div>
          
          {/* Navigation du footer */}
          <nav className="mb-8">
            <ul className="flex flex-wrap justify-center gap-6 text-sm">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Copyright */}
          <div className="text-sm text-gray-500">
            <p>© {currentYear} Coulibaly Abdoul Karim. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;