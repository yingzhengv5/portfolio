import { useProgress } from "@react-three/drei";
import { useEffect } from "react";

export const LoadingScreen = (props) => {
  const { started, setStarted } = props;
  const { progress } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setStarted(true);
      }, 500);
    }
  }, [progress]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-50 transition-opacity duration-1000 pointer-events-none
      flex items-center justify-center
      ${started ? "opacity-0" : "opacity-100"}`}>
      {/* Cup wrapper */}
      <div className="relative w-40 h-52 flex items-end justify-center">
        {/* Main cup container */}
        <div
          className="w-36 h-40 relative rounded-t-xl rounded-b-md overflow-hidden 
                      border-3 border-indigo-900 border-opacity-60
                      flex items-center justify-center
                      bg-white bg-opacity-5 backdrop-blur-sm
                      shadow-md"
          style={{
            clipPath:
              "polygon(0 0, 100% 0, 93% 100%, 7% 100%)" /* Tapered shape */,
          }}>
          {/* Cup rim gradient */}
          <div
            className="absolute top-0 left-0 right-0 h-4"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 100%)",
            }}></div>

          {/* Water fill effect */}
          <div
            className="absolute bottom-0 left-0 w-full transition-all duration-300"
            style={{
              height: `${progress}%`,
              background: "linear-gradient(to top, #4facfe 0%, #00f2fe 100%)",
              boxShadow: "inset 0 0 10px rgba(255, 255, 255, 0.4)",
              clipPath:
                "polygon(0 0, 100% 0, 95% 100%, 5% 100%)" /* Match cup taper */,
            }}>
            {/* Water surface reflection */}
            <div className="absolute top-0 left-0 w-full h-1 bg-white opacity-60"></div>

            {/* Water bubbles - animated dots - reduced quantity */}
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white opacity-60"
                style={{
                  width: `${2 + Math.random() * 4}px`,
                  height: `${2 + Math.random() * 4}px`,
                  left: `${10 + Math.random() * 80}%`,
                  bottom: `${10 + Math.random() * 60}%`,
                  animation: `rise ${1 + Math.random() * 3}s linear infinite`,
                  animationDelay: `${Math.random() * 2}s`,
                }}></div>
            ))}
          </div>

          {/* Glass reflection */}
          <div
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 30%, rgba(255,255,255,0) 60%)",
            }}></div>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes rise {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.7;
          }
          100% {
            transform: translateY(-40px) scale(0.2);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
