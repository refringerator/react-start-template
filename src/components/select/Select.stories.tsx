import type { Meta } from '@storybook/react';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Базовые элементы/Выбиратель',
  parameters: {},
  component: Select,
  tags: ['autodocs'],
};

export default meta;

export const DefaultButton = {
  name: 'Обычный выбиратель',
  args: {
    options: [
      { value: 'ru', title: 'Русский', icon: '🇷🇺' },
      { value: 'en', title: 'English', icon: '🇺🇸' },
    ],
  },
};
