import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AppLink, AppLinkTheme } from './AppLink';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
        children: 'Ссылка',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const PRIMARY = Template.bind({});
PRIMARY.args = {
    theme: AppLinkTheme.PRIMARY,
};

export const SECONDARY = Template.bind({});
SECONDARY.args = {
    theme: AppLinkTheme.SECONDARY,

};

export const RED = Template.bind({});
RED.args = {
    theme: AppLinkTheme.RED,

};
