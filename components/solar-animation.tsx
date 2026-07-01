export default function SolarAnimation() {
  return (
    <div className="flex items-center justify-center">
      <svg width="120" height="120" viewBox="0 0 120 120" className="drop-shadow-lg">
        {/* Sun with pulsing effect */}
        <circle cx="60" cy="60" r="20" fill="oklch(0.55 0.15 200)" className="solar-pulse" />
        
        {/* Solar rays */}
        <g stroke="oklch(0.55 0.15 200)" strokeWidth="2" strokeLinecap="round">
          <line x1="60" y1="10" x2="60" y2="25" opacity="0.8" />
          <line x1="60" y1="95" x2="60" y2="110" opacity="0.8" />
          <line x1="10" y1="60" x2="25" y2="60" opacity="0.8" />
          <line x1="95" y1="60" x2="110" y2="60" opacity="0.8" />
          <line x1="25" y1="25" x2="35" y2="35" opacity="0.6" />
          <line x1="85" y1="85" x2="95" y2="95" opacity="0.6" />
          <line x1="95" y1="25" x2="85" y2="35" opacity="0.6" />
          <line x1="35" y1="85" x2="25" y2="95" opacity="0.6" />
        </g>
        
        {/* Solar panel below */}
        <rect x="45" y="85" width="30" height="20" fill="oklch(0.55 0.15 200 / 0.3)" stroke="oklch(0.55 0.15 200)" strokeWidth="1" rx="2" />
        <line x1="52" y1="85" x2="52" y2="105" stroke="oklch(0.55 0.15 200)" strokeWidth="0.5" opacity="0.5" />
        <line x1="60" y1="85" x2="60" y2="105" stroke="oklch(0.55 0.15 200)" strokeWidth="0.5" opacity="0.5" />
        <line x1="68" y1="85" x2="68" y2="105" stroke="oklch(0.55 0.15 200)" strokeWidth="0.5" opacity="0.5" />
      </svg>
    </div>
  )
}
