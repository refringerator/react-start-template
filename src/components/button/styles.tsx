import styled from 'styled-components';
import theme from 'styled-theming';
import { TButtonType } from './Button';

const bg = theme('mode', {
  ocean: '#fff',
  forest: '#000',
});

const backgroundColor = theme.variants('mode', 'type', {
  primary: { ocean: '#3977ad', forest: 'darkblue' },
  secondary: { ocean: '#f0f0f5', forest: 'darkblue' },
  success: { ocean: '#6cbd7d', forest: 'darkgreen' },
  danger: { ocean: '#fe3266', forest: 'darkorange' },
  disabled: { ocean: '#e1e4eb', forest: 'darkgray' },
  icon: { ocean: 'none', forest: 'none' },
});

// const backgroundColor = theme('type', {
//   primary: '#3977ad',
//   secondary: '#f0f0f5',
//   success: '#6cbd7d',
//   danger: '#fe3266',
//   disabled: '#e1e4eb',
// });

export const Span = styled.span``;

export const StyledButton = styled.button<{ type?: TButtonType }>`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  border: 0;
  color: inherit;
  border-radius: 2px;
  cursor: pointer;
  background: ${backgroundColor || 'none'};
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease;

  &:hover {
    box-shadow: none;
  }
`;

// StyledButton.propTypes = {
//   variant: PropTypes.oneOf(['default', 'primary', 'success', 'warning']),
// };
//   .button--primary {
//     color: white;
//     background-color: #3977ad;
//   }

//   .button--secondary {
//     color: #828894;
//     background: #f0f0f5;
//   }

//   .button--success {
//     color: white;
//     background: #6cbd7d;
//   }

//   .button--danger {
//     color: white;
//     background: #fe3266;
//   }
//   .button--disabled {
//     color: #b2b7c2;
//     background: #e1e4eb;
//     box-shadow: none;
//     cursor: default;
//   }
