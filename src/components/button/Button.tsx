import { FC, PropsWithChildren } from 'react';
import { StyledButton, Span } from './styles';

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
  <StyledButton type={type} size={size}>
    <Span>{children}</Span>
  </StyledButton>
);
