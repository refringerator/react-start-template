import type { Meta } from '@storybook/react';
import { languageOptions } from '../../locales/langueages';
import { Select } from '../select/Select';
import { Switch } from '../switch/Switch';
import { Header } from './Header';
import TextTranslated from '../simle-text/Text';

const meta: Meta<typeof Header> = {
  title: 'Общее/Шапка(header)',
  component: Header,
};

export default meta;

export const HeaderWithLogoAndSwitcher = {
  name: 'Шапка(header)',
  args: {
    menu: <TextTranslated />,
    children: (
      <>
        <Switch />
        <Select options={languageOptions} />
      </>
    ),
  },
};
