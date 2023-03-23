import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleView } from '../../model/types/article';
import { ArticleItemSkeleton } from './ArticleItemSkeleton';

export default {
    title: 'entities/Article/ArticleItemSkeleton',
    component: ArticleItemSkeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleItemSkeleton>;

const Template: ComponentStory<typeof ArticleItemSkeleton> = (args) => <ArticleItemSkeleton {...args} />;

export const LightSmall = Template.bind({});
LightSmall.args = {
    view: ArticleView.SMALL,
};

export const LightBig = Template.bind({});
LightBig.args = {
    view: ArticleView.BIG,
};

export const DarkSmall = Template.bind({});
DarkSmall.args = {
    view: ArticleView.SMALL,
};

DarkSmall.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkBig = Template.bind({});
DarkBig.args = {
    view: ArticleView.BIG,
};

DarkBig.decorators = [ThemeDecorator(Theme.DARK)];
