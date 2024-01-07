import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  brandTitle: 'Lyric - Case Study',
  brandUrl: 'https://lyric.tech/',
  brandImage: 'https://lyric.tech/wp-content/themes/lyric/theme-assets/images/lyric-logo.svg',
  brandTarget: '_self',
  //
  colorPrimary: '#0A9DFA',
  colorSecondary: '#585C6D',

  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appPreviewBg: '#ffffff',
  appBorderColor: '#585C6D',
  appBorderRadius: 8,

  // Text colors
  textColor: '#10162F',
  textInverseColor: '#ffffff',

  // Typography
  fontBase: '"Inter", sans-serif',
  fontCode: "monospace",

  // Toolbar default and active colors
  barTextColor: '#9E9E9E',
  barSelectedColor: '#585C6D',
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#10162F',
  inputTextColor: '#10162F',
  inputBorderRadius: 2,
});