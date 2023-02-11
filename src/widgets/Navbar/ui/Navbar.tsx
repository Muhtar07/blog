import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import {AppLink} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {useTranslation} from "react-i18next";
interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    const {t} = useTranslation()

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.linksContainer}>
                <AppLink to={'/'}>
                    {t('Главная страница')}
                </AppLink>
                <AppLink to={'/about'}>
                    {t('О нас')}
                </AppLink>
            </div>
        </div>
    );
};


