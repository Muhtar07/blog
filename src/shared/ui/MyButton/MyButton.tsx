import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './MyButton.module.scss';

export enum ButtonTheme {
    CLEAR='clear',
    OUTLINE = 'outline',
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

}

export const MyButton: FC<MyButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        square,
        size = ButtonSize.M,
        ...otherProps
    } = props;

    const mods = { [cls.square]: square, [cls[theme]]: true, [cls[size]]: true };

    return (
        <button
            className={classNames(cls.MyButton, mods, [className])}
            type="button"
            {...otherProps}
        >
            {children}
        </button>
    );
};
