import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
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

export enum TextAlign {
    CENTER = 'center',
    LEFT ='left',
    RIGHT ='right',
}

interface TextProps {
    className?: string;
    text: string,
    theme?: TextTheme,
    size?: TextSize
    textAlign?: TextAlign
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        theme = TextTheme.SECONDARY,
        size = TextSize.M,
        textAlign = TextAlign.LEFT,
    } = props;

    const mods:Mods = { [cls[theme]]: true, [cls[size]]: true };

    return (
        <p className={classNames(cls.Text, mods, [className, cls[textAlign]])}>
            {text}
        </p>
    );
});
