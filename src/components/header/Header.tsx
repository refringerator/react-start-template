import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';

const headerBackgroundColor = theme('mode', {
  ocean: 'rgb(48, 96, 138)',
  forest: '#182612',
});

const StyledHeader = styled.div`
  position: sticky;
  top: 0;
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${headerBackgroundColor};
`;

export const Header: FC<PropsWithChildren> = ({ children }) => (
  <StyledHeader>
    <div className="header--inner">{children}</div>
  </StyledHeader>
);
