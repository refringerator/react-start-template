import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';
import { MediumLogo } from '../logo/logo.stories';

const meta: Meta<typeof Header> = {
  title: 'Общее/Шапка(header)',
  component: Header,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const HeaderWithLogo: Story = {
  name: 'Шапка приложения c лого',
  render: (args) => (
    <Header {...args}>
      <MediumLogo />
    </Header>
  ),
};

export const HeaderWithoutLogo: Story = {
  name: 'Шапка приложения без лого',
  render: (args) => <Header {...args}></Header>,
};
