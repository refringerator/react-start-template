import type { Meta } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Базовые элементы/Кнопка',
  parameters: {},
  component: Button,
  tags: ['autodocs'],
};

export default meta;

export const DefaultButton = {
  name: 'Обычная кнопка',
  args: {
    children: 'Нажми на меня ;)',
    type: 'primary',
    size: 'medium',
  },
};

export const Icon = {
  name: 'Значек',
  args: {
    children: 'Я просто значек',
    type: 'icon',
    size: 'medium',
  },
};
