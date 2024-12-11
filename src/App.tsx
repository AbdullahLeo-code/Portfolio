import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Work } from './components/Work';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { ExperienceWith } from './components/ExperienceWith';

export function App() {
  return (
    <div className="min-h-screen bg-[#111111]">
      <Header />
      <main>
        <Hero />
        <ExperienceWith/>
        <Work />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;