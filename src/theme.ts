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
  "#20262E",
  "#F5F7FA",
  "#F5F7FA",
  "#F5F7FA",
  "#F5F7FA",
  "#F5F7FA",
  "#F5F7FA",
  "#F5F7FA",
]

const text: MantineColorsTuple = [

  "#ffffff",
  "#292F3B",
  "#D7DADE",
  "#BABCBF",
  "#292F3B",
  "#292F3B",
  "#292F3B",
  "#292F3B",
  "#292F3B",
  "#292F3B"
]


export const theme = createTheme({
  components: {
  
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
    background, text,
    dark: [
      "#C9C9C9",
      "#B8B8B8",
      "#828282",
      "#696969",
      "#424242",
      "#3B3B3B",
      "#12151A",
      "#242424",
      "#1F1F1F",
      "#141414"
    ]
    
  },

  fontFamily: 'Inter, sans-serif',
  primaryShade: { light: 6, dark: 6 },
  variantColorResolver: buttonVariantColorResolver,
});
