import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
    ERROR = 'error',
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

export enum TextSize {
    M = 'size_m',
    L ='size_l',
    XL ='size_xl',
}

interface TextProps {
    className?: string;
    text: string,
    theme?: TextTheme,
    size?: TextSize
}

export const Text = (props: TextProps) => {
    const {
        className,
        text,
        theme = TextTheme.SECONDARY,
        size = TextSize.M,
    } = props;

    const mods = { [cls[theme]]: true, [cls[size]]: true };

    return (
        <p className={classNames(cls.Text, mods, [className])}>
            {text}
        </p>
    );
};
