import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleView } from 'entities/Article';
import { ArticlesSwitcherView } from './ArticlesSwitcherView';

export default {
    title: 'features/ArticlesSwitcherView',
    component: ArticlesSwitcherView,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesSwitcherView>;

const Template: ComponentStory<typeof ArticlesSwitcherView> = (args) => <ArticlesSwitcherView {...args} />;

export const Light = Template.bind({});
Light.args = {
    view: ArticleView.BIG,

};

export const Dark = Template.bind({});
Dark.args = {
    view: ArticleView.BIG,
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
