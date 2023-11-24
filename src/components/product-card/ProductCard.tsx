import { FC, PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
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
}) => {
  const { t } = useTranslation();
  return (
    <Card $cardType={cardType}>
      <CardInner>
        <CardImageWrapper $cardType={cardType}>
          <CardImage src={imageUrl} alt={name} />
        </CardImageWrapper>
        <CardContent>
          <CardCategory>{categoryName}</CardCategory>
          <CardName>{name}</CardName>
          <CardDescription>{description}</CardDescription>
          <CardFooter>
            <div className="card--price__wrapper">
              <CardPrice>{t('price', { price })}</CardPrice>
              <CardPriceOld>{t('price', { price: priceOld })}</CardPriceOld>
            </div>
            <CartButton type="disabled" count={0}>
              {t('to_cart')}
            </CartButton>
          </CardFooter>
        </CardContent>
      </CardInner>
    </Card>
  );
};
