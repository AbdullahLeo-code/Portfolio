import React from 'react';
import { Mail, Instagram, Twitter, Youtube, LinkedinIcon } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-white mb-6">Contact</h2>
        <p className="text-gray-300 mb-8">
          Experienced UI/UX Designer with over a year of expertise in creating
          intuitive and visually appealing user interfaces. Skilled in designing
          seamless, user-centered experiences across digital platforms.
        </p>
        <div className="glass rounded-xl p-6">
          <div className="flex items-center gap-2 text-gray-300 mb-4">
            <Mail className="w-5 h-5" />
            <a href="mailto:am94833@gmail.com" className="hover:text-white">
              am94833@gmail.com
            </a>
          </div>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/abdullah-shuaib-a94249257/" className="text-gray-300 hover:text-white">
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a href="https://www.behance.net/mabdullah60" className="text-gray-300 hover:text-white">
              <img
            src='/behance.svg'
            className="w-6 h-6 object-fit"
          />
            </a>
          
          </div>
        </div>
      </div>
    </section>
  );
}