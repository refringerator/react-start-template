import { FC, PropsWithChildren } from 'react';
import { Button, IButtonProps } from '../button/Button';
import './cart-button.css';

interface ICartButtonProps extends IButtonProps {
  /**
   * Количество в корзине
   */
  count: number;
}

export const CartButton: FC<PropsWithChildren<ICartButtonProps>> = ({ children, icon, size, type, count }) => {
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
