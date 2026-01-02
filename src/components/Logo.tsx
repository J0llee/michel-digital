import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center group">
      <div className="flex items-center gap-3">
        {/* The Icon Part */}
        <svg width="50" height="50" viewBox="0 0 85 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Left Bracket < */}
          <path d="M20 15 L5 35 L20 55" stroke="#333333" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
          
          {/* The M Structure */}
          {/* Left Grey Leg */}
          <path d="M30 15 V55" stroke="#333333" strokeWidth="6" strokeLinecap="round"/>
          {/* Middle Orange V */}
          <path d="M30 15 L42.5 45 L55 15" stroke="#F97316" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
          {/* Right Grey Leg */}
          <path d="M55 15 V55" stroke="#333333" strokeWidth="6" strokeLinecap="round"/>
          
          {/* Right Bracket > */}
          <path d="M65 15 L80 35 L65 55" stroke="#333333" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

        {/* The Text Part */}
        <div className="flex flex-col justify-center leading-none">
          <span className="text-xl font-bold text-[#333333] tracking-tight">Michel</span>
          <span className="text-xl font-bold text-[#F97316] tracking-tight">Media</span>
        </div>
      </div>
    </Link>
  );
};
