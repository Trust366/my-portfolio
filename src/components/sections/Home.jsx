import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-fuchsia-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Trust Elechi
          </h1>

          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I’m a Full-Stack Developer who loves building clean, scalable web applications and solving real-world problems with code. I enjoy working across the stack _ from crafting sleek user interfaces to designing robust backend systems.

          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-purple-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(168, 85, 247, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-purple-500/50 text-purple-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(168, 85, 247, 0.2)] hover:bg-purple-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
