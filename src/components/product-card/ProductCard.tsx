import { FC, PropsWithChildren } from 'react';
import { CartButton, CartButtonProps } from '../cart-button/CartButton';
import { CartItemProps } from '../cart-item/CartItem';
import {
  Card,
  CardCategory,
  CardContent,
  CardDescription,
  CardFooter,
  CardImage,
  CardImageWrapper,
  CardInner,
  CardName,
  CardPrice,
  CardPriceOld,
} from './styled';

export interface ProductCardProps extends CartItemProps, CartButtonProps {
  cardType?: TCardType;
}

export type TCardType = 'default' | 'disabled';

export const ProductCard: FC<PropsWithChildren<ProductCardProps>> = ({
  imageUrl,
  name,
  categoryName,
  description,
  price,
  priceOld,
  cardType = 'default',
}) => (
  <Card cardType={cardType}>
    <CardInner>
      <CardImageWrapper cardType={cardType}>
        <CardImage src={imageUrl} alt={name} />
      </CardImageWrapper>
      <CardContent>
        <CardCategory>{categoryName}</CardCategory>
        <CardName>{name}</CardName>
        <CardDescription>{description}</CardDescription>
        <CardFooter>
          <div className="card--price__wrapper">
            <CardPrice>{price}&#32;руб.</CardPrice>
            <CardPriceOld>{priceOld}&#32;руб.</CardPriceOld>
          </div>
          <CartButton type="disabled" count={0}>
            В корзину
          </CartButton>
        </CardFooter>
      </CardContent>
    </CardInner>
  </Card>
);
