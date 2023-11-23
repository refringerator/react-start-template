import { FC, PropsWithChildren } from 'react';
import { Button } from '../button/Button';
import {
  CartItemCategory,
  CartItemContent,
  CartItemDescription,
  CartItemFooter,
  CartItemFooterPrice,
  CartItemFooterPriceOld,
  CartItemHeader,
  CartItemImage,
  CartItemImages,
  CartItemInner,
  CartItemName,
  CartItemStyled,
} from './styled';

export interface CartItemProps {
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
  <CartItemStyled>
    <CartItemInner>
      <CartItemImages>
        <CartItemImage style={{ backgroundImage: 'url(' + imageUrl + ')' }}></CartItemImage>
      </CartItemImages>
      <CartItemContent>
        <CartItemHeader>
          <div>
            <CartItemCategory>{categoryName}</CartItemCategory>
            <span>&#32;/&#32;</span>
            <CartItemName>{name}</CartItemName>
          </div>
          <Button type="icon">&#120;</Button>
        </CartItemHeader>
        <CartItemDescription>{description}</CartItemDescription>
        <CartItemFooter>
          <div className="cart-item--price__wrapper">
            <CartItemFooterPrice>{price}&#32;руб.</CartItemFooterPrice>
            <CartItemFooterPriceOld>{priceOld}&#32;руб.</CartItemFooterPriceOld>
          </div>
        </CartItemFooter>
      </CartItemContent>
    </CartItemInner>
  </CartItemStyled>
);
