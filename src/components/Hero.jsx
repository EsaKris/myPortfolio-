import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState, useMemo, useRef } from "react";

// ─── Terminal Typewriter ────────────────────────────────────────────────────
const LINES = [
  { prompt: "~", cmd: "python manage.py runserver", delay: 0 },
  { prompt: "~", cmd: "git push origin main", delay: 1800 },
  { prompt: "~", cmd: "docker-compose up --build", delay: 3600 },
  { prompt: "~", cmd: "pytest --cov=. --cov-report=html", delay: 5400 },
];

function TypewriterLine({ text, startDelay }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(t);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 38);
    return () => clearInterval(interval);
  }, [started, text]);

  if (!started) return null;

  return (
    <span className="text-emerald-400 font-mono">
      {displayed}
      {displayed.length < text.length && (
        <span className="animate-pulse text-white">▌</span>
      )}
    </span>
  );
}

// ─── Floating Tech Orbs ─────────────────────────────────────────────────────
const TECH = [
  { label: "Python", color: "#3B82F6", x: 10, y: 20, size: 52 },
  { label: "Django", color: "#10B981", x: 82, y: 12, size: 48 },
  { label: "React", color: "#38BDF8", x: 70, y: 72, size: 44 },
  { label: "Docker", color: "#60A5FA", x: 18, y: 78, size: 46 },
  { label: "PostgreSQL", color: "#A78BFA", x: 90, y: 45, size: 40 },
  { label: "REST API", color: "#F472B6", x: 45, y: 85, size: 42 },
];

function TechOrb({ label, color, x, y, size, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 0.85, scale: 1 }}
      transition={{ delay, type: "spring", stiffness: 120 }}
      style={{ left: `${x}%`, top: `${y}%` }}
      className="absolute hidden lg:flex flex-col items-center gap-1 pointer-events-none select-none"
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4 + delay, repeat: Infinity, ease: "easeInOut" }}
        style={{
          width: size,
          height: size,
          background: `radial-gradient(circle at 35% 35%, ${color}44, ${color}11)`,
          border: `1px solid ${color}55`,
          boxShadow: `0 0 18px ${color}33, inset 0 0 12px ${color}22`,
        }}
        className="rounded-xl backdrop-blur-sm flex items-center justify-center"
      >
        <span style={{ fontSize: size * 0.28, color }} className="font-bold font-mono">
          {label.slice(0, 2)}
        </span>
      </motion.div>
      <span className="text-[10px] font-mono opacity-50 text-white">{label}</span>
    </motion.div>
  );
}

// ─── Glowing Grid ────────────────────────────────────────────────────────────
function GlowGrid() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(16,185,129,0.07) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(16,185,129,0.07) 1px, transparent 1px)
        `,
        backgroundSize: "56px 56px",
        maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
      }}
    />
  );
}

// ─── Stat Chip ──────────────────────────────────────────────────────────────
function StatChip({ value, label, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="flex flex-col items-center px-5 py-3 rounded-2xl"
      style={{
        background: "rgba(16,185,129,0.07)",
        border: "1px solid rgba(16,185,129,0.18)",
      }}
    >
      <span className="text-2xl font-black font-mono text-emerald-400">{value}</span>
      <span className="text-[11px] text-gray-400 mt-0.5 tracking-wide uppercase">{label}</span>
    </motion.div>
  );
}

// ─── Main Hero ───────────────────────────────────────────────────────────────
const Hero = () => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springX = useSpring(cursorX, { stiffness: 80, damping: 30 });
  const springY = useSpring(cursorY, { stiffness: 80, damping: 30 });

  useEffect(() => {
    const handle = (e) => {
      cursorX.set(e.clientX - 250);
      cursorY.set(e.clientY - 250);
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  const particles = useMemo(
    () =>
      Array.from({ length: 28 }).map(() => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        d: Math.random() * 10 + 8,
        dur: Math.random() * 12 + 10,
        scale: Math.random() * 0.5 + 0.3,
      })),
    []
  );

  return (
    <section
      className="relative w-full min-h-screen mx-auto overflow-hidden flex flex-col"
      style={{ background: "#020b12" }}
    >
      {/* ── Atmosphere layers ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 15% 50%, rgba(16,185,129,0.12) 0%, transparent 65%), radial-gradient(ellipse 50% 50% at 80% 20%, rgba(59,130,246,0.1) 0%, transparent 60%)",
        }}
      />
      <GlowGrid />

      {/* ── Cursor glow ── */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          x: springX,
          y: springY,
          background: "radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* ── Floating particles ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.d,
              height: p.d,
              scale: p.scale,
              background: i % 3 === 0
                ? "rgba(16,185,129,0.5)"
                : i % 3 === 1
                ? "rgba(59,130,246,0.4)"
                : "rgba(167,139,250,0.4)",
              filter: "blur(1px)",
            }}
            animate={{ y: [-15, 15, -15], x: [-8, 8, -8], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: p.dur, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* ── Tech orbs (background) ── */}
      {TECH.map((t, i) => (
        <TechOrb key={t.label} {...t} delay={0.6 + i * 0.15} />
      ))}

      {/* ── Main content ── */}
      <div className="relative flex-1 flex items-center max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 w-full items-center">

          {/* LEFT */}
          <div className="max-w-2xl z-10">

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-7"
              style={{
                background: "rgba(16,185,129,0.08)",
                border: "1px solid rgba(16,185,129,0.25)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full bg-emerald-400"
                style={{ boxShadow: "0 0 8px #10b981, 0 0 20px #10b98188" }}
              />
              <span className="text-xs font-mono text-emerald-400 tracking-widest uppercase">
                Available for work
              </span>
            </motion.div>

            {/* Name / headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              <h1
                className="font-black leading-none tracking-tight"
                style={{
                  fontFamily: "'Syne', 'Space Grotesk', sans-serif",
                  fontSize: "clamp(2.8rem, 8vw, 6rem)",
                }}
              >
                <span className="block text-white">Hi, I'm</span>
                <span
                  className="block"
                  style={{
                    background: "linear-gradient(135deg, #10b981 0%, #38bdf8 50%, #a78bfa 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    filter: "drop-shadow(0 0 40px rgba(16,185,129,0.3))",
                  }}
                >
                  Esa Kris
                </span>
              </h1>
            </motion.div>

            {/* Role tag */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="flex flex-wrap items-center gap-2 mt-5 mb-5"
            >
              {["Full-Stack Dev", "Python", "Django", "REST APIs"].map((tag, i) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-3 py-1.5 rounded-lg"
                  style={{
                    background: i === 0
                      ? "rgba(16,185,129,0.15)"
                      : "rgba(255,255,255,0.04)",
                    border: `1px solid ${i === 0 ? "rgba(16,185,129,0.35)" : "rgba(255,255,255,0.1)"}`,
                    color: i === 0 ? "#10b981" : "#9ca3af",
                  }}
                >
                  {i !== 0 && <span className="text-emerald-500 mr-1">#</span>}
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="text-gray-400 leading-relaxed max-w-lg"
              style={{ fontSize: "clamp(0.95rem, 2vw, 1.05rem)" }}
            >
              I develop <span className="text-white font-medium">3D visuals</span>, scalable{" "}
              <span className="text-emerald-400 font-medium">Django backends</span>, and polished{" "}
              <span className="text-blue-400 font-medium">user interfaces</span> — from database
              schema to pixel-perfect frontend.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-3 mt-8 flex-wrap"
            >
              <StatChip value="3+" label="Years exp" delay={0.75} />
              <StatChip value="20+" label="Projects" delay={0.85} />
              <StatChip value="99%" label="Uptime" delay={0.95} />
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="flex flex-wrap gap-3 mt-9"
            >
              <a
                href="#contact"
                className="group relative px-7 py-3.5 rounded-xl font-semibold text-sm overflow-hidden transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #10b981, #059669)",
                  boxShadow: "0 0 24px rgba(16,185,129,0.35)",
                  color: "#fff",
                }}
              >
                <span className="relative z-10">Start a project →</span>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(135deg, #059669, #047857)" }}
                />
              </a>
              <a
                href="#work"
                className="px-7 py-3.5 rounded-xl font-semibold text-sm text-white transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.border = "1px solid rgba(16,185,129,0.4)";
                  e.currentTarget.style.background = "rgba(16,185,129,0.06)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.border = "1px solid rgba(255,255,255,0.12)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                }}
              >
                View my work
              </a>
            </motion.div>
          </div>

          {/* RIGHT – Terminal card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 80 }}
            className="relative hidden lg:block"
          >
            {/* Glow behind card */}
            <div
              className="absolute -inset-6 rounded-3xl pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 50%, rgba(16,185,129,0.15) 0%, transparent 70%)",
                filter: "blur(20px)",
              }}
            />

            {/* Terminal window */}
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                background: "rgba(2,14,20,0.92)",
                border: "1px solid rgba(16,185,129,0.18)",
                boxShadow:
                  "0 0 0 1px rgba(16,185,129,0.06), 0 32px 64px rgba(0,0,0,0.6), 0 0 80px rgba(16,185,129,0.08)",
                backdropFilter: "blur(20px)",
              }}
            >
              {/* Title bar */}
              <div
                className="flex items-center gap-2 px-5 py-3.5"
                style={{
                  borderBottom: "1px solid rgba(16,185,129,0.1)",
                  background: "rgba(16,185,129,0.03)",
                }}
              >
                <span className="w-3 h-3 rounded-full bg-red-500 opacity-70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500 opacity-70" />
                <span className="w-3 h-3 rounded-full bg-emerald-500 opacity-70" />
                <span className="ml-3 text-xs font-mono text-gray-500">
                  esa@portfolio:~$
                </span>
                <span
                  className="ml-auto text-[10px] font-mono px-2 py-0.5 rounded"
                  style={{
                    background: "rgba(16,185,129,0.12)",
                    color: "#10b981",
                  }}
                >
                  zsh
                </span>
              </div>

              {/* Terminal body */}
              <div className="px-5 py-5 space-y-4 font-mono text-sm min-h-[260px]">
                {LINES.map((line, i) => (
                  <div key={i} className="flex gap-2">
                    <span className="text-emerald-500 select-none">❯</span>
                    <TypewriterLine text={line.cmd} startDelay={line.delay + 600} />
                  </div>
                ))}
              </div>

              {/* Stack strip */}
              <div
                className="px-5 py-4 flex flex-wrap gap-2"
                style={{ borderTop: "1px solid rgba(16,185,129,0.1)" }}
              >
                {[
                  { name: "Python 3.12", color: "#3B82F6" },
                  { name: "Django 5", color: "#10B981" },
                  { name: "PostgreSQL", color: "#A78BFA" },
                  { name: "React 19", color: "#38BDF8" },
                  { name: "Docker", color: "#60A5FA" },
                  { name: "Redis", color: "#F87171" },
                ].map((s) => (
                  <span
                    key={s.name}
                    className="text-[11px] px-2.5 py-1 rounded-lg font-mono"
                    style={{
                      background: `${s.color}15`,
                      border: `1px solid ${s.color}35`,
                      color: s.color,
                    }}
                  >
                    {s.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Floating commit badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="absolute -bottom-4 -left-4 px-4 py-2.5 rounded-xl flex items-center gap-2.5"
              style={{
                background: "rgba(2,14,20,0.95)",
                border: "1px solid rgba(16,185,129,0.25)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                backdropFilter: "blur(12px)",
              }}
            >
              <span className="text-base">🚀</span>
              <div>
                <div className="text-[11px] font-mono text-emerald-400">Latest deploy</div>
                <div className="text-[10px] font-mono text-gray-500">feat: add websocket support</div>
              </div>
            </motion.div>

            {/* Floating uptime badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
              className="absolute -top-4 -right-4 px-3.5 py-2 rounded-xl flex items-center gap-2"
              style={{
                background: "rgba(2,14,20,0.95)",
                border: "1px solid rgba(16,185,129,0.25)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                backdropFilter: "blur(12px)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full bg-emerald-400"
                style={{ boxShadow: "0 0 6px #10b981" }}
              />
              <span className="text-[11px] font-mono text-gray-300">All systems live</span>
            </motion.div>
          </motion.div>

          {/* MOBILE: compact terminal teaser */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="lg:hidden rounded-xl overflow-hidden"
            style={{
              background: "rgba(2,14,20,0.9)",
              border: "1px solid rgba(16,185,129,0.18)",
            }}
          >
            <div
              className="flex items-center gap-1.5 px-4 py-2.5"
              style={{ borderBottom: "1px solid rgba(16,185,129,0.1)" }}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 opacity-70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 opacity-70" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 opacity-70" />
              <span className="ml-2 text-[11px] font-mono text-gray-500">terminal</span>
            </div>
            <div className="px-4 py-4 font-mono text-sm space-y-3">
              <div className="flex gap-2">
                <span className="text-emerald-500">❯</span>
                <TypewriterLine text="python manage.py runserver" startDelay={900} />
              </div>
              <div className="flex gap-2">
                <span className="text-emerald-500">❯</span>
                <TypewriterLine text="docker-compose up --build" startDelay={2800} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <a href="#about" className="flex flex-col items-center gap-2 group">
          <span className="text-[10px] font-mono text-gray-600 tracking-widest uppercase group-hover:text-emerald-500 transition-colors">
            scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="w-5 h-8 rounded-full border flex justify-center pt-1.5"
            style={{ borderColor: "rgba(16,185,129,0.3)" }}
          >
            <div
              className="w-0.5 h-2 rounded-full"
              style={{ background: "#10b981" }}
            />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;