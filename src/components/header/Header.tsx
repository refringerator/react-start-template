import { FC, PropsWithChildren } from 'react';
import { styled } from 'styled-components';
import theme from 'styled-theming';
import { Logo } from '../logo/Logo';

const headerBackgroundColor = theme('mode', {
  ocean: 'rgb(48, 96, 138)',
  forest: '#182612',
});

const headerColor = theme('mode', {
  ocean: '#ffffff;',
  forest: '#637368',
});

const StyledHeader = styled.div`
  position: sticky;
  top: 0;
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${headerBackgroundColor};
  color: ${headerColor};
`;

const Inner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const InnerLeft = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 2em;
`;
const InnerRight = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2em;
`;

interface HeaderProps {
  menu?: React.ReactNode;
}

export const Header: FC<PropsWithChildren<HeaderProps>> = ({ menu, children }) => (
  <StyledHeader>
    <Logo />
    <Inner>
      <InnerLeft>{menu}</InnerLeft>
      <InnerRight>{children}</InnerRight>
    </Inner>
  </StyledHeader>
);
