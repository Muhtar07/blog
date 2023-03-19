import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Skeleton } from './Skeleton';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Light = Template.bind({});
Light.args = {
    width: 100,
    height: 200,
    border: '50%',
};

export const Dark = Template.bind({});
Dark.args = {
    width: 100,
    height: 100,
    border: '50%',
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const LightRectangle = Template.bind({});
LightRectangle.args = {
    width: 500,
    height: 200,
};

export const DarkRectangle = Template.bind({});
DarkRectangle.args = {
    width: 500,
    height: 100,
};

DarkRectangle.decorators = [ThemeDecorator(Theme.DARK)];

export const PinkRectangle = Template.bind({});
PinkRectangle.args = {
    width: 500,
    height: 100,
};

PinkRectangle.decorators = [ThemeDecorator(Theme.PINK)];
