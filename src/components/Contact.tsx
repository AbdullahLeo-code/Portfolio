import { Mail, LinkedinIcon } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-16 px-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2
          className="text-4xl font-bold text-white mb-8 text-center"
          style={{
            background: 'linear-gradient(90deg, #5BADFF, #1373D1)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          CONTACT
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-lg mb-12 text-center max-w-3xl mx-auto">
          Experienced UI/UX Designer with over a year of expertise in creating
          intuitive and visually appealing user interfaces. Skilled in designing
          seamless, user-centered experiences across digital platforms.
        </p>

        {/* Contact Details */}
        <div className="glass rounded-xl p-6 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#5BADFF] to-[#1373D1] flex items-center justify-center rounded-lg">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <a
                href="mailto:abdullahshuaib1030@gmail.com"
                className="text-gray-300 hover:text-white text-base sm:text-lg break-all"
              >
                abdullahshuaib1030@gmail.com
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/abdullah-shuaib-a94249257/"
                className="w-12 h-12 bg-gradient-to-r from-[#0A66C2] to-[#005582] flex items-center justify-center rounded-lg hover:opacity-90"
              >
                <LinkedinIcon className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://www.behance.net/mabdullah60"
                className="w-12 h-12 bg-gradient-to-r from-[#053EFF] to-[#3300FF] flex items-center justify-center rounded-lg hover:opacity-90"
              >
                <img src="/behance.svg" className="w-6 h-6 object-contain" alt="Behance" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
