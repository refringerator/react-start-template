import { FC, PropsWithChildren } from 'react';
import { styled } from 'styled-components';
import { TProduct } from '../../api/products';
import { ProductCard } from '../product-card/ProductCard';

const ListInner = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  gap: 2em;
  grid-template-columns: repeat(auto-fill, minmax(320px, 320px));
`;

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2em;
  padding: 2em 0;
`;

interface ProductListProps {
  items: TProduct[];
}

export const ProductList: FC<ProductListProps> = ({ items }) => (
  <StyledList>
    <ListInner>
      {items.map(({ id, name, categoryName, description, price, priceOld, imageUrl }) => (
        <ProductCard
          key={id}
          name={name}
          categoryName={categoryName}
          description={description}
          price={price}
          priceOld={priceOld}
          imageUrl={imageUrl}
          count={0}
          cardType={'default'}
        />
      ))}
    </ListInner>
  </StyledList>
);
