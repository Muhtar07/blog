import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { MyButton, ThemeButton } from 'shared/ui/MyButton/MyButton';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <MyButton
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
            theme={ThemeButton.CLEAR}
        >
            {
                theme === Theme.LIGHT
                    ? <LightIcon />
                    : <DarkIcon />
            }

        </MyButton>
    );
};
