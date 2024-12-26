import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [formData, setFormData] = useState({
    name: 'Coulibaly Abdoul Karim',
    email: 'Abdoulkarimcoulibaly525@gmail.com',
    message: ''
  });

  const contactMethods = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email",
      value: "email@example.com",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Téléphone",
      value: "+33 6 XX XX XX XX",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Localisation",
      value: "Paris, France",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Me Contacter
          <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4 rounded-full" />
        </h2>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Cartes de contact */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600 mb-8">
              N'hésitez pas à me contacter pour discuter de vos projets
            </p>
            
            <div className="grid gap-6">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${method.color} opacity-0 group-hover:opacity-100 transition-all duration-500 blur transform group-hover:scale-105`} />
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg transform transition-all duration-500 group-hover:-translate-y-2">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${method.color} text-white`}>
                        {method.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{method.title}</h3>
                        <p className="text-gray-600">{method.value}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex space-x-4 mt-8 justify-center">
              {[
                { icon: <Github className="w-6 h-6" />, label: "GitHub" },
                { icon: <Linkedin className="w-6 h-6" />, label: "LinkedIn" },
                { icon: <Mail className="w-6 h-6" />, label: "Email" }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Formulaire */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl transform rotate-3 opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl transform -rotate-3 opacity-10" />
            <form className="relative bg-white rounded-2xl p-8 shadow-xl">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                    placeholder="Votre message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <span>Envoyer</span>
                  <Send className="w-5 h-5 animate-pulse" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;