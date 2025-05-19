import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-fuchsia-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Auction Website */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_2px_8px_rgba(168,85,247,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Auction Web App</h3>
              <p className="text-gray-400 mb-4">
                A full-stack auction platform where users can bid in real-time, manage listings, and track auctions.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Redux", "Node.js", "Express.js", "MongoDB"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(168,85,247,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://auction-website-pink-rho.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* HiSpeed Empowerment Website */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_2px_8px_rgba(168,85,247,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">HiSpeed Empowerment Website</h3>
              <p className="text-gray-400 mb-4">
                A business support and empowerment platform showcasing programs and initiatives aimed at helping entrepreneurs thrive.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Next.js", "MongoDB"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(168,85,247,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://www.hi-speed.online/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            

            {/* Job Portal Web App */}
<div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_2px_8px_rgba(168,85,247,0.2)] transition">
  <h3 className="text-xl font-bold mb-2">Job Portal Web App</h3>
  <p className="text-gray-400 mb-4">
    A full-stack job portal where users can sign up, post and apply for jobs, and manage their applications. Includes company dashboards, authentication, and role-based access.
  </p>
  <div className="flex flex-wrap gap-2 mb-4">
    {["React", "Vite", "Tailwind CSS", "Express.js", "MongoDB"].map((tech, key) => (
      <span
        key={key}
        className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(168,85,247,0.1)] transition-all"
      >
        {tech}
      </span>
    ))}
  </div>
  <div className="flex justify-between items-center">
    <a
      href="https://job-portal-indol-phi.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-purple-400 hover:text-purple-300 transition-colors my-4"
    >
      View Project →
    </a>
  </div>
</div>

            {/* Leave space for more projects */}
            {/* You can paste the other two projects here later */}

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
