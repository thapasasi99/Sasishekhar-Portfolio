import { FaDrawPolygon, FaDatabase, FaChartBar, FaTools, FaFileExcel } from "react-icons/fa";
import { SiPython } from "react-icons/si";

const skills = [
  { name: "AutoCAD", icon: <FaDrawPolygon className="text-[#C41E3A]" /> },
  { name: "Civil 3D", icon: <FaDrawPolygon className="text-[#0078D4]" /> },
  { name: "ArcGIS", icon: <FaTools className="text-[#00A9E6]" /> },
  { name: "SketchUp", icon: <FaDrawPolygon className="text-[#005EB8]" /> },
  { name: "Python", icon: <SiPython className="text-[#3776ab]" /> },
  { name: "C++", icon: <FaChartBar className="text-[#00599C]" /> },
  { name: "MS Excel", icon: <FaFileExcel className="text-[#217346]" /> },
  {
    name: "Microsoft Project",
    icon: <FaDatabase className="text-[#4472C4]" />,
  },
  { name: "Google Classroom", icon: <FaDatabase className="text-[#34A853]" /> },
  { name: "Data Analysis", icon: <FaChartBar className="text-[#FF6B6B]" /> },
];

function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-teal-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 inline-block relative">
            Technical Skills
            <span className="absolute -bottom-2 left-[5%] w-[90%] h-1 bg-teal-500 rounded-full"></span>
          </h2>
          <p className="text-slate-300 mt-6 max-w-2xl mx-auto text-lg">
            Professional expertise in engineering software, design tools, and
            analysis platforms.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="group flex items-center gap-3 px-6 py-4 bg-slate-800/60 backdrop-blur-md rounded-xl border border-slate-700/50 hover:border-teal-500/50 hover:bg-slate-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(20,184,166,0.1)] cursor-pointer"
            >
              <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <span className="font-semibold text-slate-200 group-hover:text-white transition-colors tracking-wide">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
