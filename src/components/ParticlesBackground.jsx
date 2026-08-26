import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticlesBackground() {

  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <Particles
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "#050816",
          },
        },

        fpsLimit: 60,

        particles: {
          number: {
            value: 60,
          },

          color: {
            value: "#3B82F6",
          },

          links: {
            enable: true,
            color: "#3B82F6",
            distance: 150,
            opacity: 0.3,
          },

          move: {
            enable: true,
            speed: 1,
          },

          size: {
            value: {
              min: 1,
              max: 3,
            },
          },

          opacity: {
            value: 0.5,
          },
        },

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
        },

        detectRetina: true,
      }}
      className="absolute inset-0"
    />
  );
}

export default ParticlesBackground;