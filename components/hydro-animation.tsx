export default function HydroAnimation() {
  return (
    <div className="flex items-center justify-center">
      <svg width="120" height="120" viewBox="0 0 120 120" className="drop-shadow-lg">
        {/* Dam structure */}
        <path d="M 20 60 L 30 40 L 40 40 L 50 40 L 60 30 L 70 40 L 80 40 L 90 40 L 100 60 Z" fill="oklch(0.55 0.15 200 / 0.3)" stroke="oklch(0.55 0.15 200)" strokeWidth="2" />
        
        {/* Water reservoir background */}
        <rect x="20" y="60" width="80" height="30" fill="oklch(0.55 0.15 200 / 0.15)" stroke="oklch(0.55 0.15 200)" strokeWidth="1" />
        
        {/* Flowing water animation */}
        <g opacity="0.7">
          <circle cx="30" cy="50" r="4" fill="oklch(0.55 0.15 200)" className="hydro-flow" />
          <circle cx="50" cy="50" r="4" fill="oklch(0.55 0.15 200)" className="hydro-flow" style={{ animationDelay: '0.3s' }} />
          <circle cx="70" cy="50" r="4" fill="oklch(0.55 0.15 200)" className="hydro-flow" style={{ animationDelay: '0.6s' }} />
        </g>
        
        {/* Turbine */}
        <g transform="translate(60, 80)">
          <rect x="-15" y="-5" width="30" height="10" fill="oklch(0.55 0.15 200 / 0.2)" stroke="oklch(0.55 0.15 200)" strokeWidth="1" rx="2" />
          <circle cx="-8" cy="0" r="4" fill="oklch(0.55 0.15 200 / 0.5)" stroke="oklch(0.55 0.15 200)" strokeWidth="1" />
          <circle cx="0" cy="0" r="4" fill="oklch(0.55 0.15 200 / 0.5)" stroke="oklch(0.55 0.15 200)" strokeWidth="1" />
          <circle cx="8" cy="0" r="4" fill="oklch(0.55 0.15 200 / 0.5)" stroke="oklch(0.55 0.15 200)" strokeWidth="1" />
        </g>
        
        {/* Water waves */}
        <g stroke="oklch(0.55 0.15 200 / 0.3)" strokeWidth="1" fill="none" opacity="0.6">
          <path d="M 25 75 Q 30 72 35 75 T 45 75" />
          <path d="M 55 75 Q 60 72 65 75 T 75 75" />
          <path d="M 85 75 Q 90 72 95 75 T 105 75" />
        </g>
      </svg>
    </div>
  )
}
