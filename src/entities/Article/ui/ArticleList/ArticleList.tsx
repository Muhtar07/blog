import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles?: Article[];
    view: ArticleView;
    isLoading: boolean;
}

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        view,
        isLoading,
    } = props;

    const mods:Mods = {
        [cls.small]: view === ArticleView.SMALL,

    };

    return (
        <div className={classNames('', mods, [className])}>
            {articles?.length && articles.map((article) => (
                <ArticleListItem isLoading={isLoading} article={article} key={article.id} view={view} />
            ))}
        </div>
    );
});
