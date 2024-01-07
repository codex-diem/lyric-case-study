import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button.atom';
import { PlayIcon } from '../Icons/PlayIcon';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    leftSection: {control: false},
    rightSection: {control: false},
    // size: {control: "unit"}
   
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    type: "primary",
    label: 'Button',
    leftSection:  <PlayIcon size={16} />,
    rightSection:  <PlayIcon size={16} />,
    color: "lyricBlue"
  },
};

export const Secondary: Story = {
  args: {
    type: "secondary",
    label: 'Button',
    leftSection: <PlayIcon size={16}/>,
    rightSection:  <PlayIcon size={16}/>,
    color: "lyricBlue"
  },
};

export const Tertiary: Story = {
  args: {
    type: "tertiary",
    label: 'Button',
    leftSection:  <PlayIcon size={16} />,
    rightSection:  <PlayIcon size={16}/>,
    color: "lyricBlue"
  }
};

export const Link: Story = {
  args: {
    type: "link",
    label: 'Button',
    leftSection:  <PlayIcon size={16}/>,
    rightSection:  <PlayIcon size={16}/>,
    color: "lyricBlue"
  },
};

export const Large: Story = {
  args: {
    size: 'md',
    label: 'Button',
    leftSection:  <PlayIcon size={16}/>,
    rightSection:  <PlayIcon size={16}/>,
  },
};

export const Medium: Story = {
  args: {
    size: 'sm',
    label: 'Button',
    leftSection:  <PlayIcon size={12}/>,
    rightSection:  <PlayIcon size={12}/>,
  },
};

export const Small: Story = {
  args: {
    size: 'xs',
    label: 'Button',
    leftSection:  <PlayIcon size={12}/>,
    rightSection:  <PlayIcon size={12}/>,
  },
};
