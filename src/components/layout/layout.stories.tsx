import type { Meta, StoryFn } from '@storybook/react';
import { languageOptions } from '../../locales/langueages';
import { Header } from '../header/Header';
import { Select } from '../select/Select';
import { Switch } from '../switch/Switch';
import { Layout } from './Layout';

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
        <Select options={languageOptions} />
      </Header>
    </>
  ),
};
