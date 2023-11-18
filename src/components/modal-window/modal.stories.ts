import type { Meta } from '@storybook/react';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Общее/Модальное окно',
  component: Modal,
};

export default meta;

export const VisibleWindow = {
  name: 'Модальное окно',
  args: {
    visible: true,
    children: 'Видимое окно',
  },
};
