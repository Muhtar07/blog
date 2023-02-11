import {classNames} from "shared/lib/classNames/classNames";
import cls from './MyButton.module.scss'
import {ButtonHTMLAttributes, FC} from "react";

export enum ThemeButton {
    CLEAR='clear'
}

interface MyButtonProps extends  ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton,
}




export const MyButton: FC<MyButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        ...otherProps

    } = props
    return (
        <button
            className={classNames(cls.MyButton, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}

        </button>
    );
};
