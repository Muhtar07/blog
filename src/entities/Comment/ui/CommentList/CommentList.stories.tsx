import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import AvatarUser from 'shared/assets/tests/avatar.png';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { IComment } from '../../model/types/comment';
import { CommentList } from './CommentList';

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const comments: IComment[] = [
    {
        id: '1',
        user: {
            id: '1',
            username: 'user',
            avatar: AvatarUser,
        },
        text: '1 коментарий',
    },
    {
        id: '1',
        user: {
            id: '1',
            username: 'user',
            avatar: AvatarUser,
        },
        text: '2 коментарий',
    },
    {
        id: '3',
        user: {
            id: '1',
            username: 'user',
            avatar: AvatarUser,
        },
        text: '3 коментарий',
    },
];

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Light = Template.bind({});
Light.args = {
    comments,
};

export const Dark = Template.bind({});
Dark.args = {
    comments,
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const LightIsLoading = Template.bind({});
LightIsLoading.args = {
    isLoading: true,
};

export const DarkIsLoading = Template.bind({});
DarkIsLoading.args = {
    isLoading: true,
};

DarkIsLoading.decorators = [ThemeDecorator(Theme.DARK)];
