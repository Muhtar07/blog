import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main-icon.svg';
import { SidebarItem } from './SidebarItem';

export default {
    title: 'widgets/SidebarItem',
    component: SidebarItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SidebarItem>;

const Template: ComponentStory<typeof SidebarItem> = (args) => <SidebarItem {...args} />;

export const Light = Template.bind({});
Light.args = {
    collapsed: false,
    item: {
        path: RoutePath.main,
        IconLink: MainIcon,
        text: 'Главная страница',
    },
};

Light.decorators = [StoreDecorator({
    user: {},
})];

export const LightCollapsed = Template.bind({});
LightCollapsed.args = {
    collapsed: true,
    item: {
        path: RoutePath.main,
        IconLink: MainIcon,
        text: 'Главная страница',
    },
};

LightCollapsed.decorators = [StoreDecorator({
    user: {},
})];

export const Dark = Template.bind({});

Dark.args = {
    collapsed: true,
    item: {
        path: RoutePath.main,
        IconLink: MainIcon,
        text: 'Главная страница',
    },
};

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    user: {},
})];
