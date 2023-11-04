import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';
import { Default } from '../logo/logo.stories';
import { Logo } from '../logo/Logo';

const meta: Meta<typeof Header> = {
  title: 'Общее/Шапка(header)',
  component: Header,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const HeaderWithLogo: Story = {
  name: 'Шапка приложения c лого',
  // args: {
  //   children: <Logo />,
  // },
  render: (args) => (
    <Header {...args}>
      <Default />
    </Header>
  ),
};

export const HeaderWithoutLogo: Story = {
  name: 'Шапка приложения без лого',
  // args: {
  //   children: <Logo />,
  // },
  render: (args) => <Header {...args}></Header>,
};
