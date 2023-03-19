import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, { memo } from 'react';
import cls from './Icon.module.scss';

interface IconProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>
    width: number;
    height: number;
    inverted?: boolean;
    stroke?: boolean;
    fillNone?: boolean
}

export const Icon = memo((props: IconProps) => {
    const {
        className,
        Svg,
        width,
        height,
        inverted,
        stroke,
        fillNone,
    } = props;

    const mods: Mods = { [cls.inverted]: inverted, [cls.stroke]: stroke, [cls.fillNone]: fillNone };

    return (
        <Svg width={width} height={height} className={classNames(cls.Icon, mods, [className])} />
    );
});
