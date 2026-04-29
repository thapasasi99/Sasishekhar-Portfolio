// src/pages/ProjectPopup.jsx
import { useEffect } from "react";
import { FaTimes, FaExternalLinkAlt } from "react-icons/fa";

function ProjectPopup({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"></div>

      {/* Modal card */}
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-900 border border-slate-700/60 shadow-[0_0_80px_rgba(20,184,166,0.15)]"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: "modalIn 0.3s cubic-bezier(0.34,1.56,0.64,1) both" }}
      >
        {/* Top teal accent bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 via-cyan-400 to-teal-500 rounded-t-3xl"></div>

        {/* ── Header ── */}
        <div className="relative p-8 pb-0">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 hover:border-teal-500/50 transition-all duration-200"
          >
            <FaTimes className="text-sm" />
          </button>

          {/* Image */}
          <div className="w-full h-52 rounded-2xl overflow-hidden bg-slate-800/60 mb-6">
            {project.image ? (
              <img
                src={project.image}
                alt={project.imageAlt}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-6xl opacity-10">📐</div>
              </div>
            )}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-semibold bg-teal-500/10 text-teal-300 rounded-full border border-teal-500/30"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h2 className="text-2xl font-extrabold text-white leading-snug pr-10">
            {project.name}
          </h2>
        </div>

        {/* ── Body ── */}
        <div className="p-8 pt-5 space-y-6">

          {/* Meta info cards */}
          {project.details && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.details.organization && (
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/40 sm:col-span-2">
                  <p className="text-teal-400 text-xs font-semibold uppercase tracking-wider mb-1">Organization</p>
                  <p className="text-white text-sm font-medium">{project.details.organization}</p>
                </div>
              )}
              {project.details.role && (
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/40">
                  <p className="text-teal-400 text-xs font-semibold uppercase tracking-wider mb-1">Role</p>
                  <p className="text-white text-sm font-medium">{project.details.role}</p>
                </div>
              )}
              {project.details.duration && (
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/40">
                  <p className="text-teal-400 text-xs font-semibold uppercase tracking-wider mb-1">Duration</p>
                  <p className="text-white text-sm font-medium">{project.details.duration}</p>
                </div>
              )}
            </div>
          )}

          {/* Overview */}
          <div>
            <h4 className="text-teal-400 text-xs font-semibold uppercase tracking-wider mb-3">Overview</h4>
            <p className="text-slate-400 leading-relaxed text-sm">{project.description}</p>
          </div>

          {/* Key Highlights */}
          {project.details?.highlights && (
            <div>
              <h4 className="text-teal-400 text-xs font-semibold uppercase tracking-wider mb-3">Key Highlights</h4>
              <ul className="space-y-2.5">
                {project.details.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-teal-500 shrink-0"></span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Impact / Outcomes */}
          {project.details?.outcomes && (
            <div className="bg-teal-500/5 border border-teal-500/20 rounded-2xl p-5">
              <h4 className="text-teal-400 text-xs font-semibold uppercase tracking-wider mb-3">
                Impact & Outcomes
              </h4>
              <ul className="space-y-2.5">
                {project.details.outcomes.map((o, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-cyan-400 shrink-0"></span>
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* External link button */}
          {project.link && project.link !== "#" && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-teal-500 hover:bg-teal-400 text-slate-900 py-3 rounded-xl font-bold text-sm transition-colors shadow-lg"
            >
              <FaExternalLinkAlt className="text-xs" /> View Full Project
            </a>
          )}
        </div>
      </div>

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.92) translateY(20px); }
          to   { opacity: 1; transform: scale(1)    translateY(0);    }
        }
      `}</style>
    </div>
  );
}

export default ProjectPopup;