import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center group">
      <div className="flex items-center gap-3">
        {/* The Icon Part - Code tags with orange zigzag - BOLD version */}
        <svg width="52" height="42" viewBox="0 0 72 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Left Bracket < */}
          <path d="M4 24 L18 6" stroke="currentColor" className="text-[#333333] dark:text-gray-200" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 24 L18 42" stroke="currentColor" className="text-[#333333] dark:text-gray-200" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
          
          {/* Right Bracket > */}
          <path d="M68 24 L54 6" stroke="currentColor" className="text-[#333333] dark:text-gray-200" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M68 24 L54 42" stroke="currentColor" className="text-[#333333] dark:text-gray-200" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
          
          {/* Center Orange Zigzag (M-shape) */}
          <path d="M24 38 L24 10 L36 28 L48 10 L48 38" className="text-primary" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

        {/* The Text Part - Stacked */}
        <div className="flex flex-col justify-center leading-none">
          <span className="text-xl font-bold text-foreground tracking-tight">Michel</span>
          <span className="text-xl font-bold text-primary tracking-tight">Media</span>
        </div>
      </div>
    </Link>
  );
};
