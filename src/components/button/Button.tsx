import { FC, PropsWithChildren } from 'react';
import cn from 'clsx';
import './button.css';

interface ButtonProps {
  /**
   * Тип кнопки
   */
  type?: TButtonType;
  /**
   * Размер кнопки
   */
  size?: TButtonSize;
  icon?: boolean;
}

export type TButtonType = 'primary' | 'secondary' | 'danger' | 'success' | 'disabled' | 'icon';
export type TButtonSize = 'small' | 'medium' | 'large';
/**
 * Базовый UI компонент-кнопка
 */

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  type = 'primary',
  size = 'medium',
  icon = false,
}) => {
  return (
    <button className={cn('button', `${icon ? 'button--icon' : ''}`, `button--${type}`, `button--${size}`)}>
      <span className="button--inner">{children}</span>
    </button>
  );
};
