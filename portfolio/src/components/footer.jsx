import React from 'react';
import { Mail, Github, Linkedin, Twitter, Instagram, ExternalLink } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'Email',
      icon: <Mail className="w-6 h-6" />,
      href: 'mailto:votre@email.com',
    },
    {
      name: 'GitHub',
      icon: <Github className="w-6 h-6" />,
      href: 'https://github.com/votrecompte',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      href: 'https://linkedin.com/in/votrecompte',
    },
    {
      name: 'Twitter',
      icon: <Twitter className="w-6 h-6" />,
      href: 'https://twitter.com/votrecompte',
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-6 h-6" />,
      href: 'https://instagram.com/votrecompte',
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Section principale */}
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
            <a 
              href="mailto:votre@email.com"
              className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
            >
              Contactez-moi <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          
          {/* Navigation du footer */}
          <nav className="mb-8">
            <ul className="flex flex-wrap justify-center gap-6 text-sm">
              <li>
                <a href="#accueil" className="hover:text-white transition-colors duration-300">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#projets" className="hover:text-white transition-colors duration-300">
                  Projets
                </a>
              </li>
              <li>
                <a href="#competences" className="hover:text-white transition-colors duration-300">
                  Compétences
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          
          {/* Copyright */}
          <div className="text-sm text-gray-500">
            <p>© {currentYear} Votre Nom. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;