import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { memo, useCallback, useMemo } from 'react';
import { ArticlesSwitcherView } from 'features/ArticlesSwitcherView';
import {
    ArticleSortField, ArticleSortSelector, ArticlesTypeTabs, ArticleType, ArticleView,
} from 'entities/Article';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { MyInput } from 'shared/ui/MyInput/MyInput';
import { Card } from 'shared/ui/Card/Card';
import { SortOrder } from 'shared/types';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { fetchArticlesPageData } from '../../../model/services/fetchArticlesPageData/fetchArticlesPageData';
import {
    getArticlesOrder,
    getArticlesPageView,
    getArticlesSearch,
    getArticlesSort,
    getArticlesType,
} from '../../../model/selectors/getArticlesData';
import { articlesPageActions } from '../../../model/slices/articlesPageSlice';
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
        dispatch(articlesPageActions.setSort(newSort));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeOrder = useCallback((newOrder: SortOrder) => {
        dispatch(articlesPageActions.setOrder(newOrder));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeSearch = useCallback((search: string) => {
        dispatch(articlesPageActions.setSearch(search));
        dispatch(articlesPageActions.setPage(1));
        debounceFetchData();
    }, [debounceFetchData, dispatch]);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view || ArticleView.SMALL));
    }, [dispatch]);

    const onChangeType = useCallback((tab: TabItem) => {
        dispatch(articlesPageActions.setType(tab.value as ArticleType));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    return (
        <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
            <div className={cls.sortWrapper}>
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
            </div>
            <Card className={cls.search}>
                <MyInput
                    placeholder={t('Поиск')}
                    value={search}
                    onChange={onChangeSearch}
                />
            </Card>
            <ArticlesTypeTabs
                type={type}
                onChangeType={onChangeType}
                className={cls.tabs}
            />
        </div>
    );
});
