import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import AvatarUser from 'shared/assets/tests/avatar.png';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { CommentCard } from './CommentCard';

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Light = Template.bind({});
Light.args = {
    comment: {
        id: '1',
        text: 'comment',
        user: {
            id: '1',
            username: 'user',
            avatar: AvatarUser,
        },
    },
};

export const Dark = Template.bind({});
Dark.args = {
    comment: {
        id: '1',
        text: 'comment',
        user: {
            id: '1',
            username: 'user',
            avatar: AvatarUser,
        },
    },
};

export const LightIsLoading = Template.bind({});
LightIsLoading.args = {
    isLoading: true,
};

export const DarkIsLoading = Template.bind({});
DarkIsLoading.args = {
    isLoading: true,
};

DarkIsLoading.decorators = [ThemeDecorator(Theme.DARK)];
