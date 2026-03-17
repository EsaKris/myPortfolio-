import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.12, 0.5)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="w-full sm:w-[320px] group"
    >
      <div
        className="relative h-full rounded-2xl p-6 flex flex-col transition-all duration-300"
        style={{
          background: hovered
            ? "rgba(16,185,129,0.05)"
            : "rgba(255,255,255,0.025)",
          border: hovered
            ? "1px solid rgba(16,185,129,0.2)"
            : "1px solid rgba(255,255,255,0.07)",
          boxShadow: hovered
            ? "0 16px 40px rgba(0,0,0,0.4)"
            : "0 4px 16px rgba(0,0,0,0.2)",
        }}
      >
        {/* Quote mark */}
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center mb-4"
          style={{
            background: "rgba(16,185,129,0.1)",
            border: "1px solid rgba(16,185,129,0.2)",
          }}
        >
          <span
            className="font-black leading-none"
            style={{ color: "#10b981", fontSize: "1.2rem", marginTop: "-2px" }}
          >
            "
          </span>
        </div>

        {/* Testimonial */}
        <p
          className="flex-1 leading-relaxed"
          style={{
            color: "#d1d5db",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.9rem",
            lineHeight: "1.7",
          }}
        >
          {testimonial}
        </p>

        {/* Divider */}
        <div
          className="my-5 h-px"
          style={{ background: "rgba(255,255,255,0.06)" }}
        />

        {/* Author */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src={image}
              alt={name}
              className="w-10 h-10 rounded-full object-cover"
              style={{ border: "2px solid rgba(16,185,129,0.2)" }}
            />
            <div
              className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full"
              style={{
                background: "#10b981",
                border: "2px solid #020b12",
                boxShadow: "0 0 6px #10b981",
              }}
            />
          </div>
          <div>
            <p
              className="font-semibold text-sm text-white"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {name}
            </p>
            <p
              className="text-xs mt-0.5"
              style={{
                color: "#6b7280",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {designation} · {company}
            </p>
          </div>

          {/* Star rating */}
          <div className="ml-auto flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="#f59e0b"
              >
                <path d="M6 1l1.39 2.82L10.5 4.24l-2.25 2.19.53 3.1L6 7.97l-2.78 1.56.53-3.1L1.5 4.24l3.11-.42L6 1z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  return (
    <div className="relative">
      {/* Header section */}
      <div
        className="rounded-2xl p-8 mb-0"
        style={{
          background: "rgba(16,185,129,0.04)",
          border: "1px solid rgba(16,185,129,0.1)",
        }}
      >
        <motion.div variants={textVariant()}>
          <p
            className="text-xs font-mono tracking-[0.2em] uppercase mb-2"
            style={{ color: "#10b981" }}
          >
            — Social Proof
          </p>
          <h2
            className="text-white font-black"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              lineHeight: 1.1,
            }}
          >
            Testimonials.
          </h2>
          <p
            className="mt-3 text-sm"
            style={{ color: "#6b7280", fontFamily: "'DM Sans', sans-serif" }}
          >
            What people say about working with me
          </p>
        </motion.div>

        {/* Stats row */}
        <div className="flex gap-8 mt-6">
          {[
            { value: `${testimonials.length}+`, label: "Reviews" },
            { value: "5.0", label: "Avg Rating" },
            { value: "100%", label: "Would Recommend" },
          ].map(({ value, label }) => (
            <div key={label}>
              <div
                className="font-black text-xl"
                style={{ fontFamily: "'Syne', sans-serif", color: "#10b981" }}
              >
                {value}
              </div>
              <div
                className="text-xs font-mono mt-0.5 uppercase tracking-wider"
                style={{ color: "#4b5563" }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="mt-8 grid grid-cols-1 sm:flex sm:flex-wrap gap-5">
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");