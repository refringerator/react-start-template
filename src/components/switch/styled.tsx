import theme from 'styled-theming';
import { styled } from 'styled-components';

const itemBackgroundColor = theme('mode', {
  ocean: '#3977ad',
  forest: '#739072',
});
const itemColor = theme('mode', {
  ocean: '#ffffff;',
  forest: '#070D06',
});

export const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 56px;
  height: 30px;

  /* Hide default HTML checkbox */
  & input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

export const SwitchBase = styled.div``;

export const SwitchSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${itemBackgroundColor};
  -webkit-transition: 0.4s;
  transition: 0.4s;

  &:before {
    position: absolute;
    content: '\\263C';
    height: 22px;
    width: 22px;
    left: 4px;
    bottom: 4px;
    color: ${itemBackgroundColor};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    background-color: ${itemColor};
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  /* Rounded sliders */
  & {
    border-radius: 34px;

    &:before {
      border-radius: 50%;
    }
  }
`;

export const SwitchInput = styled.input`
  &:checked + ${SwitchSlider} {
    background-color: ${itemBackgroundColor};
  }
  &:focus + ${SwitchSlider} {
    box-shadow: 0 0 1px ${itemBackgroundColor};
  }
  &:checked + ${SwitchSlider}:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;
