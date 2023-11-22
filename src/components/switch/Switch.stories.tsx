import type { Meta } from '@storybook/react';
import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Базовые элементы/Переключатель',
  parameters: {},
  component: Switch,
  tags: ['autodocs'],
};

export default meta;

export const DefaultButton = {
  name: 'Обычный переключатель',
  args: {},
};
