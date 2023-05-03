import { classNames } from 'shared/lib/classNames/classNames';
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import cls from './Flex.module.scss';

export type FLexJustify= 'start' | 'center'| 'end' | 'between';
export type FLexAlign = 'start' | 'center'| 'end';
export type FlexDirection = 'row'| 'column';
export type FlexGap = '2' | '4' | '6' | '8' | '10' | '12' | '14' | '16' | '32';

const justifyClasses: Record<FLexJustify, string> = {
    start: cls.justifyStart,
    center: cls.justifyCenter,
    end: cls.justifyEnd,
    between: cls.justifyBetween,
};

const alignClasses: Record<FLexAlign, string> = {
    start: cls.alignStart,
    center: cls.alignCenter,
    end: cls.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
    row: cls.directionRow,
    column: cls.directionColumn,
};
const gapClasses: Record<FlexGap, string> = {
    2: cls.gap2,
    4: cls.gap4,
    6: cls.gap6,
    8: cls.gap8,
    10: cls.gap10,
    12: cls.gap12,
    14: cls.gap14,
    16: cls.gap16,
    32: cls.gap32,
};

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface FlexProps extends DivProps {
    className?: string;
    children: ReactNode;
    justify?: FLexJustify;
    align?: FLexAlign;
    direction: FlexDirection;
    gap?: FlexGap;
    max?:boolean;

}

export const Flex = (props: FlexProps) => {
    const {
        className,
        children,
        justify = 'start',
        align = 'center',
        gap,
        direction,
        max,
        role = 'div',
    } = props;

    const classes = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gap && gapClasses[gap],

    ];
    const mods = { [cls.max]: max };

    return (
        <div role={role} className={classNames(cls.Flex, mods, classes)}>
            {children}
        </div>
    );
};
