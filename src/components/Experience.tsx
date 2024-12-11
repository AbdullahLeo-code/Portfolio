import React from 'react';

export function Experience() {
  return (
    <section className="py-20" id="experience">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 flex justify-center
        
        "  style={{
    background: 'linear-gradient(90deg, #5BADFF, #1373D1)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  }}>EXPERIENCE</h2>
        <div className="space-y-12">
          <div className="glass rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#5BADFF] to-[#1373D1] flex items-center justify-center">
                <span className="text-white font-bold">L</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-white">UI/UX Designer at Logixsy</h3>
                    <p className="text-gray-400">Jan 2024 - Present</p>
                  </div>
                </div>
                <p className="text-gray-300 mt-4">
                  As a UI/UX Designer at Logixsy, I have contributed to creating intuitive and visually engaging designs that
                  improve user experiences. Working closely with a talented team, I focus on crafting user-centric solutions that
                  enhance the overall functionality and aesthetic of digital products.
                </p>
              </div>
            </div>
          </div>

          <div className="glass rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#FF8660] to-[#8000FF] flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-white">Graphic Designer at Sixdees</h3>
                    <p className="text-gray-400">June 2022 - Dec 2023</p>
                  </div>
                </div>
                <p className="text-gray-300 mt-4">
                  During my tenure at Sixdees, I held the role of Software Architect, where I played a key role in shaping the
                  architecture of mission-critical software projects. Responsible for designing scalable and efficient systems, I
                  provided technical leadership to a cross-functional team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}