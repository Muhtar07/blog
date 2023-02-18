import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
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
            <button
                data-testid="sidebar-toggle"
                onClick={toggle}
                type="button"
            >
                {t('Переключение')}
            </button>
            <div className={cls.switcher}>
                <ThemeSwitcher />
                <LanguageSwitcher />
            </div>
        </div>
    );
};
