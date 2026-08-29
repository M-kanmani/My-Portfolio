import React from "react";

function ParticlesBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-[#050816]">
      {/* Decorative gradient glow effect mimicking particles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>
  );
}

export default ParticlesBackground;