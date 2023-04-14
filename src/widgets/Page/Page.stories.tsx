import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Page } from './Page';

export default {
    title: 'shared/Page',
    component: Page,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const Light = Template.bind({});
Light.args = {
    children: (
        <div>
            Hello world!!
        </div>
    ),
};

export const Dark = Template.bind({});
Dark.args = {
    children: (
        <div>
            Hello world!!
        </div>
    ),
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
