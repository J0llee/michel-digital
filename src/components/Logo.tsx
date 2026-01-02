import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center group">
      <svg
        viewBox="0 0 200 50"
        className="h-10 md:h-12 w-auto"
        aria-label="Michel Media"
      >
        {/* Left angle bracket < */}
        <path
          d="M8 25 L18 15 L20 17 L12 25 L20 33 L18 35 Z"
          fill="#1F2937"
        />
        
        {/* M letter */}
        {/* Left vertical leg */}
        <path
          d="M28 14 L32 14 L32 36 L28 36 Z"
          fill="#1F2937"
        />
        {/* Right vertical leg */}
        <path
          d="M48 14 L52 14 L52 36 L48 36 Z"
          fill="#1F2937"
        />
        {/* Center V shape (orange) */}
        <path
          d="M32 14 L40 28 L48 14 L52 14 L40 36 L28 14 Z"
          fill="#F97316"
        />
        
        {/* Right angle bracket > */}
        <path
          d="M72 25 L62 15 L60 17 L68 25 L60 33 L62 35 Z"
          fill="#1F2937"
        />
        
        {/* Text: Michel */}
        <text
          x="82"
          y="22"
          fontFamily="Inter, system-ui, sans-serif"
          fontWeight="700"
          fontSize="14"
          fill="#1F2937"
        >
          Michel
        </text>
        
        {/* Text: Media */}
        <text
          x="82"
          y="38"
          fontFamily="Inter, system-ui, sans-serif"
          fontWeight="700"
          fontSize="14"
          fill="#F97316"
        >
          Media
        </text>
      </svg>
    </Link>
  );
};
