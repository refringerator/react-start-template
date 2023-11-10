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

import styled from 'styled-components';
import theme from 'styled-theming';

const bg = theme('mode', {
  ocean: '#fff',
  forest: '#000',
});

const Span = styled.span`
  background-color: ${bg};
`;

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  type = 'primary',
  size = 'medium',
  icon = false,
}) => (
  <button className={cn('button', `${icon ? 'button--icon' : ''}`, `button--${type}`, `button--${size}`)}>
    <Span>{children}</Span>
  </button>
);
