import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleList } from 'entities/Article';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../../model/selectors/getArticlesData';
import { articlesInfiniteListReducer, getArticles } from '../../model/slices/articlesInfiniteListSlice';

interface ArticleInfiniteListProps {
    className?: string;
}
const reducers: ReducersList = {
    articleInfiniteList: articlesInfiniteListReducer,
};
export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
    const { className } = props;

    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <ArticleList
                view={view}
                isLoading={isLoading}
                error={error}
                articles={articles}
                className={classNames('', {}, [className])}
            />
        </DynamicModuleLoader>
    );
});
