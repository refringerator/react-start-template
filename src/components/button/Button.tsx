import { FC, PropsWithChildren } from 'react';
import cn from 'clsx';
import './button.css';

interface ButtonProps {
  type?: string;
  size?: string;
  icon?: boolean;
}
/**
 * Primary UI component for user interaction
 */

export const Button: FC<PropsWithChildren<ButtonProps>> = ({ children, type, icon = false, size }) => {
  return (
    <button className={cn('button', `${icon ? 'button--icon' : ''}`, `button--${type}`, `button--${size}`)}>
      <span className="button--inner">{children}</span>
    </button>
  );
};
