import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './MyButton.module.scss';

export enum ButtonTheme {
    CLEAR='clear',
    CLEAR_INVERTED = 'clear_inverted',
    OUTLINE = 'outline',
    OUTLINE_INVERTED = 'outline_inverted',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'background_inverted'
}

export enum ButtonSize {
    M = 'size_m',
    L ='size_l',
    XL ='size_xl',
}

interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ButtonTheme,
    square?: boolean,
    size?: ButtonSize
    disabled?:boolean
}

export const MyButton: FC<MyButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        square,
        size = ButtonSize.M,
        disabled = false,
        ...otherProps
    } = props;

    const mods = {
        [cls.square]: square, [cls[theme]]: true, [cls[size]]: true, [cls.disabled]: disabled,
    };

    return (
        <button
            className={classNames(cls.MyButton, mods, [className])}
            type="button"
            {...otherProps}
            disabled={disabled}
        >
            {children}
        </button>
    );
};
