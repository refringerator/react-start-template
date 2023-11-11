import { FC } from 'react';
import LogoSvg from '../../logo.svg';
import styled from 'styled-components';
import theme from 'styled-theming';

const filter = theme('mode', {
  ocean: 'none',
  // TODO: возможно, нужно использовать просто другое лого
  forest: 'invert(63%) sepia(70%) saturate(6883%) hue-rotate(168deg) brightness(104%) contrast(102%)',
});

const StyledLogo = styled.img`
  transition: width 0.2s ease;
  width: 72px;
  filter: ${filter};
`;

export const Logo: FC = () => (
  <div className="logo">
    <div className="logo--inner">
      <StyledLogo src={LogoSvg} />
    </div>
  </div>
);
