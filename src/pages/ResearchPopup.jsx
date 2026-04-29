// src/pages/ResearchPopup.jsx
import { useEffect } from "react";
import { FaTimes, FaExternalLinkAlt } from "react-icons/fa";

function ResearchPopup({ item, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-6"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-md"></div>

      {/* Modal — wide, no scroll */}
      <div
        className="relative w-full max-w-4xl rounded-3xl bg-slate-900 border border-slate-700/60 shadow-[0_0_100px_rgba(20,184,166,0.12)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        style={{
          animation: "modalIn 0.3s cubic-bezier(0.34,1.56,0.64,1) both",
        }}
      >
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 via-cyan-400 to-teal-500"></div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 hover:border-teal-500/50 transition-all duration-200"
        >
          <FaTimes className="text-sm" />
        </button>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-[1fr_1.4fr]">
          {/* LEFT — Image + meta */}
          <div className="bg-slate-800/40 p-8 flex flex-col gap-6 border-r border-slate-700/40">
            {/* Image */}
            <div className="w-full h-52 rounded-2xl overflow-hidden bg-slate-900/60">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-7xl opacity-10">🏗️</div>
                </div>
              )}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-semibold bg-teal-500/10 text-teal-300 rounded-full border border-teal-500/30"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Meta info */}
            <div className="space-y-4">
              {item.details?.authors && (
                <div>
                  <p className="text-teal-400 text-xs font-semibold uppercase tracking-wider mb-1">
                    Authors
                  </p>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.details.authors}
                  </p>
                </div>
              )}
              {item.details?.journal && (
                <div>
                  <p className="text-teal-400 text-xs font-semibold uppercase tracking-wider mb-1">
                    Journal / Venue
                  </p>
                  <p className="text-slate-300 text-sm">
                    {item.details.journal}
                  </p>
                </div>
              )}
              {item.details?.supervisor && (
                <div>
                  <p className="text-teal-400 text-xs font-semibold uppercase tracking-wider mb-1">
                    Supervisor
                  </p>
                  <p className="text-slate-300 text-sm">
                    {item.details.supervisor}
                  </p>
                </div>
              )}
              {item.details?.year && (
                <div>
                  <p className="text-teal-400 text-xs font-semibold uppercase tracking-wider mb-1">
                    Year
                  </p>
                  <p className="text-slate-300 text-sm">{item.details.year}</p>
                </div>
              )}
              {item.details?.doi && (
                <div>
                  <p className="text-teal-400 text-xs font-semibold uppercase tracking-wider mb-1">
                    DOI
                  </p>
                  <p className="text-slate-300 text-sm break-all">
                    {item.details.doi}
                  </p>
                </div>
              )}
            </div>

            {/* External link */}
            {item.link && item.link !== "#" && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex items-center justify-center gap-2 w-full bg-teal-500 hover:bg-teal-400 text-slate-900 py-3 rounded-xl font-bold text-sm transition-colors shadow-lg"
              >
                <FaExternalLinkAlt className="text-xs" /> View Published Paper
              </a>
            )}
          </div>

          {/* RIGHT — Title + overview + highlights */}
          <div className="p-8 flex flex-col gap-6">
            {/* Title */}
            <h2 className="text-2xl font-extrabold text-white leading-snug pr-10">
              {item.title}
            </h2>

            {/* Overview */}
            <div>
              <h4 className="text-teal-400 text-xs font-semibold uppercase tracking-wider mb-3">
                Overview
              </h4>
              <p className="text-slate-400 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>

            {/* Key Highlights */}
            {item.details?.highlights && (
              <div>
                <h4 className="text-teal-400 text-xs font-semibold uppercase tracking-wider mb-3">
                  Key Highlights
                </h4>
                <ul className="space-y-3">
                  {item.details.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-slate-400"
                    >
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-teal-500 shrink-0"></span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Methodology — estimated for cards without published link */}
            {item.details?.methodology && (
              <div>
                <h4 className="text-teal-400 text-xs font-semibold uppercase tracking-wider mb-3">
                  Methodology
                </h4>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {item.details.methodology}
                </p>
              </div>
            )}

            {/* Outcome */}
            {item.details?.outcome && (
              <div>
                <h4 className="text-teal-400 text-xs font-semibold uppercase tracking-wider mb-3">
                  Outcome
                </h4>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {item.details.outcome}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.93) translateY(16px); }
          to   { opacity: 1; transform: scale(1)    translateY(0);    }
        }
      `}</style>
    </div>
  );
}

export default ResearchPopup;
