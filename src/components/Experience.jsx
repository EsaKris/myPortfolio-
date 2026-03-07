import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const ExperienceCard = ({ experience, index, isActive, onClick }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.5)}
      onClick={onClick}
      className="cursor-pointer group"
    >
      <div
        className="relative flex gap-5 p-5 rounded-2xl transition-all duration-300"
        style={{
          background: isActive
            ? "rgba(16,185,129,0.07)"
            : "rgba(255,255,255,0.02)",
          border: isActive
            ? "1px solid rgba(16,185,129,0.25)"
            : "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {/* Icon */}
        <div
          className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
          style={{
            background: isActive
              ? `${experience.iconBg}22`
              : "rgba(255,255,255,0.04)",
            border: isActive
              ? `1px solid ${experience.iconBg}44`
              : "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-7 h-7 object-contain"
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 flex-wrap">
            <div>
              <h3
                className="font-bold text-white leading-tight"
                style={{ fontFamily: "'Syne', sans-serif", fontSize: "1rem" }}
              >
                {experience.title}
              </h3>
              <p
                className="text-sm mt-0.5"
                style={{ color: "#10b981", fontFamily: "'DM Sans', sans-serif" }}
              >
                {experience.company_name}
              </p>
            </div>
            <span
              className="text-xs font-mono px-2.5 py-1 rounded-lg flex-shrink-0"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#6b7280",
              }}
            >
              {experience.date}
            </span>
          </div>

          {/* Points (expanded) */}
          {isActive && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 space-y-2"
            >
              {experience.points.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-sm leading-relaxed"
                  style={{ color: "#9ca3af", fontFamily: "'DM Sans', sans-serif" }}
                >
                  <span
                    className="flex-shrink-0 w-1 h-1 rounded-full mt-2"
                    style={{ background: "#10b981" }}
                  />
                  {point}
                </li>
              ))}
            </motion.ul>
          )}
        </div>

        {/* Expand chevron */}
        <div
          className="flex-shrink-0 self-start mt-1 transition-transform duration-300"
          style={{
            transform: isActive ? "rotate(180deg)" : "rotate(0deg)",
            color: isActive ? "#10b981" : "#4b5563",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M4 6l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p
          className="text-xs font-mono tracking-[0.2em] uppercase mb-2"
          style={{ color: "#10b981" }}
        >
          — Career
        </p>
        <h2
          className="text-white font-black"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            lineHeight: 1.1,
          }}
        >
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-12 grid lg:grid-cols-5 gap-8">
        {/* Timeline list */}
        <div className="lg:col-span-3 space-y-3">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              index={index}
              isActive={activeIndex === index}
              onClick={() => setActiveIndex(index === activeIndex ? -1 : index)}
            />
          ))}
        </div>

        {/* Side detail panel (desktop) */}
        <div className="hidden lg:block lg:col-span-2">
          <div
            className="sticky top-24 rounded-2xl p-6"
            style={{
              background: "rgba(16,185,129,0.04)",
              border: "1px solid rgba(16,185,129,0.12)",
            }}
          >
            {activeIndex >= 0 && experiences[activeIndex] ? (
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: `${experiences[activeIndex].iconBg}22` }}
                  >
                    <img
                      src={experiences[activeIndex].icon}
                      alt=""
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm" style={{ fontFamily: "'Syne', sans-serif" }}>
                      {experiences[activeIndex].title}
                    </p>
                    <p className="text-xs" style={{ color: "#10b981" }}>
                      {experiences[activeIndex].company_name}
                    </p>
                  </div>
                </div>

                <p
                  className="text-xs font-mono mb-4 pb-4"
                  style={{
                    color: "#4b5563",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  {experiences[activeIndex].date}
                </p>

                <ul className="space-y-3">
                  {experiences[activeIndex].points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span
                        className="flex-shrink-0 w-1 h-1 rounded-full mt-2"
                        style={{ background: "#10b981" }}
                      />
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "#9ca3af", fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ) : (
              <p className="text-sm text-gray-600 font-mono">
                Select a role to view details
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");