import { Link } from 'react-router-dom';

export const Logo = () => {
  const darkGray = '#3D4548';
  const orange = '#E8833A';

  return (
    <Link to="/" className="flex items-center group">
      <svg
        viewBox="0 0 280 60"
        className="h-10 md:h-12 w-auto"
        aria-label="Michel Media"
      >
        {/* Left angle bracket < */}
        <polygon
          points="0,30 18,10 24,10 10,30 24,50 18,50"
          fill={darkGray}
        />
        
        {/* M - Left diagonal leg (dark) */}
        <polygon
          points="26,10 32,10 50,50 44,50"
          fill={darkGray}
        />
        
        {/* M - Right diagonal leg (dark) */}
        <polygon
          points="68,10 74,10 56,50 50,50"
          fill={darkGray}
        />
        
        {/* M - Orange diagonal stroke (left to center) */}
        <polygon
          points="32,50 38,50 56,10 50,10"
          fill={orange}
        />
        
        {/* M - Orange diagonal stroke (right to center) */}
        <polygon
          points="62,50 68,50 50,10 44,10"
          fill={orange}
        />
        
        {/* Right angle bracket > */}
        <polygon
          points="100,30 82,10 76,10 90,30 76,50 82,50"
          fill={darkGray}
        />
        
        {/* Text: Michel */}
        <text
          x="115"
          y="28"
          fontFamily="Inter, system-ui, -apple-system, sans-serif"
          fontWeight="700"
          fontSize="22"
          fill={darkGray}
        >
          Michel
        </text>
        
        {/* Text: Media */}
        <text
          x="115"
          y="52"
          fontFamily="Inter, system-ui, -apple-system, sans-serif"
          fontWeight="700"
          fontSize="22"
          fill={orange}
        >
          Media
        </text>
      </svg>
    </Link>
  );
};
