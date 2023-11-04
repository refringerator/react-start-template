import type { Meta, StoryFn } from '@storybook/react';
import { Layout } from './Layout';
import { Header } from '../header/Header';
import { Logo } from '../logo/Logo';

import { HeaderWithLogo } from '../header/header.stories';

const meta: Meta<typeof Layout> = {
  title: 'Общее/Каркас(layout)',
  component: Layout,
  tags: ['autodocs'],
};

export default meta;

const Template: StoryFn<typeof Layout> = (args) => <Layout {...args} />;

export const LayoutWithHeader = Template.bind({});
LayoutWithHeader.storyName = 'Каркас с шапкой и лого';
LayoutWithHeader.args = {
  children: <p>Содержимое страницы</p>,
  header: (
    <Header>
      <Logo />
    </Header>
  ),
};