import React, { FC, PropsWithChildren } from 'react';
import './layout.css';

interface LayoutProps {
  /**
   * Шапка страницы
   */
  header: React.ReactNode;
}

export const Layout: FC<PropsWithChildren<LayoutProps>> = ({ header, children }) => (
  <div className="layout">
    {header}
    <div className="modal--inner">{children}</div>
  </div>
);
