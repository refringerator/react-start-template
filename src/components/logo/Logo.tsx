import { FC } from 'react';
import './logo.css';
import LogoSvg from '../../logo.svg';

export const Logo: FC = () => (
  <div className="logo">
    <div className="logo--inner">
      <img className="logo--inner__img" src={LogoSvg} />
    </div>
  </div>
);
