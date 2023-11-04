import type { Meta } from '@storybook/react';
import { Layout } from './Layout';

const meta: Meta<typeof Layout> = {
  title: 'Общее/Каркас(layout)',
  component: Layout,
  tags: ['autodocs'],
};

export default meta;

export const Default = {
  name: 'Каркас приложения',
  args: {
    header: 'Заголовок',
    children: 'Содержимое',
  },
};
