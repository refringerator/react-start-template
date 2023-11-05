import type { Meta } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Общее/Кнопка',
  component: Button,
  tags: ['autodocs'],
  args: {
    label: 'Button',
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;

export const Primary = {
  args: {
    primary: true,
  },
};

export const Secondary = {
  args: {
    label: 'Sec button',
  },
};

export const Large = {
  args: {
    size: 'large',
  },
};

export const Small = {
  args: {
    size: 'small',
  },
};
