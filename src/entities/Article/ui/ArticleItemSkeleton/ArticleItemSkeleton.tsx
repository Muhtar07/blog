import { memo } from 'react';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Card } from 'shared/ui/Card/Card';
import { ArticleView } from '../../model/types/article';
import cls from './ArticleItemSkeleton.module.scss';

interface ArticleItemSkeletonProps {
    view: ArticleView;
}

export const ArticleItemSkeleton = memo((props: ArticleItemSkeletonProps) => {
    const {
        view,
    } = props;

    if (view === ArticleView.SMALL) {
        return (
            <Card className={cls.card}>
                <Skeleton width={300} height={320} />
                <div className={cls.meta}>
                    <Skeleton width={150} height={16} />
                    <Skeleton width={100} height={16} />
                </div>
                <Skeleton className={cls.title} width={200} height={24} />
            </Card>
        );
    }

    return (
        <Card className={`${cls.card} ${cls.big}`}>
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
        </Card>
    );
});
