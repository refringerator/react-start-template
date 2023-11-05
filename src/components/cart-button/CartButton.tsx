import { FC, PropsWithChildren } from 'react';
import { Button } from '../button/Button';
import './cart-button.css';

interface CartButtonProps {
  count: number;
  icon?: boolean;
  type?: string;
  size?: string;
}

export const CartButton: FC<PropsWithChildren<CartButtonProps>> = ({ icon, children, count, size, type }) => {
  return count ? (
    <div className="cart--button__counter">
      <Button icon={true}>&#60;</Button>
      <input className="cart--button__input" value={count}></input>
      <Button icon={true}>&#62;</Button>
    </div>
  ) : (
    <Button type={type} size={size} icon={icon}>
      {children}
    </Button>
  );
};
