import type { Meta } from '@storybook/react';
import { Logo } from './Logo';

const meta: Meta<typeof Logo> = {
  title: 'Общее/Лого',
  component: Logo,
};

export default meta;

export const Default = {
  name: 'Лого',
};
