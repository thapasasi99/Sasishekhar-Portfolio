// src/pages/ProjectPopup.jsx
import { useEffect } from "react";

export default function ProjectPopup({ project, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!project) return null;

  const rsi = project.details.roadSafetyInspection;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white text-2xl z-10 leading-none"
        >
          ✕
        </button>

        {/* Image */}
        <div className="w-full h-52 overflow-hidden rounded-t-2xl">
          {project.image ? (
            <img
              src={project.image}
              alt={project.imageAlt}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-500">
              No Image
            </div>
          )}
        </div>

        {/* Body */}
        <div className="p-8">

          {/* Title */}
          <h2 className="text-2xl font-bold text-white mb-1 pr-6">{project.name}</h2>

          {/* Meta */}
          <p className="text-teal-400 text-sm font-medium mb-1">
            {project.details.organization}
          </p>
          <p className="text-slate-400 text-sm mb-4">
            {project.details.role} &nbsp;|&nbsp; {project.details.duration}
          </p>

          {/* Description */}
          <p className="text-slate-300 text-sm leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Highlights */}
          <h3 className="text-white font-semibold mb-3">Key Highlights</h3>
          <ul className="space-y-2 mb-6">
            {project.details.highlights.map((h, i) => (
              <li key={i} className="flex gap-2 text-slate-300 text-sm">
                <span className="text-teal-400 mt-0.5 shrink-0">✔</span>
                {h}
              </li>
            ))}
          </ul>

          {/* Outcomes */}
          <h3 className="text-white font-semibold mb-3">Outcomes</h3>
          <ul className="space-y-2 mb-6">
            {project.details.outcomes.map((o, i) => (
              <li key={i} className="flex gap-2 text-slate-300 text-sm">
                <span className="text-teal-400 mt-0.5 shrink-0">🎯</span>
                {o}
              </li>
            ))}
          </ul>

          {/* ── ROAD SAFETY INSPECTION SECTION ── */}
          {rsi && (
            <div className="mt-2 border-t border-slate-700 pt-6">

              {/* Section Header */}
              <div className="bg-slate-800 rounded-xl p-4 mb-5">
                <h3 className="text-teal-400 font-bold text-base mb-1">
                  🛣️ {rsi.title}
                </h3>
                <p className="text-slate-300 text-xs mb-0.5">
                  📍 <span className="font-medium">{rsi.roadSection}</span> &nbsp;|&nbsp; Inspection Length: <span className="font-medium">{rsi.inspectionLength}</span>
                </p>
                <p className="text-slate-400 text-xs mb-0.5">
                  👨‍🏫 {rsi.instructor}
                </p>
                <p className="text-slate-400 text-xs mb-0.5">
                  🏛️ {rsi.institution}
                </p>
                <p className="text-slate-400 text-xs">
                  📅 Date: {rsi.date}
                </p>
              </div>

              {/* Team Members */}
              <div className="mb-5">
                <h4 className="text-white font-semibold text-sm mb-2">👥 Group B Members</h4>
                <div className="flex flex-wrap gap-2">
                  {rsi.teamMembers.map((member, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-slate-800 text-slate-300 rounded-full border border-slate-600"
                    >
                      {member}
                    </span>
                  ))}
                </div>
              </div>

              {/* Personal Reflection */}
              <div className="mb-5">
                <h4 className="text-white font-semibold text-sm mb-2">💭 Personal Reflection</h4>
                <blockquote className="bg-slate-800/80 border-l-4 border-teal-500 rounded-r-xl p-4 text-slate-300 text-sm italic leading-relaxed">
                  "{rsi.reflection}"
                </blockquote>
              </div>

              {/* What is Road Safety Audit */}
              <div className="mb-5">
                <h4 className="text-white font-semibold text-sm mb-2">📋 What is a Road Safety Audit?</h4>
                <p className="text-slate-300 text-sm leading-relaxed">{rsi.auditDefinition}</p>
              </div>

              {/* Audit Parameters */}
              <div className="mb-5">
                <h4 className="text-white font-semibold text-sm mb-2">🔍 Audit Parameters Assessed</h4>
                <ul className="space-y-1.5">
                  {rsi.auditParameters.map((param, i) => (
                    <li key={i} className="flex gap-2 text-slate-300 text-sm">
                      <span className="text-teal-400 mt-0.5 shrink-0">▸</span>
                      {param}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Issues Found by Category */}
              <div className="mb-2">
                <h4 className="text-white font-semibold text-sm mb-3">
                  ⚠️ Issues Identified (First 500m of B.P. Highway)
                </h4>
                <div className="space-y-4">
                  {rsi.issuesFound.map((group, i) => (
                    <div key={i} className="bg-slate-800/60 rounded-xl p-4">
                      <h5 className="text-teal-300 font-semibold text-xs uppercase tracking-wide mb-2">
                        {group.category}
                      </h5>
                      <ul className="space-y-1.5">
                        {group.problems.map((problem, j) => (
                          <li key={j} className="flex gap-2 text-slate-300 text-sm">
                            <span className="text-red-400 mt-0.5 shrink-0">⚠</span>
                            {problem}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-slate-700">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium bg-slate-800 text-teal-300 rounded-full border border-teal-500/20"
              >
                {tag}
              </span>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
