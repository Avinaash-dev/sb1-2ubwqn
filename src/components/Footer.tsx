import React from 'react';
import { Github, Instagram, Globe, Mail, Linkedin } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Avinaash-dev', label: 'GitHub' },
    { icon: Instagram, href: 'https://instagram.com/avilogan_xiii/', label: 'Instagram' },
    { icon: Globe, href: 'https://avi-dev.netlify.app', label: 'Website' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/avinaash-n-a03a47338/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:avinaash2k@gmail.com', label: 'Email' }
  ];

  return (
    <footer id="contact" className="py-20 bg-black/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>
        
        <div className="flex justify-center gap-6 mb-12">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2"
            >
              <span className="p-4 bg-purple-900/30 rounded-xl group-hover:bg-purple-800/50 transition-colors">
                <Icon size={24} />
              </span>
              <span className="text-sm text-gray-400 group-hover:text-purple-400 transition-colors">
                {label}
              </span>
            </a>
          ))}
        </div>

        <div className="text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Avi.dev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
