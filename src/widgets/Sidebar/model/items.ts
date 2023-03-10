import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about-icon.svg';
import MainIcon from 'shared/assets/icons/main-icon.svg';
import ProfileIcon from 'shared/assets/icons/profile2020.svg';

export interface SidebarItemType {
    path: string,
    text: string
    Icon: React.VFC <React.SVGProps <SVGSVGElement>>;
}

export const SideBarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        Icon: MainIcon,
        text: 'Главная страница',
    },
    {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'О нас',
    },
    {
        path: RoutePath.profile,
        Icon: ProfileIcon,
        text: 'Профиль пользователя',
    },
];
