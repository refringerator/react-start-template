import { faker } from '@faker-js/faker';

export type TCardType = 'default' | 'disabled';

export type TProduct = {
  id: string;
  cardType: TCardType;
  categoryName: string;
  name: string;
  price: number;
  priceOld: number;
  description: string;
  imageUrl: string;
};

export function createRandomProduct(): TProduct {
  return {
    id: faker.string.uuid(),
    cardType: 'default',
    categoryName: faker.commerce.productAdjective(),
    name: faker.commerce.product(),
    price: parseFloat(faker.commerce.price()),
    priceOld: parseFloat(faker.commerce.price()),
    description: faker.commerce.productDescription(),
    imageUrl: 'https://cdn.otus.ru/media/public/fc/79/fc79b7e1d8934e7bb78293d7c6c32e8c.svg',
  };
}
