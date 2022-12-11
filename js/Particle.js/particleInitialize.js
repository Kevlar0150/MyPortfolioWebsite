// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function (event) {
  window.onload = function () {
    Particles.
      init
      ({

        // normal options
        selector: '.background',
        maxParticles: 60,
        color: '#b3a6f3',
        connectParticles: true,
        speed: 0.2,
        sizeVariations: 6,

        // options for breakpoints
        responsive: [
          {
            breakpoint: 768,
            options: {
              maxParticles: 10,
              color: ['#3fd7fc', '#f47a57'],
              connectParticles: true
            }
          },
          {
            breakpoint: 425,
            options: {
              maxParticles: 50,
              connectParticles: true
            }
          },
          {
            breakpoint: 320,
            options: {
              maxParticles: 0
              // disables particles.js
            }
          }
        ]
      });
  };
});