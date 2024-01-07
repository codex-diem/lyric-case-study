import type { Meta, StoryObj } from '@storybook/react';

import { IconButton } from "./IconButton.atom"
import { PlayIcon } from '../Icons/PlayIcon';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Atoms/IconButton',
  component: IconButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    children: {control: false}
    // size: {control: "unit"}
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    type: "primary",
    children: <PlayIcon  stroke="1.5px"/>,
  },
};

export const Secondary: Story = {
  args: {
    type: "secondary",
    children: <PlayIcon />,
  },
};

export const Tertiary: Story = {
  args: {
    type: "tertiary",
    children: <PlayIcon />,
  }
};



// export const Large: Story = {
//   args: {
//     size: 'md',
//     label: 'Button',
//   },
// };

// export const Medium: Story = {
//   args: {
//     size: 'sm',
//     label: 'Button',
//   },
// };

// export const Small: Story = {
//   args: {
//     size: 'xs',
//     label: 'Button',
//   },
// };
