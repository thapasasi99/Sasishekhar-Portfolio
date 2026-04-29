// src/pages/Research.jsx
import { useState } from "react";
import ResearchPopup from "./ResearchPopup";

const research = [
  {
    image: "/research/rc-building.png",
    imageAlt: "G+4 RC Building 3D Model",
    title:
      "Numerical Modeling, Analysis and Structural Design of G+4 RC Building with Re-entrant Corners.",
    description:
      "Led a team of five to perform a structural analysis and design of a residential structure in Nepal. Performed ETABS analysis and designed the structure using IS 1893:2016, IS 456:2000, and IS 13920:2016. Published in Asian Journal of Engineering and Technology (2025).",
    link: "https://doi.org/10.24203/wpvg1q26",
    tags: ["ETABS", "Structural Analysis", "IS Codes", "Published"],
    details: {
      authors: "Thapa, A., Thapa, S., Thapa, K., and Gwachha, J.",
      journal: "Asian Journal of Engineering and Technology",
      year: "2025",
      doi: "10.24203/wpvg1q26",
      highlights: [
        "Led a team of five for structural analysis and design",
        "Performed ETABS analysis on a G+4 RC building with re-entrant corners",
        "Designed using IS 1893:2016, IS 456:2000, and IS 13920:2016",
        "Studied the effect of re-entrant corners on structural behavior",
        "Published in a peer-reviewed international journal",
      ],
    },
  },
  {
    image: "/research/rigid-pavement.png",
    imageAlt: "Rigid Pavement FEM Model",
    title:
      "Mechanistic Modeling of Rigid Pavement Subject to Traffic and Environment Loads",
    description:
      "Built a finite element model of a Continuously Reinforced Concrete Pavement (CRCP) slab by explicitly modeling cracks and subgrade interaction, and validated it with experimental results. A coupled thermal-mechanical analysis was performed to study stress distribution and deflection profiles, while creep effects were incorporated to evaluate long-term pavement performance under realistic loading conditions.",
    link: "#",
    tags: ["FEM", "CRCP", "Abaqus", "Thermal-Mechanical"],
    details: {
      journal: "Academic Research Project",
      year: "2023",
      highlights: [
        "Built a finite element model of a CRCP slab in Abaqus",
        "Explicitly modeled cracks and subgrade interaction",
        "Validated model with experimental results",
        "Performed coupled thermal-mechanical analysis",
        "Studied stress distribution and deflection profiles",
        "Incorporated creep effects for long-term performance evaluation",
      ],
    },
  },
  {
    image: "/research/asphalt-mix.png",
    imageAlt: "Asphalt Mix Testing",
    title: "Asphalt Mix Performance Evaluation for Sustainable Pavement Design",
    description:
      "Conducted under the supervision of Dr. Pradeep Kumar Shrestha. Performed laboratory tests on aggregates including abrasion and crushing value, as well as bitumen tests such as penetration, viscosity, ductility, and softening point. Carried out Marshall stability and flow tests to evaluate pavement strength and overall performance.",
    link: "#",
    tags: ["Marshall Test", "Bitumen", "Lab Testing", "Pavement Design"],
    details: {
      supervisor: "Dr. Pradeep Kumar Shrestha",
      journal: "Academic Research Project",
      year: "2023",
      highlights: [
        "Performed aggregate tests — abrasion and crushing value",
        "Conducted bitumen tests — penetration, viscosity, ductility, softening point",
        "Carried out Marshall stability and flow tests",
        "Evaluated pavement strength and overall mix performance",
        "Aimed at sustainable pavement design solutions",
      ],
    },
  },
];

function Research() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="research" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 inline-block relative">
            Research Works
            <span className="absolute -bottom-2 left-[5%] w-[90%] h-1 bg-teal-500 rounded-full"></span>
          </h2>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg">
            Academic research and published works in structural and civil
            engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {research.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 overflow-hidden hover:shadow-[0_0_30px_rgba(20,184,166,0.15)] transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

              {/* Image */}
              <div className="relative w-full h-52 bg-slate-900/60 overflow-hidden">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-5xl mb-2 opacity-20">🏗️</div>
                      <p className="text-slate-600 text-xs">
                        Add image in research array
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-slate-100 group-hover:text-teal-400 transition-colors mb-3 leading-snug">
                  {item.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1 line-clamp-4">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-slate-900/80 text-teal-300 rounded-full border border-teal-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-700/50">
                  <button
                    onClick={() => setSelected(item)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-900 px-5 py-2.5 rounded-xl font-bold text-sm transition-colors shadow-lg"
                  >
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup */}
      {selected && (
        <ResearchPopup item={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}

export default Research;