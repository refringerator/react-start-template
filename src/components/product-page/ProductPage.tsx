import { FC, PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
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
}) => {
  const { t } = useTranslation();
  return (
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
              <PagePrice>{t('price', { price })}</PagePrice>
              <PagePriceOld>{t('price', { price: priceOld })}</PagePriceOld>
            </PagePriceWrapper>
            <CartButton type="disabled" count={0}>
              {t('to_cart')}
            </CartButton>
          </PageFooter>
        </PageContent>
      </PageInner>
    </Page>
  );
};
