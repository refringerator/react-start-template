import type { Meta } from '@storybook/react';
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
    title: 'Example/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  };

  export default meta;

  export const Primary = {
    args: {
      primary: true,
      label: 'Button',
    },
  };
  
  export const Secondary = {
    args: {
      label: 'Button',
    },
  };
  
  export const Large = {
    args: {
      size: 'large',
      label: 'Button',
    },
  };
  
  export const Small = {
    args: {
      size: 'small',
      label: 'Button',
    },
  };