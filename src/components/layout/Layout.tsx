import React, { FC, PropsWithChildren } from 'react';
import { styled, css } from 'styled-components';
import theme from 'styled-theming';

const layoutTextBackgroundColor = theme('mode', {
  ocean: css`
    background-color: #fff;
    color: #000;
  `,
  forest: css`
    background-color: #f1f2e9;
    color: #070d06;
  `,
});

const StyledInner = styled.div`
  position: relative;
  width: 100%;
  height: 2000px;
`;

const StyledLayout = styled.div`
  ${layoutTextBackgroundColor};
`;

interface LayoutProps {
  /**
   * Шапка страницы
   * Возможно, есть смысл убрать хэдер
   */
  header?: React.ReactNode;
}

export const Layout: FC<PropsWithChildren<LayoutProps>> = ({ header, children }) => (
  <StyledLayout>
    {header}
    <StyledInner>{children}</StyledInner>
  </StyledLayout>
);
