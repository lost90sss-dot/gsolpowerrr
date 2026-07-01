export default function WindAnimation() {
  return (
    <div className="flex items-center justify-center">
      <svg width="120" height="120" viewBox="0 0 120 120" className="drop-shadow-lg">
        {/* Wind turbine tower */}
        <rect x="55" y="70" width="10" height="40" fill="oklch(0.55 0.15 200 / 0.3)" stroke="oklch(0.55 0.15 200)" strokeWidth="1" />
        
        {/* Turbine base */}
        <circle cx="60" cy="70" r="8" fill="oklch(0.55 0.15 200 / 0.5)" stroke="oklch(0.55 0.15 200)" strokeWidth="2" />
        
        {/* Rotating blades */}
        <g transform="translate(60, 50)" className="wind-spin">
          {/* Blade 1 */}
          <rect x="-2" y="-25" width="4" height="25" fill="oklch(0.55 0.15 200)" rx="2" />
          
          {/* Blade 2 */}
          <rect x="-2" y="-25" width="4" height="25" fill="oklch(0.55 0.15 200 / 0.7)" rx="2" transform="rotate(120)" />
          
          {/* Blade 3 */}
          <rect x="-2" y="-25" width="4" height="25" fill="oklch(0.55 0.15 200 / 0.5)" rx="2" transform="rotate(240)" />
          
          {/* Center hub */}
          <circle cx="0" cy="0" r="6" fill="oklch(0.55 0.15 200)" />
        </g>
        
        {/* Wind lines to show movement */}
        <g stroke="oklch(0.55 0.15 200 / 0.4)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6">
          <line x1="5" y1="35" x2="25" y2="35" />
          <line x1="10" y1="45" x2="30" y2="45" />
          <line x1="8" y1="55" x2="28" y2="55" />
        </g>
      </svg>
    </div>
  )
}
