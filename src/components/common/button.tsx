// Libs Imports
import { cn } from '@/lib/utils';

// React & next Imports
import Link from 'next/link';

interface IButton {
  text: string;
  type?: 'submit' | 'button';
  onClick?: () => void;
  className?: string;
  isBlack?: boolean;
  redirectURL?: string;
  disabled?: boolean;
}

/**
 * Button component
 * @returns
 *
 * @example
 * <Button
 *    text="Title"
 *    onClick={() => {}}
 *    type="submit"
 *    isBlack={false}
 *    isIcon={false}
 *    disabled={false}
 *    redirectURL={'/'}
 *    className='bg-black'
 * />
 */
const Button = ({
  text,
  onClick,
  type,
  className,
  isBlack,
  redirectURL,
  disabled,
}: IButton) => {
  return (
    <Link href={redirectURL || ''}>
      <button
        disabled={disabled}
        onClick={onClick}
        type={type}
        className={cn(
          `${!isBlack ? 'bg-primary' : 'bg-black'}`,
          'font-medium text-sm',
          'w-fit h-11 ',
          'px-6 py-2',
          'rounded-lg',
          'text-white',
          'flex items-center gap-x-3',
          className,
        )}
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;
