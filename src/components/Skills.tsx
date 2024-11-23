import React, { useEffect, useRef, useState } from 'react';

export function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      category: 'Frontend',
      items: [
        { name: 'React', level: 75 },
        { name: 'TypeScript', level: 75 },
        { name: 'HTML/CSS', level: 80 },
        { name: 'Bootstrap', level: 80 }
      ]
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', level: 75 },
        { name: 'PL SQL', level: 85 },
        { name: 'Express', level: 75 },
        { name: 'Python', level: 70 },
        { name: 'REST APIs', level: 70 }
      ]
    },
    {
      category: 'Tools & Others',
      items: [
        { name: 'Git', level: 88 },
        { name: 'Metasploit', level: 70 },
        { name: 'Nmap', level: 65 },
        { name: 'Burpsuit', level: 65 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-purple-900/10" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((category) => (
            <div 
              key={category.category} 
              className="bg-purple-900/20 rounded-xl p-6 backdrop-blur-sm transform transition-all duration-500 hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-purple-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-purple-900/30 rounded-full h-2 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transform: isVisible ? 'translateX(0)' : 'translateX(-100%)'
                        }}
                      />
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
}