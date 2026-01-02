import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center group">
      <div className="flex items-center gap-3">
        {/* The Icon Part - Code tags with orange zigzag */}
        <svg width="48" height="40" viewBox="0 0 72 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Left Bracket < (inward facing) */}
          <path d="M4 24 L16 8" stroke="#2D3436" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 24 L16 40" stroke="#2D3436" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
          
          {/* Right Bracket > (inward facing) */}
          <path d="M68 24 L56 8" stroke="#2D3436" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M68 24 L56 40" stroke="#2D3436" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
          
          {/* Center Orange Zigzag (M-shape) */}
          <path d="M24 38 L24 10 L36 28 L48 10 L48 38" stroke="#F97316" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

        {/* The Text Part - Stacked */}
        <div className="flex flex-col justify-center leading-none">
          <span className="text-xl font-bold text-[#2D3436] tracking-tight">Michel</span>
          <span className="text-xl font-bold text-[#F97316] tracking-tight">Media</span>
        </div>
      </div>
    </Link>
  );
};
