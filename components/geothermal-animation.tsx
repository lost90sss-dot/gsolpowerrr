export default function GeothermalAnimation() {
  return (
    <div className="flex items-center justify-center">
      <svg width="120" height="120" viewBox="0 0 120 120" className="drop-shadow-lg">
        {/* Ground layers */}
        <rect x="10" y="70" width="100" height="8" fill="oklch(0.55 0.15 200 / 0.15)" />
        <rect x="10" y="78" width="100" height="8" fill="oklch(0.55 0.15 200 / 0.25)" />
        <rect x="10" y="86" width="100" height="8" fill="oklch(0.55 0.15 200 / 0.35)" />
        <rect x="10" y="94" width="100" height="16" fill="oklch(0.55 0.15 200 / 0.5)" />
        
        {/* Wells/boreholes */}
        <g>
          {/* Borehole 1 */}
          <line x1="35" y1="70" x2="35" y2="35" stroke="oklch(0.55 0.15 200 / 0.3)" strokeWidth="3" />
          <circle cx="35" cy="35" r="4" fill="oklch(0.55 0.15 200 / 0.6)" className="geo-heat" />
          
          {/* Borehole 2 */}
          <line x1="60" y1="70" x2="60" y2="25" stroke="oklch(0.55 0.15 200 / 0.3)" strokeWidth="3" />
          <circle cx="60" cy="25" r="4" fill="oklch(0.55 0.15 200 / 0.8)" className="geo-heat" />
          
          {/* Borehole 3 */}
          <line x1="85" y1="70" x2="85" y2="40" stroke="oklch(0.55 0.15 200 / 0.3)" strokeWidth="3" />
          <circle cx="85" cy="40" r="4" fill="oklch(0.55 0.15 200 / 0.6)" className="geo-heat" />
        </g>
        
        {/* Heat pump at surface */}
        <g>
          <rect x="40" y="55" width="40" height="15" fill="oklch(0.55 0.15 200 / 0.2)" stroke="oklch(0.55 0.15 200)" strokeWidth="2" rx="3" />
          <circle cx="48" cy="62" r="2" fill="oklch(0.55 0.15 200 / 0.5)" />
          <circle cx="56" cy="62" r="2" fill="oklch(0.55 0.15 200 / 0.5)" />
          <circle cx="64" cy="62" r="2" fill="oklch(0.55 0.15 200 / 0.5)" />
          <circle cx="72" cy="62" r="2" fill="oklch(0.55 0.15 200 / 0.5)" />
        </g>
        
        {/* Heat waves emanating */}
        <g stroke="oklch(0.55 0.15 200 / 0.4)" strokeWidth="1" fill="none" opacity="0.5">
          <path d="M 60 60 Q 65 50 60 40" />
          <path d="M 60 60 Q 70 55 80 50" />
          <path d="M 60 60 Q 50 50 40 45" />
        </g>
      </svg>
    </div>
  )
}
