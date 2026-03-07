import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn, fadeIn, textVariant } from "../utils/motion";

const InputField = ({ label, hint, children }) => (
  <div className="flex flex-col gap-2">
    <div className="flex items-baseline justify-between">
      <label
        className="text-sm font-medium text-white"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {label}
      </label>
      {hint && (
        <span className="text-xs font-mono" style={{ color: "#4b5563" }}>
          {hint}
        </span>
      )}
    </div>
    {children}
  </div>
);

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const whatsappMessage =
      `*New Message from ${form.name}*\n\n` +
      `*Email:* ${form.email}\n\n` +
      `*Message:*\n${form.message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappNumber = "9155775787";

    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");

    setLoading(false);
    setSuccess(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSuccess(false), 5000);
  };

  const inputStyle = (field) => ({
    background: focused === field
      ? "rgba(16,185,129,0.06)"
      : "rgba(255,255,255,0.03)",
    border: focused === field
      ? "1px solid rgba(16,185,129,0.35)"
      : "1px solid rgba(255,255,255,0.08)",
    borderRadius: "12px",
    padding: "12px 16px",
    color: "#f9fafb",
    fontSize: "0.9rem",
    fontFamily: "'DM Sans', sans-serif",
    outline: "none",
    transition: "all 0.2s",
    width: "100%",
    boxShadow: focused === field ? "0 0 0 3px rgba(16,185,129,0.08)" : "none",
  });

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      {/* Form side */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75]"
      >
        {/* Header */}
        <motion.div variants={textVariant()}>
          <p
            className="text-xs font-mono tracking-[0.2em] uppercase mb-2"
            style={{ color: "#10b981" }}
          >
            — Let's talk
          </p>
          <h2
            className="text-white font-black"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              lineHeight: 1.1,
            }}
          >
            Contact.
          </h2>
        </motion.div>

        {/* Contact methods */}
        <motion.div
          variants={fadeIn("", "", 0.2, 0.8)}
          className="flex flex-wrap gap-3 mt-6 mb-8"
        >
          {[
            { icon: "💬", label: "WhatsApp", sub: "Preferred" },
            { icon: "⚡", label: "Fast response", sub: "< 24h" },
            { icon: "🌍", label: "Remote", sub: "Worldwide" },
          ].map(({ icon, label, sub }) => (
            <div
              key={label}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <span className="text-base">{icon}</span>
              <div>
                <div className="text-xs font-medium text-white">{label}</div>
                <div className="text-[10px] font-mono" style={{ color: "#10b981" }}>{sub}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Success message */}
        {success && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 p-4 rounded-xl mb-6"
            style={{
              background: "rgba(16,185,129,0.08)",
              border: "1px solid rgba(16,185,129,0.25)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ background: "#10b981", boxShadow: "0 0 6px #10b981" }}
            />
            <p
              className="text-sm"
              style={{ color: "#10b981", fontFamily: "'DM Sans', sans-serif" }}
            >
              WhatsApp is opening with your message. Thank you!
            </p>
          </motion.div>
        )}

        {/* Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <InputField label="Your Name" hint="Required">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                onFocus={() => setFocused("name")}
                onBlur={() => setFocused(null)}
                placeholder="John Doe"
                style={inputStyle("name")}
                required
              />
            </InputField>

            <InputField label="Your Email" hint="Required">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
                placeholder="john@example.com"
                style={inputStyle("email")}
                required
              />
            </InputField>
          </div>

          <InputField
            label="Message"
            hint={`${form.message.length}/500`}
          >
            <textarea
              rows={6}
              name="message"
              value={form.message}
              onChange={handleChange}
              onFocus={() => setFocused("message")}
              onBlur={() => setFocused(null)}
              placeholder="Tell me about your project..."
              style={{ ...inputStyle("message"), resize: "none" }}
              required
            />
          </InputField>

          {/* Submit */}
          <div className="flex items-center gap-4 pt-1">
            <button
              type="submit"
              disabled={loading}
              className="relative flex items-center gap-3 px-7 py-3.5 rounded-xl font-semibold text-sm text-white transition-all duration-200 disabled:opacity-60"
              style={{
                background: "linear-gradient(135deg, #10b981, #059669)",
                boxShadow: "0 0 24px rgba(16,185,129,0.3)",
              }}
              onMouseEnter={e => {
                if (!loading) e.currentTarget.style.boxShadow = "0 0 32px rgba(16,185,129,0.45)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = "0 0 24px rgba(16,185,129,0.3)";
              }}
            >
              {loading ? (
                <>
                  <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  </svg>
                  Opening WhatsApp...
                </>
              ) : (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M5.255 0H.741C.332 0 0 .332 0 .741c0 8.103 6.596 14.7 14.7 14.7.409 0 .741-.332.741-.741v-4.514c0-.409-.332-.741-.741-.741h-3.03c-.409 0-.741.332-.741.741v1.758C8.03 10.498 5.502 7.97 5.502 4.811H7.26c.409 0 .741-.332.741-.741V.741C7.997.332 7.665 0 7.256 0H5.255z" transform="scale(1.1) translate(1, 2)"/>
                  </svg>
                  Send via WhatsApp
                </>
              )}
            </button>

            <p
              className="text-xs font-mono"
              style={{ color: "#4b5563" }}
            >
              Opens WhatsApp automatically
            </p>
          </div>
        </form>
      </motion.div>

      {/* Earth canvas side */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] relative"
      >
        {/* Label */}
        <div
          className="absolute top-4 left-1/2 -translate-x-1/2 z-10 px-3 py-1.5 rounded-full"
          style={{
            background: "rgba(2,11,18,0.85)",
            border: "1px solid rgba(16,185,129,0.2)",
            backdropFilter: "blur(8px)",
          }}
        >
          <p className="text-xs font-mono" style={{ color: "#10b981" }}>
            📍 Available worldwide
          </p>
        </div>

        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");