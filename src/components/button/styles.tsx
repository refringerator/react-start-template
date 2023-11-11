import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { TButtonType, TButtonSize } from './Button';

const backgroundColor = theme.variants('mode', 'type', {
  primary: { ocean: '#3977ad', forest: '#739072' },
  secondary: { ocean: '#f0f0f5', forest: '#A0A698' },
  danger: { ocean: '#fe3266', forest: '#fe3266' },
  success: { ocean: '#6cbd7d', forest: '#4F6F52' },
  disabled: { ocean: '#e1e4eb', forest: '#A0A698' },
  icon: { ocean: 'none', forest: 'none' },
});

const color = theme.variants('mode', 'type', {
  primary: { ocean: 'white', forest: '#070D06' },
  secondary: { ocean: '#828894', forest: '#182612' },
  success: { ocean: '#white', forest: '#070D06' },
  danger: { ocean: 'white', forest: '#182612' },
  disabled: { ocean: '#b2b7c2', forest: '#070D06' },
  icon: { ocean: 'inherit', forest: 'inherit' },
});

export const Span = styled.span``;

export const StyledButton = styled.button<{ type?: TButtonType; size?: TButtonSize }>`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: ${color || 'inherit'};
  background: ${backgroundColor || 'none'};
  border: 0;
  border-radius: 2px;
  cursor: pointer;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease;

  ${(props) => {
    switch (props.size) {
      case 'small':
        return css`
          font-size: 12px;
          padding: 10px 16px;
        `;
      case 'medium':
        return css`
          font-size: 14px;
          padding: 11px 20px;
        `;
      case 'large':
        return css`
          font-size: 16px;
          padding: 12px 24px;
        `;
    }
  }}

  ${(props) =>
    props.type == 'disabled' &&
    css`
      box-shadow: none;
      cursor: default;
    `}
  
  ${(props) =>
    props.type == 'icon' &&
    css`
      box-shadow: none;
      &:hover {
        opacity: 0.7;
      }
    `}
    
  &:hover {
    box-shadow: none;
  }
`;
