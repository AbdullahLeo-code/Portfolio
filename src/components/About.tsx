import { Palette, Users, Lightbulb } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-16 px-20">
  {/* Title outside of the main container */}
  <h2
    className="text-4xl font-bold text-white mb-12 text-center"
    style={{
      background: 'linear-gradient(90deg, #FDFDFD, #FFFFFF)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    }}
  >
    ABOUT ME
  </h2>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="glass rounded-xl p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-6">Hello! I'm a Designer</h3>
          <p className="text-gray-300 text-lg mb-8">
          I’m Abdullah Shuaib, a skilled UI/UX Designer with over a year of experience and a background in graphic design. I specialize in WordPress design and have strong expertise in JavaScript, CSS, and HTML, enabling me to deliver seamless and engaging user-focused digital experiences.


          </p>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#5BADFF] to-[#1373D1] flex items-center justify-center rounded-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white">User Research</h4>
                <p className="text-gray-300">
                  Deep understanding of user needs and behaviors.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#FF8660] to-[#8000FF] flex items-center justify-center rounded-lg">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white">UI Design</h4>
                <p className="text-gray-300">
                  Beautiful, intuitive interfaces that users love.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#FFD700] to-[#FF4500] flex items-center justify-center rounded-lg">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white">Design Strategy</h4>
                <p className="text-gray-300">
                  Strategic solutions to complex design challenges.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="relative">
          <img
            src="/5779865.jpg"
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