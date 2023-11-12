import type { Meta } from '@storybook/react';
import { ModalWrapper } from './ModalWrapper';

const meta: Meta<typeof ModalWrapper> = {
  title: 'Работа с хуками/Модальное окно с текстом',
  component: ModalWrapper,
};

export default meta;

export const ModalWrapperExample = {
  name: 'Поле ввода с модельным окном',
};
