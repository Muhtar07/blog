import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './MyButton.module.scss';

export enum ThemeButton {
    CLEAR='clear',
    OUTLINE = 'outline'
}

interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton,
}

export const MyButton: FC<MyButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        ...otherProps

    } = props;
    return (
        <button
            className={classNames(cls.MyButton, {}, [className, cls[theme]])}
            type="button"
            {...otherProps}
        >
            {children}
        </button>
    );
};
