import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesPageData } from '../fetchArticlesPageData/fetchArticlesPageData';
import {
    getArticlesHasMore,
    getArticlesPageIsLoading,
    getArticlesPageNum,
} from '../../selectors/getArticlesData';

export const fetchNextArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
    >(
        'article/fetchNextArticlesPage',
        async (_, thunkApi) => {
            const {
                getState,
                dispatch,
            } = thunkApi;

            const hasMore = getArticlesHasMore(getState());
            const page = getArticlesPageNum(getState());
            const isLoading = getArticlesPageIsLoading(getState());

            if (hasMore && !isLoading) {
                dispatch(articlesPageActions.setPage(page + 1));
                dispatch(fetchArticlesPageData());
            }
        },
    );
