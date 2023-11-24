import { ProductList } from '../components/product-list/ProductList';
import { createRandomProduct, TProduct } from '../api/products';
import { FC } from 'react';

const items = Array.from({ length: 10 }, (value, index) => createRandomProduct());

export const ProductScreen: FC = () => {
  return <ProductList items={items} />;
};
