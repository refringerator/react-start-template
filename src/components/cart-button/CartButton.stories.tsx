import type { Meta } from '@storybook/react';
import { CartButton } from './CartButton';

const meta: Meta<typeof CartButton> = {
  title: 'Общее/Кнопка `В корзину`',
  component: CartButton,
  tags: ['autodocs'],

  argTypes: {
    type: {
      type: 'string',
      description: 'Button type',
      defaultValue: 'primary',
      options: ['primary', 'secondary', 'danger', 'success', 'disabled'],
      control: {
        type: 'select',
      },
    },
    size: {
      type: 'string',
      description: 'Button size',
      defaultValue: 'medium',
      options: ['small', 'medium', 'large'],
      control: {
        type: 'select',
      },
    },
  },
};

export default meta;

export const DefaultButton = {
  args: {
    children: 'Button',
    icon: false,
    type: 'primary',
    size: 'medium',
  },
};

export const Icon = {
  args: {
    children: 'Icon',
    icon: true,
    type: 'primary',
    size: 'medium',
  },
};
