import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      {/* Spinner ring */}
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "2px solid rgba(16,185,129,0.15)",
          borderTopColor: "#10b981",
          animation: "spin 0.8s linear infinite",
        }}
      />

      {/* Progress */}
      <div style={{ textAlign: "center" }}>
        <p
          style={{
            fontSize: 11,
            color: "#10b981",
            fontWeight: 700,
            fontFamily: "monospace",
            letterSpacing: "0.1em",
          }}
        >
          {progress.toFixed(0)}%
        </p>
        <div
          style={{
            marginTop: 6,
            width: 80,
            height: 2,
            borderRadius: 2,
            background: "rgba(16,185,129,0.15)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              background: "linear-gradient(to right, #10b981, #38bdf8)",
              borderRadius: 2,
              transition: "width 0.2s ease",
            }}
          />
        </div>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </Html>
  );
};

export default CanvasLoader;