import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { MyButton, ButtonTheme, ButtonSize } from './MyButton';

export default {
    title: 'shared/MyButton',
    component: MyButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof MyButton>;

const Template: ComponentStory<typeof MyButton> = (args) => <MyButton {...args} />;

export const PrimaryLight = Template.bind({

});
PrimaryLight.args = {
    children: 'TEST',

};

export const PrimaryDark = Template.bind({

});
PrimaryDark.args = {
    children: 'TEST',

};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ClearLight = Template.bind({});
ClearLight.args = {
    theme: ButtonTheme.CLEAR,
    children: 'TEST',

};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
    theme: ButtonTheme.CLEAR_INVERTED,
    children: 'TEST',

};

export const ClearDark = Template.bind({});
ClearDark.args = {
    theme: ButtonTheme.CLEAR,
    children: 'TEST',

};

ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineLight = Template.bind({});
OutlineLight.args = {
    theme: ButtonTheme.OUTLINE,
    children: 'TEST',

};

export const OutlineInverted = Template.bind({});
OutlineInverted.args = {
    theme: ButtonTheme.OUTLINE_INVERTED,
    children: 'TEST',

};

export const OutlineSizeM = Template.bind({});
OutlineSizeM.args = {
    theme: ButtonTheme.OUTLINE,
    children: 'TEST',
    size: ButtonSize.M,

};
export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    theme: ButtonTheme.OUTLINE,
    children: 'TEST',
    size: ButtonSize.L,

};
export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
    theme: ButtonTheme.OUTLINE,
    children: 'TEST',
    size: ButtonSize.XL,

};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    theme: ButtonTheme.OUTLINE,
    children: 'TEST',

};

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SquareSizeM = Template.bind({});
SquareSizeM.args = {
    size: ButtonSize.M,
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    children: '>',

};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
    size: ButtonSize.L,
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    children: '>',

};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
    size: ButtonSize.XL,
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    children: '>',

};

export const Background = Template.bind({});
Background.args = {
    theme: ButtonTheme.BACKGROUND,
    children: 'TEST',

};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    children: 'TEST',

};

export const Disabled = Template.bind({});
Disabled.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    children: 'TEST',
    disabled: true,

};
