import React from 'react';
import { Palette, Users, Lightbulb } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-2xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
              <p className="text-lg text-gray-300 mb-8">
                I'm a passionate UI/UX designer with over 5 years of experience creating
                beautiful and user-centered digital experiences. I combine creativity with
                strategic thinking to design solutions that delight users and achieve business goals.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="glass p-3 rounded-lg">
                    <Users className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">User Research</h3>
                    <p className="text-gray-300">Deep understanding of user needs and behaviors</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="glass p-3 rounded-lg">
                    <Palette className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">UI Design</h3>
                    <p className="text-gray-300">Beautiful, intuitive interfaces that users love</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="glass p-3 rounded-lg">
                    <Lightbulb className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Design Strategy</h3>
                    <p className="text-gray-300">Strategic solutions to complex design challenges</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Design Process"
                className="rounded-lg"
              />
              <div className="absolute inset-0 glass rounded-lg opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}