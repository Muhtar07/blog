import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { Icon } from 'shared/ui/Icon/Icon';
import { SidebarItemType } from '../../model/types/sidebarItems';
import cls from './SidebarItem.module.scss';

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
            IconLink,
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
                Svg={IconLink}
                height={32}
                width={32}
                className={cls.icon}
                inverted
            />
            <span
                className={cls.link}

            >
                {t(text) }
            </span>
        </AppLink>
    );
});
