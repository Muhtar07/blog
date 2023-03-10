import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { MyButton, ButtonTheme, ButtonSize } from 'shared/ui/MyButton/MyButton';
import { SidebarItem } from 'widgets/Sidebar/ui/SidebarItem/SidebarItem';
import { SideBarItemsList } from 'widgets/Sidebar/model/items';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const toggle = () => {
        setCollapsed((prev) => !prev);
    };

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
                {
                    SideBarItemsList.map((item) => <SidebarItem item={item} collapsed={collapsed} key={item.path} />)
                }
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
});
