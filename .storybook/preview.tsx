import React from 'react';
import { Decorator, Preview } from '@storybook/react';
import LightTheme from './themes/light';
import DarkTheme from './themes/dark';
import HighContrastLightTheme from './themes/high-contrast-light';
import HighContrastDarkTheme from './themes/high-contrast-dark';
import styled, { createGlobalStyle, css, ThemeProvider } from 'styled-components';

enum VscodeTheme {
  light = 'light',
  highContrastLight = 'high-contrast-light',
  dark = 'dark',
  highContrastDark = 'high-contrast-dark',
}

const GlobalStyle = createGlobalStyle(() => css`
  // smooth light-dark mode transition
  * {
    transition: all 250ms ease-in;
    transition-property: background, color;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: var(--vscode-font-family);
    font-size: var(--vscode-font-size);
    background: var(--vscode-editor-background);
    color: var(--vscode-foreground);
  }

  .sbdocs-preview {
    background: var(--vscode-editor-background);
  }
`);

const withTheme: Decorator = (StoryFn, { globals: { theme = VscodeTheme.light } }) => {
  return (
    <ThemeProvider theme={{}}>

      {theme === VscodeTheme.light && (<LightTheme />)}
      {theme === VscodeTheme.highContrastLight && (<HighContrastLightTheme />)}
      {theme === VscodeTheme.dark && (<DarkTheme />)}
      {theme === VscodeTheme.highContrastDark && (<HighContrastDarkTheme />)}

      <GlobalStyle />

      <StoryFn />
    </ThemeProvider>
  )
}

const decorators = [withTheme]

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Theme for the components',
      defaultValue: 'light',
      toolbar: {
        icon: 'sun',
        items: [
          { value: VscodeTheme.light, icon: 'sun', title: 'Light' },
          { value: VscodeTheme.highContrastLight, icon: 'sun', title: 'High contrast (light)' },
          { value: VscodeTheme.dark, icon: 'moon', title: 'Dark' },
          { value: VscodeTheme.highContrastDark, icon: 'moon', title: 'High contrast (dark)' },
        ],
        dynamicTitle: true
      },
    },
  },
  decorators: decorators
};

export default preview;