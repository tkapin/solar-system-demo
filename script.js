// This file will contain JavaScript code for the Solar System Demo
console.log("Solar System Demo loaded");

/**
 * Base class for all celestial bodies in the solar system
 */
class CelestialBody {
  constructor(name, size, color, element) {
    this.name = name;
    this.size = size;
    this.color = color;
    this.element = element;
    this.label = null;
  }

  /**
   * Create and position a label for this celestial body
   */
  createLabel(solarSystem) {
    const label = document.createElement('div');
    label.className = `celestial-label ${this.name.toLowerCase()}-label`;
    label.textContent = this.name.charAt(0).toUpperCase() + this.name.slice(1);
    label.style.position = 'absolute';
    label.style.color = 'white';
    label.style.fontSize = '12px';
    label.style.fontFamily = 'Arial, sans-serif';
    label.style.textShadow = '0 0 2px black';
    label.style.pointerEvents = 'none';
    
    solarSystem.appendChild(label);
    this.label = label;
  }

  /**
   * Update the position of this celestial body (to be overridden by subclasses)
   */
  updatePosition() {
    // Base implementation does nothing
  }
}

/**
 * Star class represents stars like the Sun that don't orbit anything
 */
class Star extends CelestialBody {
  constructor(name, size, color, element) {
    super(name, size, color, element);
  }

  /**
   * Position the star label at the center
   */
  updatePosition() {
    if (this.label) {
      this.label.style.left = '50%';
      this.label.style.top = '50%';
      this.label.style.transform = 'translate(-50%, -30px)';
    }
  }
}

/**
 * Planet class represents planets that orbit around a central body
 */
class Planet extends CelestialBody {
  constructor(name, size, color, element, orbitalSpeed, orbitRadius) {
    super(name, size, color, element);
    this.orbitalSpeed = orbitalSpeed;
    this.orbitRadius = orbitRadius;
    this.angle = Math.random() * 360; // Random starting position
    this.speedMultiplier = this.calculateSpeedMultiplier();
  }

  /**
   * Calculate speed multiplier for outer planets to make them more visible
   */
  calculateSpeedMultiplier() {
    let multiplier = 0.1; // Base multiplier
    
    // Add extra boost for outer planets
    if (this.name === 'jupiter') multiplier = 0.3;
    if (this.name === 'saturn') multiplier = 0.5;
    if (this.name === 'uranus') multiplier = 0.7;
    if (this.name === 'neptune') multiplier = 0.9;
    
    return multiplier;
  }

  /**
   * Update the planet's position in its orbit
   */
  updatePosition() {
    // Update angle based on orbital speed
    this.angle += this.orbitalSpeed * this.speedMultiplier;
    
    // Calculate position on orbit
    const x = Math.cos(this.angle * Math.PI / 180) * this.orbitRadius;
    const y = Math.sin(this.angle * Math.PI / 180) * this.orbitRadius;
    
    // Update planet position
    this.element.style.transform = `translate(${x}px, ${y}px)`;
    
    // Update label position with offset
    if (this.label) {
      const labelOffsetX = 10;
      const labelOffsetY = -15;
      this.label.style.transform = `translate(${x + labelOffsetX}px, ${y + labelOffsetY}px)`;
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const solarSystem = document.querySelector('.solar-system');
  
  // Create the Sun
  const sun = new Star('sun', 60, '#ff9933', document.querySelector('.sun'));
  sun.createLabel(solarSystem);
  sun.updatePosition();
  
  // Create all planets with their properties
  const celestialBodies = [
    sun,
    new Planet('mercury', 10, '#bdc3c7', 
      document.querySelector('.mercury'), 4.1, 
      parseInt(getComputedStyle(document.querySelector('.mercury-orbit')).width) / 2),
    new Planet('venus', 15, '#e67e22', 
      document.querySelector('.venus'), 1.6,
      parseInt(getComputedStyle(document.querySelector('.venus-orbit')).width) / 2),
    new Planet('earth', 16, '#3498db', 
      document.querySelector('.earth'), 1,
      parseInt(getComputedStyle(document.querySelector('.earth-orbit')).width) / 2),
    new Planet('mars', 14, '#e74c3c', 
      document.querySelector('.mars'), 0.53,
      parseInt(getComputedStyle(document.querySelector('.mars-orbit')).width) / 2),
    new Planet('jupiter', 30, '#f39c12', 
      document.querySelector('.jupiter'), 0.084,
      parseInt(getComputedStyle(document.querySelector('.jupiter-orbit')).width) / 2),
    new Planet('saturn', 28, '#f1c40f', 
      document.querySelector('.saturn'), 0.034,
      parseInt(getComputedStyle(document.querySelector('.saturn-orbit')).width) / 2),
    new Planet('uranus', 20, '#16a085', 
      document.querySelector('.uranus'), 0.012,
      parseInt(getComputedStyle(document.querySelector('.uranus-orbit')).width) / 2),
    new Planet('neptune', 20, '#2980b9', 
      document.querySelector('.neptune'), 0.006,
      parseInt(getComputedStyle(document.querySelector('.neptune-orbit')).width) / 2)
  ];
  
  // Create labels for all celestial bodies
  celestialBodies.forEach(body => {
    if (body instanceof Planet) {
      body.createLabel(solarSystem);
    }
  });

  
  // Animation function using OOP approach
  function animate() {
    // Update position of each celestial body
    celestialBodies.forEach(body => {
      body.updatePosition();
    });
    
    requestAnimationFrame(animate);
  }

  // Start animation
  animate();
});
