import React from 'react';
import type { Preview } from '@storybook/react';
import i18n from '../src/i18next';
import { ThemeProvider } from 'styled-components';

const withThemeProvider = (Story, context) => {
  const theme = context.globals.theme;
  return (
    <ThemeProvider theme={{ mode: theme || 'ocean' }}>
      <Story />
    </ThemeProvider>
  );
};

const preview: Preview = {
  globals: {
    locale: 'en',
    locales: {
      en: { title: 'English', left: '🇺🇸' },
      ru: { title: 'Russian', left: '🇷🇺' },
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'ocean',
      toolbar: {
        // The label to show for this toolbar item
        title: 'Тема',
        icon: 'faceneutral',
        // Array of plain string values or MenuItem shape (see below)
        items: [
          { value: 'ocean', title: 'Море' },
          { value: 'forest', title: 'Лес' },
        ],
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    i18n,
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: ['Общее', 'Базовые элементы', 'Элементы магазина', '*', 'WIP'],
      },
    },
  },

  decorators: [withThemeProvider],
};

export default preview;
