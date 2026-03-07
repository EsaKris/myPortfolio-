import React, { useState } from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant, fadeIn } from "../utils/motion";

const Tech = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div>
      <motion.div variants={textVariant()}>
        <p
          className="text-xs font-mono tracking-[0.2em] uppercase mb-2"
          style={{ color: "#10b981" }}
        >
          — Stack
        </p>
        <h2
          className="text-white font-black"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            lineHeight: 1.1,
          }}
        >
          Technologies.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 0.8)}
        className="mt-4 text-sm font-mono"
        style={{ color: "#4b5563" }}
      >
        Tools I work with daily
      </motion.p>

      <div className="mt-12 flex flex-row flex-wrap justify-center gap-6">
        {technologies.map((technology, index) => (
          <motion.div
            key={technology.name}
            variants={fadeIn("up", "spring", index * 0.05, 0.4)}
            onMouseEnter={() => setHovered(technology.name)}
            onMouseLeave={() => setHovered(null)}
            className="relative group flex flex-col items-center gap-2"
          >
            {/* Tooltip */}
            <div
              className="absolute -top-8 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg text-xs font-mono whitespace-nowrap transition-all duration-200 pointer-events-none"
              style={{
                background: "rgba(2,11,18,0.95)",
                border: "1px solid rgba(16,185,129,0.2)",
                color: "#10b981",
                opacity: hovered === technology.name ? 1 : 0,
                transform: `translateX(-50%) translateY(${hovered === technology.name ? 0 : 4}px)`,
              }}
            >
              {technology.name}
            </div>

            {/* Ball container */}
            <div
              className="w-24 h-24 relative transition-all duration-300"
              style={{
                filter: hovered === technology.name
                  ? "drop-shadow(0 0 12px rgba(16,185,129,0.4))"
                  : "none",
                transform: hovered === technology.name ? "scale(1.1)" : "scale(1)",
              }}
            >
              <BallCanvas icon={technology.icon} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");