# Solar System Demo - Copilot Instructions

## Project Overview

This is a browser-based solar system animation demo that visualizes the eight planets of our solar system orbiting around the sun. The project demonstrates realistic orbital mechanics with accurate relative orbital speeds and visual representations of each celestial body.

## Technology Stack

- **Frontend**: Vanilla HTML5, CSS3, and JavaScript (ES6+)
- **Animation**: CSS animations and JavaScript `requestAnimationFrame`
- **Styling**: Pure CSS with gradients, shadows, and responsive design
- **Deployment**: Static files served directly from any web server

## Project Structure

```
/
├── index.html          # Main entry point and HTML structure
├── script.js           # JavaScript animation logic and orbital mechanics
├── styles.css          # CSS styling for solar system visualization
├── README.md           # Project documentation
└── .github/
    └── copilot-instructions.md  # This file
```

## File Responsibilities

### `index.html`
- Contains the complete HTML structure for the solar system
- Defines the sun and all eight planets with their respective orbital containers
- Links CSS and JavaScript files
- Uses semantic HTML structure with proper accessibility considerations

### `script.js`
- Implements orbital mechanics using trigonometric calculations
- Manages real-time animation using `requestAnimationFrame`
- Contains accurate orbital speed ratios for all planets
- Handles dynamic positioning of planets and their labels
- Uses object-oriented approach for managing planet data

### `styles.css`
- Defines visual appearance of all celestial bodies
- Implements responsive orbital ring layouts
- Creates realistic planet colors and sizes
- Includes glowing effects for the sun using CSS shadows
- Uses absolute positioning for precise planetary placement

## Code Style and Conventions

### JavaScript
- Use ES6+ features (const/let, arrow functions, template literals)
- Follow camelCase naming convention
- Use descriptive variable names (e.g., `orbitalSpeeds`, `planetLabels`)
- Organize code in logical sections with clear comments
- Use object literals for managing related data
- Prefer `const` for immutable data, `let` for variables that change

### CSS
- Use class-based selectors for styling
- Follow BEM-like naming convention (e.g., `.planet`, `.mercury-orbit`)
- Use CSS custom properties for maintainable values
- Implement responsive units (vh, vw, %) for scalability
- Group related styles together (planet-specific, orbit-specific)

### HTML
- Use semantic HTML5 elements
- Include proper meta tags for viewport and charset
- Maintain consistent indentation (4 spaces)
- Use descriptive class names that reflect purpose

## Animation System

### Orbital Mechanics
- Each planet has a unique orbital speed based on real astronomical data
- Speeds are scaled for visual appeal while maintaining relative accuracy
- Outer planets have speed multipliers to make them more visible
- Starting positions are randomized to create dynamic initial states

### Performance Considerations
- Use `requestAnimationFrame` for smooth 60fps animation
- Minimize DOM queries by caching element references
- Use CSS transforms for GPU-accelerated movement
- Avoid layout thrashing by using `transform` instead of changing `left/top`

## How to Run

1. Open `index.html` in any modern web browser, or
2. Serve files through a local web server:
   ```bash
   python3 -m http.server 8080
   # Then visit http://localhost:8080
   ```

## Browser Support

- Modern browsers with ES6+ support
- Chrome 60+, Firefox 60+, Safari 12+, Edge 79+
- Requires JavaScript enabled
- Responsive design works on desktop and tablet devices

## Customization Guidelines

### Adding New Planets/Objects
1. Add HTML structure in `index.html` following existing pattern
2. Define orbital styles in `styles.css` with appropriate sizing
3. Add orbital speed and positioning logic in `script.js`
4. Ensure consistent naming convention across all files

### Modifying Visual Appearance
- Planet colors and sizes are defined in CSS classes
- Orbital ring visibility can be adjusted via border opacity
- Sun glow effects can be modified using box-shadow properties
- Background and text colors follow the space theme

### Performance Optimization
- Keep animation calculations lightweight
- Use CSS for static styling, JavaScript only for dynamic positioning
- Consider using CSS animations for simple orbital movements
- Cache DOM element references to avoid repeated queries

## Common Patterns

### Planet Configuration
```javascript
const planetData = {
    name: {
        element: document.querySelector('.name'),
        speed: 1.0,  // relative to Earth
        // additional properties...
    }
};
```

### CSS Planet Styling
```css
.planet-name-orbit {
    width: 200px;
    height: 200px;
}
.planet-name {
    width: 16px;
    height: 16px;
    background-color: #color;
}
```

## Testing Approach

This project uses manual testing:
- Visual verification of orbital animations
- Cross-browser compatibility testing
- Responsive design validation
- Performance monitoring using browser dev tools

When making changes:
1. Test in multiple browsers
2. Verify animations remain smooth
3. Check that orbital speeds maintain relative accuracy
4. Ensure responsive design works on different screen sizes

## Contribution Guidelines

- Maintain the educational and demonstrative purpose of the project
- Keep the code simple and readable for learning purposes
- Preserve astronomical accuracy in relative measurements
- Ensure changes don't break the visual harmony of the solar system
- Test thoroughly before submitting changes