import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo, useMemo, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { MyButton, ButtonTheme, ButtonSize } from 'shared/ui/MyButton/MyButton';
import { useSelector } from 'react-redux';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const toggle = () => {
        setCollapsed((prev) => !prev);
    };
    const sidebarItemsList = useSelector(getSidebarItems);

    const itemsList = useMemo(() => sidebarItemsList.map((item) => (
        <SidebarItem
            item={item}
            collapsed={collapsed}
            key={item.path}
        />
    )), [collapsed, sidebarItemsList]);

    return (
        <menu
            className={classNames(
                cls.Sidebar,
                { [cls.collapsed]: collapsed },
                [className],
            )}
            data-testid="sidebar"
        >
            <div className={cls.items}>
                {itemsList}
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
        </menu>
    );
});
