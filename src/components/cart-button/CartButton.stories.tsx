import type { Meta } from '@storybook/react';
import { CartButton } from './CartButton';

const meta: Meta<typeof CartButton> = {
  title: 'Элементы магазина/Кнопка `В корзину`',
  component: CartButton,
  tags: ['autodocs'],
  args: { count: 0 },
};

export default meta;

export const DefaultButton = {
  name: 'В корзину',
  args: {
    children: 'В корзину',
    icon: false,
    type: 'success',
    size: 'medium',
  },
};

export const Icon = {
  name: 'Количество в корзине',
  args: {
    children: 'Icon',
    icon: true,
    count: 5,
  },
};
