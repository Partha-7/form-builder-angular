import { Meta, Story } from "@storybook/angular";
import ButtonComponent from "../../stories/button.component";


export default {
    title: 'Button',
    component: ButtonComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template:any= (args: ButtonComponent) => ({
    component: ButtonComponent,
    props: args,
});

export const Default = Template.bind({});
Default.args = {
    label: 'Default',
};

export const Hover = Template.bind({});
Hover.args = {
    label: 'Hover',
    isHover: true,
};

export const Active = Template.bind({});
Active.args = {
    label: 'Active',
    isActive: true,
};