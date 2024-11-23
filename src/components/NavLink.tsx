import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function NavLink({ href, children, className = '', onClick }: NavLinkProps) {
  return (
    <a 
      href={href} 
      onClick={onClick}
      className={`relative text-gray-300 hover:text-white transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full ${className}`}
    >
      {children}
    </a>
  );
}