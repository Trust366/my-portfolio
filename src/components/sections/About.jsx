import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "TypeScript",
    "TailwindCSS",
    "Next.js",
  ];

  const backendSkills = ["Node.js", "Python", "MongoDB", "Postgresql"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-fuchsia-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate Full-Stack Developer with a love for creating impactful digital experiences and
              constantly learning new technologies.
            </p>
            <p>
              <a href="https://github.com/Trust366" className="text-purple-500 hover:bg-purple-500/20">Github</a>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 
                                    hover:shadow-[0_2px_8px_rgba(168,85,247,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 
                                    hover:shadow-[0_2px_8px_rgba(168,85,247,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Certification </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> MERN Stack Development</strong> - APTECH COMPUTER EDUCATION
                  (Duration: 6 months)
                </li>
                
                

Completed an intensive hands-on program focused on full-stack JavaScript development using the MERN stack (MongoDB, Express.js, React, Node.js).
Key Highlights:
<li>
  
Built dynamic and responsive user interfaces using React and Tailwind CSS

</li>

<li>
Developed RESTful APIs and server-side logic with Node.js and Express.js

</li>
<li>Designed and managed databases with MongoDB, including CRUD operations and schema design
</li>
<li>Gained practical experience through real-world projects, collaborative coding, and version control with Git
</li>
<li>Strengthened problem-solving and debugging skills while building scalable full-stack web applications
</li>


                
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                  Fullstack Developer Tutor – Onet Solutions Ltd (2024 – Present)
                  </h4>
                  <p>
                  Mentored aspiring developers in fullstack web development using modern technologies like React, Node.js, Express, and MongoDB. Designed project-based learning modules and guided students through real-world application development.


                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                  Backend Developer Intern & Team Lead – HNG Internship (2023)
                  </h4>
                  <p>
                  Led a backend team in developing scalable REST APIs using Python and Django. Managed team tasks, ensured timely delivery of features, and facilitated effective collaboration. Contributed to database design, API integration, and debugging processes in a fast-paced, agile environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
