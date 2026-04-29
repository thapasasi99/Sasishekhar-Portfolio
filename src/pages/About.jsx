import { } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 inline-block relative">
            About Me
            <span className="absolute -bottom-2 left-[5%] w-[90%] h-1 bg-teal-500 rounded-full"></span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text */}
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-6 leading-relaxed">
              I'm a dedicated{" "}
              <span className="text-teal-400">Civil Engineer</span> committed to
              excellence in design and education.
            </h3>

            <div className="space-y-5 text-slate-300 text-lg leading-relaxed text-justify">
              <p>
                Hello! I am Sashisekhar Thapa, a Civil Engineer with a passion
                for both structural design and technical education. With a
                Bachelor's degree in Civil Engineering from Tribhuvan University
                and extensive professional experience, I bring expertise in
                engineering software, project management, and collaborative
                teaching.
              </p>

              <p>
                My career spans roles as a Laboratory Instructor, Lecturer, and
                Civil Engineer, where I've guided students through complex
                engineering concepts and supervised real-world projects. I'm
                proficient in AutoCAD, Civil 3D, ArcGIS, and other
                industry-standard tools, combined with strong analytical and
                programming capabilities.
              </p>

              <p>
                I'm committed to continuous learning, mentoring the next
                generation of engineers, and delivering high-quality engineering
                solutions that make a tangible impact. My experience in both
                academia and industry positions me uniquely to bridge
                theoretical knowledge with practical application.
              </p>
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-teal-400 font-semibold hover:text-cyan-400 transition-colors group"
              >
                Let's work together
                <span className="group-hover:translate-x-2 transition-transform duration-300">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Info Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-teal-500/10 blur-[100px] rounded-full"></div>
            <div className="relative bg-slate-800/60 backdrop-blur-md p-8 rounded-2xl border border-slate-700/50 shadow-xl">
              {/* Left border accent */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-400 to-cyan-500 rounded-l-2xl"></div>

              <div className="space-y-5 pl-4">
                <div>
                  <p className="text-slate-400 text-sm font-medium mb-1">Name:</p>
                  <p className="text-white text-lg font-semibold">Sashisekhar Thapa</p>
                </div>

                <div>
                  <p className="text-slate-400 text-sm font-medium mb-1">Email:</p>
                  <p className="text-white text-lg font-semibold">sashishekharthapa@gmail.com</p>
                </div>

                <div>
                  <p className="text-slate-400 text-sm font-medium mb-1">Phone:</p>
                  <p className="text-white text-lg font-semibold">+977 9869003789</p>
                </div>

                <div>
                  <p className="text-slate-400 text-sm font-medium mb-1">Address:</p>
                  <p className="text-white text-lg font-semibold">Lalitpur, Nepal</p>
                </div>

                <div>
                  <p className="text-slate-400 text-sm font-medium mb-1">Education:</p>
                  <p className="text-white text-lg font-semibold">Graduate in Civil Engineering</p>
                </div>

                <div>
                  <p className="text-slate-400 text-sm font-medium mb-1">Position:</p>
                  <p className="text-white text-lg font-semibold">Lecturer & Lab Assistant</p>
                </div>

                {/* Divider + View CV Button */}
                <div className="border-t border-slate-700/60 pt-4 flex justify-end">
                  <a
                    href="/Sasishekhar_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-teal-400 border border-teal-500/40 rounded-lg hover:bg-teal-500/10 hover:border-teal-400/70 transition-all duration-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="12" y1="18" x2="12" y2="12" />
                      <line x1="9" y1="15" x2="15" y2="15" />
                    </svg>
                    View CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;