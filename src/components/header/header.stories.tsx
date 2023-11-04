import type { Meta, StoryFn } from '@storybook/react';
import { Header } from './Header';
import { MediumLogo } from '../logo/logo.stories';

const meta: Meta<typeof Header> = {
  title: 'Общее/Шапка(header)',
  component: Header,
  tags: ['autodocs'],
};

export default meta;

const Template: StoryFn<typeof Header> = (args) => <Header {...args} />;

export const HeaderWithLogo = Template.bind({});
HeaderWithLogo.storyName = 'Шапка c лого';
HeaderWithLogo.args = { children: <MediumLogo /> };

export const HeaderWithoutLogo = Template.bind({});
HeaderWithoutLogo.storyName = 'Шапка без лого';
