import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import AddNewCommentForArticle from './AddNewCommentForArticle';

export default {
    title: 'features/AddNewCommentForArticle',
    component: AddNewCommentForArticle,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AddNewCommentForArticle>;

const Template: ComponentStory<typeof AddNewCommentForArticle> = () => <AddNewCommentForArticle />;

export const Light = Template.bind({});

Light.decorators = [StoreDecorator({
    addNewCommentForArticle: {
        text: 'comment',
    },
})];

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [StoreDecorator({
    addNewCommentForArticle: {
        isLoading: false,
        error: '',
    },
}),
ThemeDecorator(Theme.DARK),
];

export const IsLoading = Template.bind({});

IsLoading.decorators = [StoreDecorator({
    addNewCommentForArticle: {
        isLoading: true,
    },
}),
ThemeDecorator(Theme.DARK),
];

export const Error = Template.bind({});

Error.decorators = [StoreDecorator({
    addNewCommentForArticle: {
        error: 'SERVER ERROR',
    },
}),
ThemeDecorator(Theme.DARK),
];
