import { FC, PropsWithChildren } from 'react';
import { Button } from '../button/Button';
import './cart-item.css';

interface CartButtonProps {
  icon?: boolean;
  type?: string;
  price: number;
  priceOld: number;
  description: string;
  imageUrl: string;
  name: string;
  categoryName: string;
}

export const CartItem: FC<PropsWithChildren<CartButtonProps>> = ({
  imageUrl,
  name,
  categoryName,
  description,
  price,
  priceOld,
  type = 'default',
}) => (
  <div className={`cart-item cart-item--${type}`}>
    <div className="cart-item--inner">
      <div className="cart-item--images">
        <div className="cart-item--image" style={{ backgroundImage: 'url(' + imageUrl + ')' }}></div>
      </div>
      <div className="cart-item--content">
        <div className="cart-item--header">
          <div>
            <span className="cart-item--category">{categoryName}</span>
            <span>&#32;/&#32;</span>
            <h2 className="cart-item--name">{name}</h2>
          </div>
          <Button type="icon">&#120;</Button>
        </div>
        <p className="cart-item--description">{description}</p>
        <div className="cart-item--footer">
          <div className="cart-item--price__wrapper">
            <div className="cart-item--price">{price}&#32;руб.</div>
            <div className="cart-item--price__old">{priceOld}&#32;руб.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
