import type { Meta, StoryFn } from '@storybook/react';
import { Logo } from './Logo';

const meta: Meta<typeof Logo> = {
  title: 'Общее/Лого',
  component: Logo,
};

export default meta;

const Template: StoryFn<typeof Logo> = (args) => <Logo {...args} />;

export const MediumLogo = Template.bind({});

MediumLogo.storyName = 'Лого';
