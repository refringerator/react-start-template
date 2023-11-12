import { FC, PropsWithChildren } from 'react';
import { CartButton } from '../cart-button/CartButton';
import { ProductCardProps } from '../product-card/ProductCard';
import {
  Page,
  PageCategory,
  PageContent,
  PageDescription,
  PageFooter,
  PageImage,
  PageImages,
  PageInner,
  PageName,
  PagePrice,
  PagePriceOld,
  PagePriceWrapper,
} from './styled';

interface ProductPageProps extends Omit<ProductCardProps, 'imageUrl'> {
  imageUrls: [string];
}

export const ProductPage: FC<PropsWithChildren<ProductPageProps>> = ({
  imageUrls,
  name,
  categoryName,
  description,
  price,
  priceOld,
  // TODO: нужно ли тут? cardType = 'default',
}) => (
  <Page>
    <PageInner>
      <PageImages>
        {imageUrls.map((url, index) => (
          <PageImage style={{ backgroundImage: 'url(' + url + ')' }} key={index}></PageImage>
        ))}
      </PageImages>
      <PageContent>
        <PageCategory>{categoryName}</PageCategory>
        <div>
          <PageName>{name}</PageName>
          <PageDescription>{description}</PageDescription>
        </div>
        <PageFooter>
          <PagePriceWrapper>
            <PagePrice>{price}&#32;руб.</PagePrice>
            <PagePriceOld>{priceOld}&#32;руб.</PagePriceOld>
          </PagePriceWrapper>
          <CartButton type="disabled" count={0}>
            В корзину
          </CartButton>
        </PageFooter>
      </PageContent>
    </PageInner>
  </Page>
);
