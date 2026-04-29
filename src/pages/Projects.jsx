// src/pages/Projects.jsx
import { useState } from "react";
import ProjectPopup from "./ProjectPopup";

const projects = [
  {
    image: "/projects/traffic-survey.png",
    imageAlt: "Traffic Survey at Prithivi Highway",
    name: "Traffic Volume Survey and Analysis at Prithivi Highway Intersection of Nepal",
    description:
      "At Civil Engineering and Research Consultancy (CERC) Pvt. Ltd., I conducted 24-hour manual traffic counts at key intersections, classifying vehicles into motorized and non-motorized categories. I systematically organized the hourly traffic data into structured spreadsheets to ensure accuracy and facilitate further analysis.",
    link: "#",
    tags: ["Traffic Survey", "Data Analysis", "Transport Planning"],
    details: {
      organization: "Civil Engineering and Research Consultancy (CERC) Pvt. Ltd.",
      role: "Civil Engineer (Field Researcher)",
      duration: "2023",
      highlights: [
        "Executed continuous 24-hour classified traffic volume counts at a major intersection along Prithivi Highway",
        "Categorized traffic into vehicle classes including two-wheelers, cars, buses, trucks, and non-motorized transport",
        "Prepared hourly traffic flow datasets and validated them for consistency and accuracy",
        "Analyzed peak hour factors (PHF), directional distribution, and modal composition",
        "Identified congestion patterns and critical load periods affecting intersection performance",
        "Supported transport planning decisions including road widening and signalization strategies",
      ],
      outcomes: [
        "Delivered accurate traffic data used for transport planning decisions",
        "Identified critical congestion windows to inform signalization strategies",
        "Provided actionable insights for road widening feasibility studies",
      ],
    },
  },
  {
    image: "/projects/water-supply.png",
    imageAlt: "Water Supply Engineering Course",
    name: "Water Supply Engineering Course",
    description:
      "Designed and delivered a comprehensive Water Supply Engineering course covering demand analysis, source selection, treatment processes, and distribution system design — with a focus on sustainable solutions for hilly regions of Nepal.",
    link: "#",
    tags: ["Course Design", "Water Systems", "Education"],
    details: {
      organization: "Independent Academic Program",
      role: "Course Designer & Instructor",
      duration: "2022 – Present",
      highlights: [
        "Designed a comprehensive curriculum covering water demand analysis, source selection, and distribution system design",
        "Developed practical modules on intake structures, sedimentation tanks, filtration, and disinfection processes",
        "Integrated real-world case studies from urban and rural water supply systems in Nepal",
        "Guided students in hydraulic calculations including pipe network analysis and reservoir design",
        "Prepared visual teaching materials, diagrams, and simplified design procedures for better understanding",
        "Focused on sustainable and gravity-based water supply systems suitable for hilly regions",
      ],
      outcomes: [
        "Improved student understanding of end-to-end water supply system design",
        "Enhanced ability to apply hydraulic calculations to real-world scenarios",
        "Strengthened student capacity to design sustainable systems for Nepal's terrain",
      ],
    },
  },
  {
    image: "/projects/surveying.png",
    imageAlt: "Surveying & Highway Engineering",
    name: "Surveying & Highway Engineering",
    description:
      "Delivered practical instruction on Surveying (I, II, III) and Hill Road Engineering with supervised field camps, real terrain-based road layout planning, and AutoCAD drafting — bridging classroom theory with hands-on fieldwork.",
    link: "#",
    tags: ["Surveying", "AutoCAD", "Field Work"],
    details: {
      organization: "Academic & Field Training Programs",
      role: "Instructor / Field Supervisor",
      duration: "2021 – Present",
      highlights: [
        "Delivered practical training in Surveying I, II, and III including leveling, traversing, and contour mapping",
        "Supervised field camps involving total station, theodolite, and GPS-based surveying techniques",
        "Trained students in route alignment, cross-sectioning, and hill road design principles",
        "Guided real terrain-based road layout planning considering slope stability and drainage",
        "Introduced students to AutoCAD for plotting survey data and preparing engineering drawings",
        "Emphasized accuracy, error adjustment, and field data validation techniques",
      ],
      outcomes: [
        "Students developed confidence in operating total stations and theodolites independently",
        "Field camp completion rate improved through structured supervision",
        "Strengthened student ability to produce professional engineering drawings in AutoCAD",
      ],
    },
  },
  {
    image: "/projects/soil-concrete-lab.png",
    imageAlt: "Soil Mechanics & Concrete Technology Labs",
    name: "Soil Mechanics & Concrete Technology Labs",
    description:
      "Developed and instructed comprehensive laboratory courses covering soil classification, compaction, permeability, shear strength, and concrete testing — linking standard testing protocols with real-world construction practices.",
    link: "#",
    tags: ["Labs", "Materials Testing", "Analysis"],
    details: {
      organization: "Engineering College Laboratory Program",
      role: "Lab Instructor / Coordinator",
      duration: "2021 – Present",
      highlights: [
        "Conducted laboratory experiments on soil classification, compaction, permeability, and shear strength",
        "Supervised concrete testing including slump test, compressive strength, and mix design procedures",
        "Ensured proper use of lab equipment and adherence to standard testing protocols (IS/ASTM)",
        "Guided students in interpreting test results and preparing technical lab reports",
        "Developed structured lab manuals to simplify complex geotechnical and material concepts",
        "Linked theoretical concepts with real-world construction practices",
      ],
      outcomes: [
        "Improved accuracy of student lab reports through structured guidance",
        "Reduced equipment misuse incidents through protocol training",
        "Enabled students to confidently interpret geotechnical and material test results",
      ],
    },
  },
  {
    image: "/projects/internship.png",
    imageAlt: "Civil Engineering Internship Project",
    name: "Civil Engineering Internship Project",
    description:
      "Prepared detailed structural drawings, performed quantity take-offs and cost estimation, and supported site inspections for residential and public infrastructure projects at Picasso Consultant Pvt. Ltd.",
    link: "#",
    tags: ["Structural Drawings", "Cost Estimation", "AutoCAD"],
    details: {
      organization: "Picasso Consultant Pvt. Ltd.",
      role: "Civil Engineering Intern",
      duration: "2022",
      highlights: [
        "Prepared detailed structural drawings for residential and public infrastructure projects",
        "Performed quantity take-offs and cost estimation using standard engineering practices",
        "Assisted in site inspections and monitored construction activities for compliance with design",
        "Used AutoCAD for drafting plans, elevations, and reinforcement detailing",
        "Collaborated with senior engineers on project planning and technical documentation",
        "Gained hands-on experience in real-world engineering workflows and client requirements",
      ],
      outcomes: [
        "Delivered complete drawing sets for multiple infrastructure projects on schedule",
        "Gained proficiency in real-world AutoCAD drafting and reinforcement detailing",
        "Built foundational experience in client-facing engineering documentation",
      ],
    },
  },
  {
    image: "/projects/soil-mechanics-yt.png",
    imageAlt: "Soil Mechanics Full Course",
    name: "Soil Mechanics Full Course (YouTube)",
    description:
      "Created and delivered a complete undergraduate Soil Mechanics video course on YouTube, covering consolidation, shear strength, permeability, and more — improving accessibility to quality engineering education for remote learners.",
    link: "#",
    tags: ["Online Teaching", "Soil Mechanics", "YouTube"],
    details: {
      organization: "Online Education Platform (YouTube)",
      role: "Content Creator & Instructor",
      duration: "2023 – Present",
      highlights: [
        "Created a complete Soil Mechanics video course covering all undergraduate-level topics",
        "Explained complex concepts like consolidation, shear strength, and permeability in a simplified manner",
        "Structured lessons progressively from basic principles to advanced numerical problems",
        "Used diagrams, animations, and real-life examples to enhance conceptual clarity",
        "Helped students prepare for exams and competitive engineering tests",
        "Improved accessibility to quality engineering education for remote and self-learning students",
      ],
      outcomes: [
        "Reached students across Nepal who lacked access to quality in-person instruction",
        "Positive feedback on exam preparedness and conceptual understanding",
        "Established an online presence as a trusted civil engineering educator",
      ],
    },
  },
];

const INITIAL_COUNT = 3;

function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [selected, setSelected] = useState(null);

  const visible = showAll ? projects : projects.slice(0, INITIAL_COUNT);

  return (
    <section id="projects" className="py-24 px-6 relative bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 inline-block relative">
            Projects
            <span className="absolute -bottom-2 left-[5%] w-[90%] h-1 bg-teal-500 rounded-full"></span>
          </h2>
          <p className="text-slate-300 mt-6 max-w-2xl mx-auto text-lg">
            My professional projects and academic contributions in civil
            engineering and education.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visible.map((project, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 overflow-hidden hover:shadow-[0_0_30px_rgba(20,184,166,0.15)] transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

              {/* Image */}
              <div className="relative w-full h-48 bg-slate-900/60 overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2 opacity-20">📐</div>
                      <p className="text-slate-600 text-xs">Add image in projects array</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-7 grow flex flex-col">
                <h3 className="text-lg font-bold mb-3 text-slate-100 group-hover:text-teal-400 transition-colors leading-snug">
                  {project.name}
                </h3>

                <p className="text-slate-300 text-sm mb-5 grow leading-relaxed line-clamp-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.tags.map((tag) => (
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
                    onClick={() => setSelected(project)}
                    className="w-full flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-900 py-2.5 rounded-xl font-bold text-sm transition-colors shadow-lg"
                  >
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Less */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => {
              if (showAll) {
                window.scrollTo({ top: document.getElementById("projects").offsetTop - 80, behavior: "smooth" });
              }
              setShowAll(!showAll);
            }}
            className="group flex items-center gap-3 px-8 py-3.5 rounded-full border border-teal-500/50 text-teal-400 font-semibold hover:bg-teal-500 hover:text-slate-900 transition-all duration-300 shadow-[0_0_15px_rgba(45,212,191,0.1)] hover:shadow-[0_0_25px_rgba(45,212,191,0.4)]"
          >
            {showAll ? "See Less" : `See More (${projects.length - INITIAL_COUNT} more)`}
            <span className={`transition-transform duration-300 ${showAll ? "rotate-180" : "rotate-0"}`}>↓</span>
          </button>
        </div>
      </div>

      {/* Popup */}
      {selected && (
        <ProjectPopup project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}

export default Projects;