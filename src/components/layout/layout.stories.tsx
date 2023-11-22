import type { Meta, StoryFn } from '@storybook/react';
import { Layout } from './Layout';
import { Header } from '../header/Header';
import { Switch } from '../switch/Switch';

const meta: Meta<typeof Layout> = {
  title: 'Общее/Каркас(layout)',
  component: Layout,
};

export default meta;

const Template: StoryFn<typeof Layout> = (args) => <Layout {...args} />;

export const LayoutWithHeader = Template.bind({});
LayoutWithHeader.storyName = 'Каркас(layout)';
LayoutWithHeader.args = {
  children: <p>Содержимое страницы</p>,
  header: (
    <>
      <Header>
        <Switch />
        <Switch />
      </Header>
    </>
  ),
};
