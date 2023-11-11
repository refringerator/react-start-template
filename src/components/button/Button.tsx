import cn from 'clsx';
import { FC, PropsWithChildren } from 'react';
import { StyledButton, Span } from './styles';
// import './button.css';

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
}) => (
  <StyledButton type={type} className={cn(`${icon ? 'button--icon' : ''}`, `button--${type}`, `button--${size}`)}>
    <Span>{children}</Span>
  </StyledButton>
);
