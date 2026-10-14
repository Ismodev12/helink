import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

const variants = {
  primary: 'bg-electric text-white hover:bg-electric-600 shadow-sm shadow-electric/20',
  light: 'bg-white text-night hover:bg-paper',
  outline: 'border border-line bg-white text-night hover:border-night/40',
  ghostLight: 'border border-white/30 text-white hover:bg-white/10 hover:border-white/60',
};

export default function Button({ to, href, variant = 'primary', size = 'md', icon: Icon, className, children, ...rest }) {
  const cls = cn(
    'inline-flex items-center justify-center gap-2 rounded-lg font-display font-semibold transition-colors duration-200',
    size === 'lg' ? 'min-h-[3.25rem] px-6 text-[0.95rem]' : 'min-h-[2.75rem] px-5 text-sm',
    variants[variant],
    className
  );
  const content = (
    <>
      {children}
      {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
    </>
  );
  if (to) return <Link to={to} className={cls} {...rest}>{content}</Link>;
  if (href) return <a href={href} className={cls} {...rest}>{content}</a>;
  return <button className={cls} {...rest}>{content}</button>;
}
