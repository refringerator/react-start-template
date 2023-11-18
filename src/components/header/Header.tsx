import { FC, PropsWithChildren } from 'react';
import './header.css';

export const Header: FC<PropsWithChildren> = ({ children }) => (
  <div className="header">
    <div className="header--inner">{children}</div>
  </div>
);
