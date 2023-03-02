import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { MyButton, ButtonTheme, ButtonSize } from 'shared/ui/MyButton/MyButton';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about-icon.svg';
import MainIcon from 'shared/assets/icons/main-icon.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const toggle = () => {
        setCollapsed((prev) => !prev);
    };
    const { t } = useTranslation();
    return (
        <div
            className={classNames(
                cls.Sidebar,
                { [cls.collapsed]: collapsed },
                [className],
            )}
            data-testid="sidebar"
        >
            <div className={cls.items}>
                <AppLink
                    to={RoutePath.main}
                    className={cls.item}
                >
                    <MainIcon
                        className={cls.icon}
                    />
                    <span
                        className={cls.link}

                    >
                        {t('Главная страница') }
                    </span>
                </AppLink>
                <AppLink
                    to={RoutePath.about}
                    className={cls.item}
                >
                    <AboutIcon
                        className={cls.icon}
                    />
                    <span
                        className={cls.link}
                    >
                        {t('О нас')}
                    </span>
                </AppLink>
            </div>
            <MyButton
                className={classNames(cls.collapsedBtn)}
                data-testid="sidebar-toggle"
                onClick={toggle}
                type="button"
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </MyButton>
            <div className={classNames(cls.switcher, { [cls.collapsed]: collapsed })}>
                <ThemeSwitcher />
                <LanguageSwitcher className={cls.lang} short={collapsed} />
            </div>
        </div>
    );
};
