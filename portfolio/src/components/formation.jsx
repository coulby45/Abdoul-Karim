import React, { useEffect } from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Education = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée des animations
      once: true, // Les animations ne se déclencheront qu'une seule fois
    });
  }, []);

  const educationData = [
    {
      id: 1,
      years: "2022 - 2024",
      degree: "Master en Développement Web",
      school: "École Supérieure du Digital",
      location: "Paris, France",
      description: "Spécialisation en développement front-end et UX design"
    },
    {
      id: 2,
      years: "2019 - 2022",
      degree: "Licence Informatique",
      school: "Université de Lyon",
      location: "Lyon, France",
      description: "Formation en algorithmique, bases de données et programmation"
    },
    {
      id: 3,
      years: "2017 - 2019",
      degree: "DUT Informatique",
      school: "IUT de Bordeaux",
      location: "Bordeaux, France",
      description: "Formation technique en développement logiciel"
    }
  ];

  return (
    <div id='formation' className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-8 text-center">
        <GraduationCap className="inline-block mr-2 mb-1" />
        Formation
      </h2>

      <div className="space-y-6">
        {educationData.map((edu) => (
          <div
            key={edu.id}
            data-aos="fade-up" // Animation AOS ici
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="grid md:grid-cols-[1fr,2fr] gap-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <Calendar className="w-5 h-5" />
                <span>{edu.years}</span>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-blue-600">
                  {edu.degree}
                </h3>
                
                <div className="flex items-start space-x-2 text-gray-700">
                  <MapPin className="w-5 h-5 mt-1" />
                  <div>
                    <p className="font-medium">{edu.school}</p>
                    <p className="text-sm">{edu.location}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mt-2">
                  {edu.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
