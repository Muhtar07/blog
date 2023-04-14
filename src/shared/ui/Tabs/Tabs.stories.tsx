import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { action } from '@storybook/addon-actions';
import { Tabs } from './Tabs';

export default {
    title: 'shared/Tabs',
    component: Tabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Light = Template.bind({});
Light.args = {
    tabs: [
        {
            value: 'IT',
            content: 'IT',
        },
        {
            value: 'IT1',
            content: 'IT1',
        },
        {
            value: 'IT2',
            content: 'IT2',
        },
    ],
    value: 'IT2',
    onTabClick: action('onTabClick'),
};

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
