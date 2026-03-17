import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_link }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.12, 0.5)}>
      <Tilt
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        glareEnable={true}
        glareMaxOpacity={0.06}
        className="sm:w-[340px] w-full"
      >
        <div
          className="relative rounded-2xl overflow-hidden group cursor-default transition-all duration-300"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: hovered
              ? "1px solid rgba(16,185,129,0.25)"
              : "1px solid rgba(255,255,255,0.07)",
            boxShadow: hovered
              ? "0 20px 48px rgba(0,0,0,0.5), 0 0 30px rgba(16,185,129,0.07)"
              : "0 4px 24px rgba(0,0,0,0.3)",
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Image */}
          <div className="relative h-48 overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-500"
              style={{ transform: hovered ? "scale(1.05)" : "scale(1)" }}
            />

            {/* Image overlay */}
            <div
              className="absolute inset-0 transition-opacity duration-300"
              style={{
                background: hovered
                  ? "linear-gradient(to bottom, rgba(2,11,18,0.1), rgba(2,11,18,0.6))"
                  : "linear-gradient(to bottom, transparent, rgba(2,11,18,0.4))",
              }}
            />

            {/* Action buttons — top right */}
            <div
              className="absolute top-3 right-3 flex gap-2 transition-all duration-200"
              style={{
                opacity: hovered ? 1 : 0,
                transform: hovered ? "scale(1)" : "scale(0.8)",
              }}
            >
              {/* GitHub button */}
              <button
                onClick={() => window.open(source_code_link, "_blank")}
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
                style={{
                  background: "rgba(2,11,18,0.85)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  backdropFilter: "blur(8px)",
                }}
                title="View Source"
              >
                <img src={github} alt="github" className="w-4 h-4 object-contain" />
              </button>

              {/* Live link button */}
              {live_link && (
                <button
                  onClick={() => window.open(live_link, "_blank")}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
                  style={{
                    background: "rgba(16,185,129,0.15)",
                    border: "1px solid rgba(16,185,129,0.35)",
                    backdropFilter: "blur(8px)",
                    color: "#10b981",
                  }}
                  title="View Live Site"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            <h3
              className="font-bold text-white leading-tight"
              style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.1rem" }}
            >
              {name}
            </h3>

            <p
              className="mt-2 text-sm leading-relaxed line-clamp-3"
              style={{
                color: "#6b7280",
                fontFamily: "'DM Sans', sans-serif",
                lineHeight: "1.65",
              }}
            >
              {description}
            </p>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <span
                  key={tag.name}
                  className="text-xs font-mono px-2.5 py-1 rounded-lg"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#6b7280",
                  }}
                >
                  #{tag.name}
                </span>
              ))}
            </div>

            {/* Footer links */}
            <div
              className="mt-4 pt-4 flex items-center justify-between"
              style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
            >
              <button
                onClick={() => window.open(source_code_link, "_blank")}
                className="flex items-center gap-2 text-xs font-mono transition-colors duration-200"
                style={{ color: hovered ? "#10b981" : "#4b5563" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View source ↗
              </button>

              {live_link && (
                <button
                  onClick={() => window.open(live_link, "_blank")}
                  className="flex items-center gap-1.5 text-xs font-mono transition-colors duration-200"
                  style={{ color: hovered ? "#10b981" : "#4b5563" }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                  Live site ↗
                </button>
              )}
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p
          className="text-xs font-mono tracking-[0.2em] uppercase mb-2"
          style={{ color: "#10b981" }}
        >
          — Portfolio
        </p>
        <h2
          className="text-white font-black"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            lineHeight: 1.1,
          }}
        >
          Projects.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-5 max-w-2xl leading-relaxed text-sm"
        style={{
          color: "#6b7280",
          fontFamily: "'DM Sans', sans-serif",
          lineHeight: "1.75",
        }}
      >
        Real-world projects that showcase my ability to solve complex problems,
        work across the stack, and ship things that actually work.
      </motion.p>

      <div className="mt-14 flex flex-wrap gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");