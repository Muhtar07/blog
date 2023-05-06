import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';

export enum TextTheme {
    ERROR = 'error',
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    INVERTED = 'inverted'
}

export enum TextSize {
    S = 'size_s',
    M ='size_m',
    L ='size_l',
}

export enum TextAlign {
    CENTER = 'center',
    LEFT ='left',
    RIGHT ='right',
}

interface TextProps {
    className?: string;
    text?: string,
    title?: string,
    theme?: TextTheme,
    size?: TextSize
    textAlign?: TextAlign
}

type HeaderTagType = 'h1' | 'h2' | 'h3'

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    [TextSize.L]: 'h1',
    [TextSize.M]: 'h2',
    [TextSize.S]: 'h3',
};

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        theme = TextTheme.SECONDARY,
        size = TextSize.M,
        textAlign = TextAlign.LEFT,
    } = props;

    const mods:Mods = { [cls[theme]]: true, [cls[size]]: true };

    const HeaderTeg = mapSizeToHeaderTag[size];

    return (
        <div className={classNames(cls.Text, mods, [className, cls[textAlign]])}>
            { title && <HeaderTeg className={cls.title}>{title}</HeaderTeg>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
