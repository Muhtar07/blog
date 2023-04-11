import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { memo, useRef } from 'react';
import {
    Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { ArticleItemSkeleton } from 'entities/Article/ui/ArticleItemSkeleton/ArticleItemSkeleton';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles?: Article[];
    view?: ArticleView;
    isLoading?: boolean;
    error?: string;
}

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        view = ArticleView.SMALL,
        isLoading,
        error,
    } = props;

    const skeletonArray = Array(view === ArticleView.BIG ? 4 : 9).fill(0);

    const mods:Mods = {
        [cls.small]: view === ArticleView.SMALL,
    };

    if (error) {
        return (
            <Text
                text={error}
                textAlign={TextAlign.CENTER}
                size={TextSize.XL}
                theme={TextTheme.ERROR}
            />
        );
    }

    return (
        <div
            className={classNames('', mods, [className])}
        >
            {articles?.length ? articles.map((article) => (
                <ArticleListItem
                    view={view}
                    article={article}
                    key={article.id}
                />
            )) : null}
            {isLoading && (
                skeletonArray.map((_, index) => (
                    <ArticleItemSkeleton view={view} key={index} />
                ))
            )}
        </div>
    );
});
