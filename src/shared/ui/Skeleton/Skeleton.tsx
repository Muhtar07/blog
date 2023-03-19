import { classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties, memo, useMemo } from 'react';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    width: string | number;
    height: string | number;
    border?: string;
}

export const Skeleton = memo((props: SkeletonProps) => {
    const {
        className,
        width,
        height,
        border,
    } = props;

    const styles = useMemo<CSSProperties>(() => ({
        width,
        height,
        borderRadius: border,
    }), [width, height, border]);

    return (
        <div style={styles} className={classNames(cls.Skeleton, {}, [className])} />
    );
});
