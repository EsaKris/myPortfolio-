import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="w-full fixed top-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(2, 11, 18, 0.88)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(16,185,129,0.1)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 group"
          onClick={() => { setActive(""); window.scrollTo(0, 0); }}
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
            style={{
            
            }}
          >
            <img src={logo} alt="logo" className="w-5 h-5 object-contain" />
          </div>
          <div className="flex items-baseline gap-1.5">
            <span
              className="font-black text-white tracking-tight"
              style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.05rem" }}
            >
              Esa Kris
            </span>
            <span
              className="hidden sm:inline text-[11px] font-mono tracking-widest uppercase"
              style={{ color: "#10b981" }}
            >
              || Full Stack Python Developer
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden sm:flex items-center gap-1">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <a
                href={`#${nav.id}`}
                onClick={() => setActive(nav.title)}
                className="relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg group"
                style={{
                  color: active === nav.title ? "#10b981" : "#9ca3af",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-200">
                  {nav.title}
                </span>
                {active === nav.title && (
                  <span
                    className="absolute inset-0 rounded-lg"
                    style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)" }}
                  />
                )}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="ml-3 px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200"
              style={{
                background: "rgba(16,185,129,0.12)",
                border: "1px solid rgba(16,185,129,0.3)",
                color: "#10b981",
                fontFamily: "'DM Sans', sans-serif",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "rgba(16,185,129,0.22)";
                e.currentTarget.style.boxShadow = "0 0 16px rgba(16,185,129,0.2)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "rgba(16,185,129,0.12)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Hire me
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="sm:hidden w-9 h-9 flex items-center justify-center rounded-lg transition-colors"
          style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
          onClick={() => setToggle(!toggle)}
        >
          <img src={toggle ? close : menu} alt="menu" className="w-5 h-5 object-contain" />
        </button>
      </div>

      {/* Mobile menu */}
      {toggle && (
        <div
          className="sm:hidden mx-4 mb-3 rounded-2xl overflow-hidden"
          style={{
            background: "rgba(2,11,18,0.96)",
            border: "1px solid rgba(16,185,129,0.15)",
            backdropFilter: "blur(20px)",
          }}
        >
          <ul className="flex flex-col p-3 gap-1">
            {navLinks.map((nav) => (
              <li key={nav.id}>
                <a
                  href={`#${nav.id}`}
                  onClick={() => { setToggle(false); setActive(nav.title); }}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200"
                  style={{
                    color: active === nav.title ? "#10b981" : "#9ca3af",
                    background: active === nav.title ? "rgba(16,185,129,0.08)" : "transparent",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: active === nav.title ? "#10b981" : "#374151" }}
                  />
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;