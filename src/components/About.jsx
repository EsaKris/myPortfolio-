import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    tiltMaxAngleX={12}
    tiltMaxAngleY={12}
    glareEnable={true}
    glareMaxOpacity={0.08}
    className="xs:w-[230px] w-full"
  >
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.6)}
      className="relative group cursor-default"
    >
      {/* Glow */}
      <div
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: "linear-gradient(135deg, rgba(16,185,129,0.3), rgba(59,130,246,0.2))", filter: "blur(1px)" }}
      />

      <div
        className="relative rounded-2xl p-6 flex flex-col items-center gap-5 transition-all duration-300"
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        {/* Icon container */}
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
          style={{
            background: "rgba(16,185,129,0.1)",
            border: "1px solid rgba(16,185,129,0.2)",
          }}
        >
          <img src={icon} alt={title} className="w-8 h-8 object-contain" />
        </div>

        <h3
          className="text-white font-bold text-center leading-tight"
          style={{ fontFamily: "'Syne', sans-serif", fontSize: "1rem" }}
        >
          {title}
        </h3>

        {/* Bottom accent line */}
        <div
          className="w-8 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
          style={{ background: "linear-gradient(to right, #10b981, #38bdf8)" }}
        />
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <div className="relative">
      {/* Section label */}
      <motion.div variants={textVariant()}>
        <p
          className="text-xs font-mono tracking-[0.2em] uppercase mb-2"
          style={{ color: "#10b981" }}
        >
          — Introduction
        </p>
        <h2
          className="text-white font-black"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            lineHeight: 1.1,
          }}
        >
          Overview.
        </h2>
      </motion.div>

      {/* Bio */}
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-8 grid lg:grid-cols-3 gap-8 items-start"
      >
        {/* Main bio text */}
        <div className="lg:col-span-2">
          <p
            className="leading-relaxed"
            style={{
              color: "#9ca3af",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1.05rem",
              lineHeight: "1.8",
            }}
          >
            I'm a skilled software developer and UI designer with experience in{" "}
            <span
              className="font-semibold"
              style={{ color: "#10b981" }}
            >
              Python, Django
            </span>
            ,{" "}
            <span className="font-semibold text-blue-400">Tailwind CSS</span>, and{" "}
            <span className="font-semibold text-sky-400">React</span>. I specialize
            in building efficient, scalable, and user-friendly solutions with clean,
            intuitive designs. I'm a quick learner and work closely with clients to
            bring ideas to life. Let's create something amazing together!
          </p>
        </div>

        {/* Quick facts */}
        <div
          className="rounded-2xl p-5 space-y-4"
          style={{
            background: "rgba(16,185,129,0.04)",
            border: "1px solid rgba(16,185,129,0.12)",
          }}
        >
          {[
            { label: "Focus", value: "Full-Stack Dev" },
            { label: "Backend", value: "Python / Django" },
            { label: "Frontend", value: "React / Tailwind" },
            { label: "Status", value: "Available", highlight: true },
          ].map(({ label, value, highlight }) => (
            <div key={label} className="flex items-center justify-between">
              <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">{label}</span>
              <span
                className="text-sm font-medium"
                style={{ color: highlight ? "#10b981" : "#e5e7eb", fontFamily: "'DM Sans', sans-serif" }}
              >
                {highlight && (
                  <span
                    className="inline-block w-1.5 h-1.5 rounded-full mr-1.5 align-middle"
                    style={{ background: "#10b981", boxShadow: "0 0 6px #10b981" }}
                  />
                )}
                {value}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Service cards */}
      <div className="mt-16">
        <p
          className="text-xs font-mono tracking-[0.15em] uppercase mb-8"
          style={{ color: "#4b5563" }}
        >
          What I do
        </p>
        <div className="flex flex-wrap gap-5">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");