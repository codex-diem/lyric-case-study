import type { Meta, StoryObj } from '@storybook/react';

import { Toast } from './Toast.atom';


const meta = {
  title: 'Atoms/Toast',
  component: Toast,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],

  argTypes: {

    details: {control: false}
   
   
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Success: Story = {
  args: {
    type: "success",
    title: 'Success',
    description: "Note run completed successfully!"
    
   
  },
};

export const Failure: Story = {
  args: {
    type: "failure",
    title: 'Failed',
    description: "Note run failed unfortunately!"
   

  },
};

export const Warning: Story = {
  args: {
    type: "warning",
    title: 'Warning',
    description: "Some Columns Unmapped"
    
    
  }
};

export const WithDetails: Story = {
    args: {
      type: "success",
      title: 'Success',
      description: "Note run completed successfully!",
      details: <><p style={{margin: "4px 0"}}>Some necessary inputs are not found, check inputs of the note</p><p style={{margin: "4px 0"}}><u>Learn More</u></p></>
      
    },
  };

