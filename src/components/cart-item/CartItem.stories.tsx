import type { Meta } from '@storybook/react';
import { CartItem } from './CartItem';

const meta: Meta<typeof CartItem> = {
  title: 'Элементы магазина/Товар в корзине',
  component: CartItem,
  tags: ['autodocs'],
};

export default meta;

export const ReactCart = {
  name: 'Продается React',
  args: {
    categoryName: 'Программирование',
    name: 'React.js Developer',
    price: '80000',
    priceOld: '200000',
    description:
      'Разработка с React.js позволяет создавать мощные и эффективные веб-приложения с отзывчивым интерфейсом. Благодаря компонентной архитектуре и реактивному обновлению UI, код становится переиспользуемым и приложение работает быстро. Большое сообщество разработчиков и обширные ресурсы обеспечивают поддержку и легкость в изучении.',
    imageUrl: 'https://cdn.otus.ru/media/public/fc/79/fc79b7e1d8934e7bb78293d7c6c32e8c.svg',
  },
};
