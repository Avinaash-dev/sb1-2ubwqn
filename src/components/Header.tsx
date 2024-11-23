import React, { useState, useEffect } from 'react';
import { NavLink } from './NavLink';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-gradient-to-r from-black/95 via-purple-950/95 to-black/95 backdrop-blur-md border-b border-purple-500/20 shadow-lg shadow-purple-500/5' 
        : 'bg-transparent'
    }`}>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 animate-gradient-shift opacity-50" />
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center relative z-10">
        <div className="text-3xl font-bold relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/50 via-pink-600/50 to-blue-600/50 rounded-lg blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute -inset-2 bg-gradient-conic from-purple-600 via-pink-600 to-blue-600 rounded-lg opacity-0 group-hover:opacity-50 blur animate-spin-slow" />
          <div className="relative">
            <span className="font-['Dancing_Script'] bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient group-hover:from-pink-400 group-hover:via-purple-400 group-hover:to-blue-400 transition-all duration-500">
              Avi.dev
            </span>
            <div className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-purple-800/20"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <NavLink 
            href="#about"
            onClick={(e) => handleNavClick(e, 'about')}
            className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-400 hover:to-blue-400"
          >
            About
          </NavLink>
          <NavLink 
            href="#skills"
            onClick={(e) => handleNavClick(e, 'skills')}
            className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-400 hover:to-blue-400"
          >
            Skills
          </NavLink>
          <NavLink 
            href="#projects"
            onClick={(e) => handleNavClick(e, 'projects')}
            className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-400 hover:to-blue-400"
          >
            Projects
          </NavLink>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="relative group overflow-hidden px-6 py-2.5 rounded-full font-mono font-semibold tracking-wide transition-all duration-300"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-90 group-hover:opacity-100 transition-opacity" />
            <span className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==')] opacity-20 group-hover:opacity-30 transition-opacity" />
            <span className="relative z-10 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-100 transition-all duration-300">
              Hire Me
            </span>
          </a>
        </div>

        {/* Mobile navigation */}
        <div className={`lg:hidden absolute left-0 right-0 top-full bg-black/95 backdrop-blur-md border-b border-purple-500/20 transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          <div className="container mx-auto py-4 px-6 flex flex-col gap-4">
            <NavLink 
              href="#about"
              onClick={(e) => handleNavClick(e, 'about')}
              className="block py-2 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-400 hover:to-blue-400"
            >
              About
            </NavLink>
            <NavLink 
              href="#skills"
              onClick={(e) => handleNavClick(e, 'skills')}
              className="block py-2 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-400 hover:to-blue-400"
            >
              Skills
            </NavLink>
            <NavLink 
              href="#projects"
              onClick={(e) => handleNavClick(e, 'projects')}
              className="block py-2 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-400 hover:to-blue-400"
            >
              Projects
            </NavLink>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="inline-block text-center py-2.5 px-6 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 font-semibold hover:opacity-90 transition-opacity"
            >
              Hire Me
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}