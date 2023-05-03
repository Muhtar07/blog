import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { MyButton } from '../MyButton/MyButton';
import { Dropdown } from './Dropdown';

export default {
    title: 'shared/Dropdown',
    component: Dropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Light = Template.bind({});
Light.args = {
    items: [
        {
            content: 'first',
        },
        {
            content: 'first',
        },
        {
            content: 'first',
        },
    ],
    trigger: <MyButton>Спарта</MyButton>,
};

export const Dark = Template.bind({});
Dark.args = {
    items: [
        {
            content: 'first',
        },
        {
            content: 'first',
        },
        {
            content: 'first',
        },
    ],
    trigger: <MyButton>Спарта</MyButton>,
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
