import React, { useState, useEffect } from 'react';
import ReactLogo from '../assets/skills/react.png';
import GitLogo from '../assets/skills/Git.png';
import GithubLogo from '../assets/skills/Github.png';
import PowerbiLogo from '../assets/skills/powerbi.png';
import Rlogo from '../assets/skills/R.jpg';
import PythonLogo from '../assets/skills/python.jpg';
import tailwindLogo from '../assets/skills/tailwind.png';
import sqlLogo from '../assets/skills/sql.png';
import phpLogo from '../assets/skills/php.png';
import kerasLogo from '../assets/skills/keras.png';
import tensorflowLogo from '../assets/skills/tensorflow.png';
import matplotlibLogo from '../assets/skills/matplotlib.jpg';
import PlotlyLogo from '../assets/skills/plotly.png';
import SeabornLogo from '../assets/skills/seaborn.png';
import numpyLogo from '../assets/skills/numpy.png';
import nodeLogo from '../assets/skills/node.jpg';
import pandas from '../assets/skills/pandas.png';
import scikitlearnLogo from '../assets/skills/scikitlearn.png';
import vscodeLogo from '../assets/skills/vscode.jpg';
import jupyterLogo from '../assets/skills/jupyter.png';





const SkillsCards = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );

        const section = document.getElementById('skills-section');
        if (section) observer.observe(section);

        return () => observer.disconnect();
    }, []);

    const skillCategories = [
        {
            category: "Développement Web",
            sections: [
                {
                    title: "Frontend",
                    skills: [
                        { name: "React", image: ReactLogo },
                        { name: "Tailwind CSS", image: tailwindLogo }
                    ]
                },
                {
                    title: "Backend",
                    skills: [
                        { name: "Node.js", image: nodeLogo },
                        { name: "SQL", image: sqlLogo },
                        { name: "PHP", image: phpLogo },
                       
                    ]
                },
                {
                    title: "Base de données",
                    skills: [
                        { name: "MySQL", image: "/api/placeholder/64/64" },
                        
                    ]
                }
            ]
        },
        {
            category: "Analyse de Données",
            sections: [
                {
                    title: "Langages & Frameworks",
                    skills: [
                        { name: "Python", image: PythonLogo },
                        { name: "R", image: Rlogo },
                        { name: "NumPy", image: numpyLogo },
                        { name: "Pandas", image: pandas }
                    ]
                },
                {
                    title: "Visualisation",
                    skills: [
                        { name: "Seaborn", image: SeabornLogo },
                        { name: "Power BI", image: PowerbiLogo },
                        { name: "Matplotlib", image: matplotlibLogo },
                        { name: "Plotly", image: PlotlyLogo }
                    ]
                },
                {
                    title: "Machine Learning",
                    skills: [
                        { name: "Scikit-learn", image: scikitlearnLogo},
                        { name: "TensorFlow", image: tensorflowLogo },
                        { name: "Keras", image: kerasLogo}
                    ]
                }
            ]
        },
        {
            category: "Outils & DevOps",
            sections: [
                {
                    title: "Contrôle de Version",
                    skills: [
                        { name: "Git", image: GitLogo },
                        { name: "GitHub", image: GithubLogo },
                    ]
                },
                {
                    title: "Productivité",
                    skills: [
                        { name: "VS Code", image: vscodeLogo },
                        { name: "Jupyter", image:jupyterLogo}
                    ]
                }
            ]
        }
    ];

    return (
        <section id="skills-section" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Compétences Techniques</h2>
                    <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full" />
                </div>

                {/* Main Categories */}
                <div className="space-y-20">
                    {skillCategories.map((mainCategory, mainIndex) => (
                        <div key={mainCategory.category} className="space-y-12">
                            {/* Main Category Title */}
                            <h3 className="text-3xl font-bold text-gray-800 text-center p-4 bg-white rounded-xl shadow-md inline-block mx-auto">
                                {mainCategory.category}
                            </h3>

                            {/* Sections Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                                {mainCategory.sections.map((section, sectionIndex) => (
                                    <div 
                                        key={section.title}
                                        className={`transform transition-all duration-500 ${
                                            isVisible 
                                                ? 'translate-y-0 opacity-100' 
                                                : 'translate-y-10 opacity-0'
                                        }`}
                                        style={{ transitionDelay: `${(mainIndex * 300 + sectionIndex * 100)}ms` }}
                                    >
                                        {/* Section Title */}
                                        <h4 className="text-xl font-semibold text-gray-700 mb-6 text-center">
                                            {section.title}
                                        </h4>

                                        {/* Skills Grid */}
                                        <div className="grid grid-cols-2 gap-4">
                                            {section.skills.map((skill, skillIndex) => (
                                                <div
                                                    key={skill.name}
                                                    className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                                                >
                                                    <div className="aspect-square relative mb-3 group">
                                                        <div className="absolute inset-0 bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition-colors duration-300" />
                                                        <div className="absolute inset-0 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                                                            <img
                                                                src={skill.image}
                                                                alt={skill.name}
                                                                className="w-12 h-12 object-contain"
                                                            />
                                                        </div>
                                                    </div>
                                                    <h5 className="text-center text-sm font-medium text-gray-800">
                                                        {skill.name}
                                                    </h5>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsCards;