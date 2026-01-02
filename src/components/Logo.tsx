import { Link } from 'react-router-dom';
import logoImage from '@/assets/logo.png';

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center group">
      <img 
        src={logoImage} 
        alt="Michel Media" 
        className="h-10 md:h-12 w-auto object-contain"
      />
    </Link>
  );
};
