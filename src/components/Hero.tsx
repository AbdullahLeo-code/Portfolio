import Spline from '@splinetool/react-spline';

export function Hero() {
  return (
    <section className="min-h-screen relative flex flex-col items-center justify-center text-center px-4">
  <Spline
    scene="https://prod.spline.design/J2MsgQUyoX4wS4OJ/scene.splinecode"
    className="absolute inset-0 w-full h-full"
  />
  <div className="relative z-10 max-w-3xl mx-auto">
    <div className="mb-8 mt-28">
      <div className="w-32 h-32 mx-auto relative">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF8660] to-[#8000FF]" />
        <img
          src="/avatar.svg"
          alt="Avatar"
          className="relative w-full h-full rounded-full p-0.5"
        />
      </div>
    </div>
    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
      I design and create<br />
      content around{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#9B6BFF]">
        UI/UX!
      </span>
    </h1>
    <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
      I’m Abdullah Shuaib, a UI/UX Designer with over a year of experience, including
      graphic design expertise. I have a strong foundation in WordPress design
      and am proficient in JavaScript, CSS, and HTML, enabling me to create seamless,
      user-friendly digital experiences.    </p>
    <div className="flex gap-4 justify-center">
      <a
        href="#contact"
        className="px-8 py-3 rounded-full text-black hover:text-black/90 bg-white font-semibold"
      >
        Get in Touch
      </a>
      <a
        href="/abdullah.pdf"
        className="glass px-8 py-3 rounded-full text-white hover:text-white/90 border border-white/20"
      >
        Download CV
      </a>
    </div>
  </div>
</section>

  );
}