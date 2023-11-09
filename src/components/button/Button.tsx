import cn from 'clsx';
import { FC, PropsWithChildren } from 'react';
import './button.css';

export interface ButtonProps {
  /**
   * Тип кнопки
   */
  type?: TButtonType;
  /**
   * Размер кнопки
   */
  size?: TButtonSize;
  /**
   * Признак иконки
   */
  icon?: boolean;
}

type TButtonType = 'primary' | 'secondary' | 'danger' | 'success' | 'disabled' | 'icon';
type TButtonSize = 'small' | 'medium' | 'large';

/**
 * Базовый UI компонент-кнопка
 */

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  type = 'primary',
  size = 'medium',
  icon = false,
}) => (
  <button className={cn('button', `${icon ? 'button--icon' : ''}`, `button--${type}`, `button--${size}`)}>
    <span className="button--inner">{children}</span>
  </button>
);
