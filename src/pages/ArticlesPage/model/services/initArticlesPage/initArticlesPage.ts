import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesPageData } from '../fetchArticlesPageData/fetchArticlesPageData';
import { getArticlesPageInited } from '../../selectors/getArticlesData';

export const initArticlesPage = createAsyncThunk<
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

            const inited = getArticlesPageInited(getState());

            if (!inited) {
                dispatch(articlesPageActions.initState());
                dispatch(fetchArticlesPageData());
            }
        },
    );
