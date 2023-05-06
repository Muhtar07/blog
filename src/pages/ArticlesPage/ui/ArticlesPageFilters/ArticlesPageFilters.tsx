import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { ArticlesSwitcherView } from 'features/ArticlesSwitcherView';
import {
    ArticleSortField, ArticleSortSelector, ArticlesTypeTabs, ArticleType, ArticleView,
} from 'entities/Article';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { MyInput } from 'shared/ui/MyInput/MyInput';
import { Card } from 'shared/ui/Card/Card';
import { SortOrder } from 'shared/types';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { TabItem } from 'shared/ui/Tabs/Tabs';
import { HStack, VStack } from 'shared/ui/Stack';
import {
    articlesInfiniteListActions,
    fetchArticlesPageData,
    getArticlesOrder,
    getArticlesPageView,
    getArticlesSearch,
    getArticlesSort,
    getArticlesType,
} from 'features/ArticleInfiniteList';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPageFilters.module.scss';

interface ArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
    const { t } = useTranslation();

    const view = useSelector(getArticlesPageView);
    const order = useSelector(getArticlesOrder);
    const sort = useSelector(getArticlesSort);
    const search = useSelector(getArticlesSearch);
    const type = useSelector(getArticlesType);

    const dispatch = useAppDispatch();

    const {
        className,
    } = props;

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesPageData({ replace: true }));
    }, [dispatch]);

    const debounceFetchData = useDebounce(fetchData, 500);

    const onChangeSort = useCallback((newSort: ArticleSortField) => {
        dispatch(articlesInfiniteListActions.setSort(newSort));
        dispatch(articlesInfiniteListActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeOrder = useCallback((newOrder: SortOrder) => {
        dispatch(articlesInfiniteListActions.setOrder(newOrder));
        dispatch(articlesInfiniteListActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeSearch = useCallback((search: string) => {
        dispatch(articlesInfiniteListActions.setSearch(search));
        dispatch(articlesInfiniteListActions.setPage(1));
        debounceFetchData();
    }, [debounceFetchData, dispatch]);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesInfiniteListActions.setView(view || ArticleView.SMALL));
    }, [dispatch]);

    const onChangeType = useCallback((tab: TabItem) => {
        dispatch(articlesInfiniteListActions.setType(tab.value as ArticleType));
        dispatch(articlesInfiniteListActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    return (
        <VStack max gap="16" className={classNames('', {}, [className])}>
            <HStack max justify="between">
                <ArticleSortSelector
                    order={order}
                    sort={sort}
                    onChangeSort={onChangeSort}
                    onChangeOrder={onChangeOrder}
                />
                <ArticlesSwitcherView
                    view={view || ArticleView.SMALL}
                    handlerClick={onChangeView}
                />
            </HStack>
            <Card className={cls.search}>
                <MyInput
                    placeholder={t('Поиск')}
                    value={search}
                    onChange={onChangeSearch}
                    className={cls.input}
                />
            </Card>
            <ArticlesTypeTabs
                type={type}
                onChangeType={onChangeType}
                className={cls.tabs}
            />
        </VStack>
    );
});
