import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MyInput } from './MyInput';

export default {
    title: 'shared/MyInput',
    component: MyInput,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof MyInput>;

const Template: ComponentStory<typeof MyInput> = (args) => <MyInput {...args} />;

export const Primary = Template.bind({

});
Primary.args = {
    placeholder: 'введите текст',
    value: '12345',
};
