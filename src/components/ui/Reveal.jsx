import { useReveal } from '../../hooks/useReveal';
import { cn } from '../../utils/cn';

export default function Reveal({ as: Tag = 'div', className, children, ...rest }) {
  const ref = useReveal();
  return <Tag ref={ref} className={cn('reveal', className)} {...rest}>{children}</Tag>;
}
