import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import cls from './SidebarItem.module.scss';
import { SidebarItemType } from '../../model/items';

interface SidebarItemProps {
    item: SidebarItemType,
    collapsed: boolean,
    className?: string
}

export const SidebarItem = memo((props: SidebarItemProps) => {
    const { t } = useTranslation();

    const isAuth = useSelector(getUserAuthData);

    const {
        item: {
            path,
            Icon,
            text,
            authOnly,
        },
        collapsed = false,
        className,
    } = props;

    const mods:Mods = {
        [cls.collapsed]: collapsed,
    };

    if (authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink
            to={path}
            className={classNames(cls.SidebarItem, mods, [className])}
        >
            <Icon
                className={cls.icon}
            />
            <span
                className={cls.link}

            >
                {t(text) }
            </span>
        </AppLink>
    );
});
