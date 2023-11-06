import type { Meta } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Общее/Кнопка',
  component: Button,
  tags: ['autodocs'],
};

export default meta;

export const DefaultButton = {
  args: {
    children: 'Нажми на меня ;)',
    icon: false,
    type: 'primary',
    size: 'medium',
  },
};

export const Icon = {
  args: {
    children: 'Я просто значек',
    icon: true,
    type: 'primary',
    size: 'medium',
  },
};
