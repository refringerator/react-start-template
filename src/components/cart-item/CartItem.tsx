import { FC, PropsWithChildren } from 'react';
import { Button } from '../button/Button';
import { CartButton } from '../cart-button/CartButton';
import './cart-item.css';

interface CartItemProps {
  /**
   * Цена товара
   */
  price: number;
  /**
   * Старая цена
   */
  priceOld: number;
  /**
   * Описание
   */
  description: string;
  /**
   * Ссылка на изображение
   */
  imageUrl: string;
  /**
   * Наименование
   */
  name: string;
  /**
   * Категория товара
   */
  categoryName: string;
}

export const CartItem: FC<PropsWithChildren<CartItemProps>> = ({
  imageUrl,
  name,
  categoryName,
  description,
  price,
  priceOld,
}) => (
  <div className={'cart-item'}>
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
