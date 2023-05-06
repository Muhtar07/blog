import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from 'widgets/Page/Page';
import { useSearchParams } from 'react-router-dom';
import {
    ArticleInfiniteList,
    fetchNextArticlesListData, initArticlesInfiniteList,
} from 'features/ArticleInfiniteList';
import { VStack } from 'shared/ui/Stack';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = (props: ArticlesPageProps) => {
    const {
        className,
    } = props;

    const dispatch = useAppDispatch();

    const [searchParams] = useSearchParams();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesListData());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlesInfiniteList(searchParams));
    });

    return (
        <Page
            onScrollEnd={onLoadNextPart}
            className={classNames(cls.ArticlesPage, {}, [className])}
        >
            <VStack max gap="16">
                <ArticlesPageFilters />
                <ArticleInfiniteList />
            </VStack>

        </Page>

    );
};

export default memo(ArticlesPage);
