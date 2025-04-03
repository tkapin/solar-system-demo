// This file will contain JavaScript code for the Solar System Demo
console.log("Solar System Demo loaded");

document.addEventListener('DOMContentLoaded', function() {
  // Set orbital speeds for each planet (degrees per second)
  const orbitalSpeeds = {
    mercury: 4.1,
    venus: 1.6,
    earth: 1,
    mars: 0.53,
    jupiter: 0.084,
    saturn: 0.034,
    uranus: 0.012,
    neptune: 0.006
  };

  // Initialize positions
  const planets = {
    mercury: document.querySelector('.mercury'),
    venus: document.querySelector('.venus'),
    earth: document.querySelector('.earth'),
    mars: document.querySelector('.mars'),
    jupiter: document.querySelector('.jupiter'),
    saturn: document.querySelector('.saturn'),
    uranus: document.querySelector('.uranus'),
    neptune: document.querySelector('.neptune')
  };

  // Create labels for sun and planets
  const solarSystem = document.querySelector('.solar-system');
  
  // Add Sun label
  const sunLabel = document.createElement('div');
  sunLabel.className = 'celestial-label sun-label';
  sunLabel.textContent = 'Sun';
  solarSystem.appendChild(sunLabel);
  
  // Create planet labels
  const planetLabels = {};
  for (const planet in planets) {
    const label = document.createElement('div');
    label.className = `celestial-label ${planet}-label`;
    label.textContent = planet.charAt(0).toUpperCase() + planet.slice(1);
    solarSystem.appendChild(label);
    planetLabels[planet] = label;
  }
  
  // Style the labels
  const labels = document.querySelectorAll('.celestial-label');
  labels.forEach(label => {
    label.style.position = 'absolute';
    label.style.color = 'white';
    label.style.fontSize = '12px';
    label.style.fontFamily = 'Arial, sans-serif';
    label.style.textShadow = '0 0 2px black';
    label.style.pointerEvents = 'none';
  });
  
  // Position sun label
  sunLabel.style.left = '50%';
  sunLabel.style.top = '50%';
  sunLabel.style.transform = 'translate(-50%, -30px)';

  // Initialize starting angles (random positions)
  const angles = {
    mercury: Math.random() * 360,
    venus: Math.random() * 360,
    earth: Math.random() * 360,
    mars: Math.random() * 360,
    jupiter: Math.random() * 360,
    saturn: Math.random() * 360,
    uranus: Math.random() * 360,
    neptune: Math.random() * 360
  };

  // Animation function
  function animate() {
    // Update position of each planet
    for (const planet in planets) {
      // Apply different speed multipliers based on planet type
      let speedMultiplier = 0.1; // Base multiplier (5x original)
      
      // Add extra boost for outer planets
      if (planet === 'jupiter') speedMultiplier = 0.3;
      if (planet === 'saturn') speedMultiplier = 0.5;
      if (planet === 'uranus') speedMultiplier = 0.7;
      if (planet === 'neptune') speedMultiplier = 0.9;
      
      angles[planet] += orbitalSpeeds[planet] * speedMultiplier;
      
      // Position planets on their orbits
      const radius = parseInt(getComputedStyle(document.querySelector(`.${planet}-orbit`)).width) / 2;
      const x = Math.cos(angles[planet] * Math.PI / 180) * radius;
      const y = Math.sin(angles[planet] * Math.PI / 180) * radius;
      
      planets[planet].style.transform = `translate(${x}px, ${y}px)`;
      
      // Position labels alongside planets (slightly offset)
      const labelOffsetX = 10; // Offset in pixels
      const labelOffsetY = -15;
      planetLabels[planet].style.transform = `translate(${x + labelOffsetX}px, ${y + labelOffsetY}px)`;
    }
    
    requestAnimationFrame(animate);
  }

  // Start animation
  animate();
});
