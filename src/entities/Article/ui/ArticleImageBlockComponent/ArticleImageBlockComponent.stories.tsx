import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import Src from 'shared/assets/tests/lll.jpg';
import { ArticleImageBlockComponent } from './ArticleImageBlockComponent';

export default {
    title: 'entities/Article/ArticleImageBlockComponent',
    component: ArticleImageBlockComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleImageBlockComponent>;

const Template: ComponentStory<typeof ArticleImageBlockComponent> = (args) => <ArticleImageBlockComponent {...args} />;

export const Light = Template.bind({});
Light.args = {
    title: 'описание',
    src: Src,
};

export const Dark = Template.bind({});
Dark.args = {
    title: 'описание',
    src: Src,
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
