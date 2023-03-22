import { createSelector } from '@reduxjs/toolkit';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main-icon.svg';
import AboutIcon from 'shared/assets/icons/about-icon.svg';
import ProfileIcon from 'shared/assets/icons/profile2020.svg';
import ArticleIcon from 'shared/assets/icons/artcile.svg';
import { getUserAuthData } from 'entities/User';
import { SidebarItemType } from '../types/sidebarItems';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [{
            path: RoutePath.main,
            IconLink: MainIcon,
            text: 'Главная страница',
        },
        {
            path: RoutePath.about,
            IconLink: AboutIcon,
            text: 'О нас',
        }];

        if (userData) {
            sidebarItemsList.push(
                {
                    path: RoutePath.profile + userData.id,
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
            );
        }

        return sidebarItemsList;
    },
);
