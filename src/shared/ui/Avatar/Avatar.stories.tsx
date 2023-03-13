import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import AvatarPng from './avatar.png';

import { Avatar } from './Avatar';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const BigSize = Template.bind({

});
BigSize.args = {
    alt: 'не удалось загрузить аватар',
    src: AvatarPng,
    size: 300,

};

export const SmallSize = Template.bind({

});
SmallSize.args = {
    alt: 'не удалось загрузить аватар',
    src: AvatarPng,
    size: 50,
};

export const NoSrc = Template.bind({

});
NoSrc.args = {
    alt: 'не удалось загрузить аватар',
    size: 50,
};
