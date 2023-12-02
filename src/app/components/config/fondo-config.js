const fondoConfig = {
  fpsLimit: 120,
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 3000,
      },
    },
    color: {
      value: "#000000",
    },
    shape: {
      type: "circle",
      fill: true,
      polygon: {
        nb_sides: 5,
      },
    },
    opacity: {
      value: 1,
      random: false,
      anim: {
        enable: true,
        speed: 0.1,
        sync: false,
      },
    },
    size: {
      value: 50,
      random: false,
      anim: {
        enable: true,
        speed: 20,
        size_min: 10,
        sync: false,
      },
    },
    
    line_linked: {
      enable: true,
      distance: 150,
      opacity: 100,
      width: 5,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "window",
    events: {
      onHover: {
        enable: true,
        mode: "grab",
        parallax: {
          enable: false,
          force: 500,
          smooth: 50,
        },
      },
      onClick: {
        enable: false,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 300,
        lineLinked: {
          opacity: 1,
          color:"#000000"
        },
      },
      bubble: {
        distance: 400,
        size: 100,
        duration: 2,
        opacity: 1,
        speed: 3,
      },
      repulse: {
        distance: 200,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  backgroundMask: {
    enable: true,
    cover: {
      color: {
        value: "#ffffff"
      }
    }
  },
  background:{
    color:"000000"
  },
  retina_detect: true,
};

export default fondoConfig;
