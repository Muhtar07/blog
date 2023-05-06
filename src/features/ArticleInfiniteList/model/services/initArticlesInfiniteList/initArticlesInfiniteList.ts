import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { SortOrder } from 'shared/types';
import { ArticleSortField, ArticleType } from 'entities/Article';
import { articlesInfiniteListActions } from '../../slices/articlesInfiniteListSlice';
import { fetchArticlesPageData } from '../fetchArticlesInfiniteListData/fetchArticlesInfiniteListData';
import { getArticlesPageInited } from '../../selectors/getArticlesData';

export const initArticlesInfiniteList = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
    >(
        'article/fetchNextArticlesListData',
        async (searchParams, thunkApi) => {
            const {
                getState,
                dispatch,
            } = thunkApi;

            const inited = getArticlesPageInited(getState());

            if (!inited) {
                const orderFromUrl = searchParams.get('order') as SortOrder;
                const sortFromUrl = searchParams.get('sort') as ArticleSortField;
                const searchFromUrl = searchParams.get('search');
                const typeFromUrl = searchParams.get('type') as ArticleType;

                if (orderFromUrl) {
                    dispatch(articlesInfiniteListActions.setOrder(orderFromUrl));
                }
                if (sortFromUrl) {
                    dispatch(articlesInfiniteListActions.setSort(sortFromUrl));
                }
                if (searchFromUrl) {
                    dispatch(articlesInfiniteListActions.setSearch(searchFromUrl));
                }

                if (typeFromUrl) {
                    dispatch(articlesInfiniteListActions.setType(typeFromUrl));
                }

                dispatch(articlesInfiniteListActions.initState());
                dispatch(fetchArticlesPageData({}));
            }
        },
    );
