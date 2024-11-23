import React from 'react';
import { Code2, ExternalLink } from 'lucide-react';

export function FeaturedProject() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">Featured Project</h2>
        <div className="bg-purple-900/20 rounded-xl p-6 backdrop-blur-sm">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
                alt="Project Screenshot"
                className="rounded-lg shadow-xl transition-transform group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">AI-Powered Task Manager</h3>
              <p className="text-gray-300 mb-6">
                A sophisticated task management application that uses AI to prioritize and categorize tasks.
                Built with React, TypeScript, and TailwindCSS.
              </p>
              <div className="flex gap-4 mb-8">
                <span className="px-3 py-1 bg-purple-800/30 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-purple-800/30 rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-purple-800/30 rounded-full text-sm">AI</span>
              </div>
              <div className="flex gap-4">
                <a href="#" className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                  <Code2 size={20} />
                  View Code
                </a>
                <a href="#" className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                  <ExternalLink size={20} />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}