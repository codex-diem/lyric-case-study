import {  MantineColorsTuple, createTheme } from '@mantine/core';
import buttonVariantColorResolver from './theme-overrides/buttonColorResolver';


const lyricBlue: MantineColorsTuple = [
  '#e1f9ff',
  '#cdedff',
  '#9cd8fe',
  '#62bcf3',
  '#3eb0fa',
  '#24a4f9',
  '#0a9dfa',
  '#45A6FB',
  '#007ac9',
  '#006ab3',
  '#62BCF58F',
  '#62BCF51A',
  '#0A9DFA1A'
];

const secondary: MantineColorsTuple = [
  "#D9D6F2",
  "#B7B0EE",
  "#9387F2",
  "#6A57FF",
  "#5B49EB",
  "#5140D5",
  "#4B3DBC",
  "#4D429E",
  "#4B4486",
  "#484373",
  '#6A57FF8F',
  '#6A57FF1A',
  '#4B3DBC1A'
]

const background: MantineColorsTuple = [


  "#F5F7FA",
  "#F5F7FA",
  "#F5F7FA",
  "#F5F7FA",
  "#F5F7FA",
  "#F5F7FA",
  "#F5F7FA",
  "#F5F7FA",
  "#F5F7FA",
  "#F5F7FA",
]

const text: MantineColorsTuple = [

  "#292F3B",
  "#292F3B",
  "#292F3B",
  "#292F3B",
  "#292F3B",
  "#292F3B",
  "#292F3B",
  "#292F3B",
  "#292F3B",
  "#292F3B"
]


export const theme = createTheme({
  components: {
    // ActionIcon: ActionIcon.extend({
    //   classNames: IconButtonClasses,
    // }),
    // Button: Button.extend({
    //   classNames: ButtonClasses
    // }),
  },

  scale: 1,
  radius: {
    xs: '6px',
    sm: '8px',
    md: '10px',
  },
  primaryColor: 'lyricBlue',
  colors: {
    lyricBlue,
    secondary,
    background, text
  },
  fontFamily: 'Inter, sans-serif',
  primaryShade: { light: 6, dark: 6 },
  variantColorResolver: buttonVariantColorResolver,
});
