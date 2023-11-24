import { FC, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { createRandomProduct } from '../api/products';
import { ProductList } from '../components/product-list/ProductList';

export const ProductScreen: FC = () => {
  const genItems = (count = 10) => Array.from({ length: count }, (value, index) => createRandomProduct());

  const [items, setItems] = useState(genItems());
  const { ref, inView, entry } = useInView({
    // https://www.npmjs.com/package/react-intersection-observer#options
    threshold: 1,
    // trackVisibility: false,
    // delay: 5000,
  });

  const updateItems = () => {
    console.log('Добавление элементов в списка..');
    if (items.length > 50) return;
    setItems([...items, ...genItems(4)]);
  };

  useEffect(() => {
    if (inView) updateItems();
  }, [inView]);

  return (
    <>
      <ProductList items={items} />
      <span ref={ref} />
    </>
  );
};
