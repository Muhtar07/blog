import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { articlesInfiniteListActions } from '../../slices/articlesInfiniteListSlice';
import { fetchArticlesPageData } from '../fetchArticlesInfiniteListData/fetchArticlesInfiniteListData';
import {
    getArticlesHasMore,
    getArticlesPageIsLoading,
    getArticlesPageNum,
} from '../../selectors/getArticlesData';

export const fetchNextArticlesListData = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
    >(
        'article/fetchNextArticlesListData',
        async (_, thunkApi) => {
            const {
                getState,
                dispatch,
            } = thunkApi;

            const hasMore = getArticlesHasMore(getState());
            const page = getArticlesPageNum(getState());
            const isLoading = getArticlesPageIsLoading(getState());

            if (hasMore && !isLoading) {
                dispatch(articlesInfiniteListActions.setPage(page + 1));
                dispatch(fetchArticlesPageData({}));
            }
        },
    );
