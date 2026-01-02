import { Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <div className="relative">
        <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
          <Code2 className="w-5 h-5 text-primary-foreground" />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold text-foreground leading-tight tracking-tight">
          Michel
        </span>
        <span className="text-sm font-semibold text-primary leading-tight -mt-0.5">
          Digital
        </span>
      </div>
    </Link>
  );
};
