import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleTextBlockComponent } from './ArticleTextBlockComponent';

const props = {
    title: 'tittle',
    paragraphs: ['drink kkkkkkkkk', 'one day one more'],
};

export default {
    title: 'entities/Article/ArticleTextBlockComponent',
    component: ArticleTextBlockComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleTextBlockComponent>;

const Template: ComponentStory<typeof ArticleTextBlockComponent> = (args) => <ArticleTextBlockComponent {...args} />;

export const Light = Template.bind({});
Light.args = {
    ...props,
};

export const Dark = Template.bind({});
Dark.args = {
    ...props,
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
