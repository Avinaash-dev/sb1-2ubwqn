import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { FeaturedProject } from './components/FeaturedProject';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-black text-white">
      <Header />
      <Hero />
      <Skills />
      <FeaturedProject />
      <Footer />
    </div>
  );
}

export default App;