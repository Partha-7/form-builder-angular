import type { Meta, StoryObj } from '@storybook/angular';
import Button from './button.component';
import SidebarComponent from './sidebar.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<Button> = {
  title: 'Sidebar',
  component: SidebarComponent,
  tags: ['autodocs'],
  render: (args: Button) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<Button>;
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Sidebar',
    backgroundColor:'red'
  },
};

