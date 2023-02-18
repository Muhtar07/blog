import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { MyButton, ThemeButton } from './MyButton';

export default {
    title: 'shared/MyButton',
    component: MyButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof MyButton>;

const Template: ComponentStory<typeof MyButton> = (args) => <MyButton {...args} />;

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
    children: 'TEST',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'TEST',
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ClearLight = Template.bind({});
ClearLight.args = {
    children: 'TEST',
    theme: ThemeButton.CLEAR,
};

export const ClearDark = Template.bind({});
ClearDark.args = {
    children: 'TEST',
    theme: ThemeButton.CLEAR,
};

ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineLight = Template.bind({});
OutlineLight.args = {
    children: 'TEST',
    theme: ThemeButton.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'TEST',
    theme: ThemeButton.OUTLINE,
};

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
