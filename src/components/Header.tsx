import React from 'react';
import { Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed w-full z-50 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-white">
            AS
          </a>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-white">Home</a>
            <a href="#work" className="text-gray-300 hover:text-white">Projects</a>
            <a href="#experience" className="text-gray-300 hover:text-white">Experience</a>
            <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
          </div>
          <button className="md:hidden text-white">
            <Menu className="w-6 h-6" />
          </button>
        </nav>
      </div>
    </header>
  );
}