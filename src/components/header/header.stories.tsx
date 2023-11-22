import type { Meta } from '@storybook/react';
import { Header } from './Header';
import { Switch } from '../switch/Switch';

const meta: Meta<typeof Header> = {
  title: 'Общее/Шапка(header)',
  component: Header,
};

export default meta;

export const HeaderWithLogoAndSwitcher = {
  name: 'Шапка(header)',
  args: {
    menu: 'Место для меню',
    children: (
      <>
        <Switch />
        <Switch />
      </>
    ),
  },
};
