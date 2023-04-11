import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useRef } from 'react';
import { ArticleList, ArticleView } from 'entities/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ArticlesSwitcherView } from 'features/ArticlesSwitcherView/ui/ArticlesSwitcherView';
import { Page } from 'shared/ui/Page/Page';
import { fetchNextArticlesPage } from 'pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { fetchArticlesPageData } from '../../model/services/fetchArticlesPageData/fetchArticlesPageData';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../../model/selectors/getArticlesData';
import { articlesPageActions, articlesPageReducer, getArticles } from '../../model/slices/articlesPageSlice';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}
const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

export interface GetLimitProps {
    heightList?: number;
    widthList?: number;
    heightItem?: number;
    widthItem?: number;
}

const ArticlesPage = (props: ArticlesPageProps) => {
    const { t } = useTranslation();
    const {
        className,
    } = props;

    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);
    const dispatch = useAppDispatch();

    const limit = useCallback(({
        heightList, widthList, heightItem, widthItem,
    }:GetLimitProps) => {
        if (heightList && widthList && heightItem && widthItem) {
            const limitWidth = heightList / heightItem;
            const limitHeight = widthList / widthItem;
            console.log(Math.ceil(limitHeight * limitWidth));
            console.log(heightList, widthList, heightItem, widthItem);

            return Math.ceil(limitHeight * limitWidth);
        }
        return 9;
    }, []);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view || ArticleView.SMALL));
    }, [dispatch]);

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(articlesPageActions.initState());
        dispatch(fetchArticlesPageData());
    });

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page onScrollEnd={onLoadNextPart}>
                <ArticlesSwitcherView view={view || ArticleView.SMALL} handlerClick={onChangeView} />
                <div className={classNames(cls.ArticlesPage, {}, [className])}>
                    <ArticleList view={view} isLoading={isLoading} error={error} articles={articles} />
                </div>
            </Page>
        </DynamicModuleLoader>

    );
};

export default memo(ArticlesPage);
