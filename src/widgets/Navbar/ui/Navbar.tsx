import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.linksContainer}>
                <AppLink to="/">
                    {t('Главная страница')}
                </AppLink>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <AppLink to="/about">
                    {t('О нас')}
                </AppLink>
            </div>
        </div>
    );
};
