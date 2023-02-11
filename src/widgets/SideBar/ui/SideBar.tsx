import {classNames} from "shared/lib/classNames/classNames";
import cls from './SideBar.module.scss'
import {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LanguageSwitcher} from "widgets/LanguageSwitcher";

interface SideBarProps {
    className?: string;
}

export const SideBar = ({className}: SideBarProps) => {

    const [collapsed, setCollapsed] = useState(false);
    const toggle = () => {
        setCollapsed(prev => !prev)
    }
    return (
        <div className={classNames(cls.SideBar, {[cls.collapsed]:collapsed}, [className])}>
            <button onClick={toggle}>
                toggle
            </button>
            <div className={cls.switcher}>
                <ThemeSwitcher/>
                <LanguageSwitcher/>
            </div>
        </div>
    );
};
