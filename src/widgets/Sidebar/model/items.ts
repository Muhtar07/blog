import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about-icon.svg';
import MainIcon from 'shared/assets/icons/main-icon.svg';
import ProfileIcon from 'shared/assets/icons/profile2020.svg';
import ArticleIcon from 'shared/assets/icons/artcile.svg';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

export interface SidebarItemType {
    path: string,
    text: string
    IconLink: React.VFC <React.SVGProps <SVGSVGElement>>;
    authOnly?:boolean
}

export const SideBarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        IconLink: MainIcon,
        text: 'Главная страница',
    },
    {
        path: RoutePath.about,
        IconLink: AboutIcon,
        text: 'О нас',
    },
    {
        path: RoutePath.profile,
        IconLink: ProfileIcon,
        text: 'Профиль пользователя',
        authOnly: true,
    },
    {
        path: RoutePath.articles,
        IconLink: ArticleIcon,
        text: 'Статьи',
        authOnly: true,
    },
];
