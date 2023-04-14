import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticlesTypeTabs } from './ArticlesTypeTabs';

export default {
    title: 'entities/Article/ArticlesTypeTabs',
    component: ArticlesTypeTabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesTypeTabs>;

const Template: ComponentStory<typeof ArticlesTypeTabs> = (args) => <ArticlesTypeTabs {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
