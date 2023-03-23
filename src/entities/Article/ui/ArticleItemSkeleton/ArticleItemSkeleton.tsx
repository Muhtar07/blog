import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { ArticleView } from '../../model/types/article';
import cls from './ArticleItemSkeleton.module.scss';

interface ArticleItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

const skeletonArray = Array(6).fill(0);

export const ArticleItemSkeleton = memo((props: ArticleItemSkeletonProps) => {
    const {
        className,
        view,
    } = props;

    if (view === ArticleView.SMALL) {
        return (
            <div className={classNames(cls.ArticleItemSkeleton, {}, [className, cls.small])}>
                {
                    skeletonArray.map((_, index) => (
                        <div className={cls.card} key={index}>
                            <Skeleton width={320} height={400} />
                            <div className={cls.meta}>
                                <Skeleton width={150} height={16} />
                                <Skeleton width={100} height={16} />
                            </div>
                            <Skeleton className={cls.title} width={200} height={24} />
                        </div>
                    ))
                }
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleItemSkeleton, {}, [className, cls.big])}>

            {skeletonArray.map((_, index) => (
                <div className={cls.card} key={index}>
                    <div className={cls.headerArticleSkeleton}>
                        <div className={cls.user}>
                            <Skeleton width={30} height={30} border="50%" />
                            <Skeleton className={cls.username} width={100} height={16} />
                        </div>
                        <Skeleton width={80} height={16} />
                    </div>
                    <Skeleton className={cls.title} width={320} height={14} />
                    <Skeleton className={cls.title} width={320} height={14} />
                    <Skeleton height={250} width="100%" />
                    <div className={cls.footer}>
                        <Skeleton width={100} height={16} />
                        <div className={cls.view}>
                            <Skeleton width={80} height={16} />
                            <Skeleton className={cls.eye} width={20} height={20} border="50%" />
                        </div>
                    </div>
                </div>
            ))}
        </div>

    );
});
