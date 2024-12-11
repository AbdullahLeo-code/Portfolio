import React from 'react';

export function ExperienceWith() {
  return (
    <section className="py-24" id="experiencewith">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12 flex justify-center"
         style={{
           background: 'linear-gradient(90deg, #FDFDFD, #FFFFFF)',
           WebkitBackgroundClip: 'text',
           WebkitTextFillColor: 'transparent', }}>EXPERIENCE WITH</h2>
        <div >
        <img
              src="/experience.png"
              //  className=" ml-10 "
            />
          
          {/* <div className="glass rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#5BADFF] to-[#1373D1] flex items-center justify-center">
                <span className="text-white font-bold">L</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-white">UI/UX Designer at Logixsy</h3>
                   
                  </div>
                </div>
              
              </div>
            </div>
          </div> */}

        </div>
      </div>
    </section>
  );
}