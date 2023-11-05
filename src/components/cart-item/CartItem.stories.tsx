import type { Meta } from '@storybook/react';
import { CartItem } from './CartItem';

const meta: Meta<typeof CartItem> = {
  title: 'Общее/Товар в корзине',
  component: CartItem,
  tags: ['autodocs'],

  argTypes: {
    type: {
      type: 'string',
      description: 'Button type',
      defaultValue: 'default',
      options: ['default', 'disabled'],
      control: {
        type: 'select',
      },
    },
  },
};

export default meta;

export const DefaultButton = {
  args: {
    type: 'default',
    categoryName: 'Программирование',
    name: 'React.js Developer',
    price: '80000',
    priceOld: '200000',
    description:
      'Разработка с React.js позволяет создавать мощные и эффективные веб-приложения с отзывчивым интерфейсом. Благодаря компонентной архитектуре и реактивному обновлению UI, код становится переиспользуемым и приложение работает быстро. Большое сообщество разработчиков и обширные ресурсы обеспечивают поддержку и легкость в изучении.',
    imageUrl: 'https://cdn.otus.ru/media/public/fc/79/fc79b7e1d8934e7bb78293d7c6c32e8c.svg',
  },
};
