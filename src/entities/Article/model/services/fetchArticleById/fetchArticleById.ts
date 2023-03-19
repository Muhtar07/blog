import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Article } from '../../types/article';

export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig<string>>(
    'article/fetchArticleById',
    async (articleId, thinkApi) => {
        const {
            extra: {
                api,
            },
            rejectWithValue,
        } = thinkApi;
        try {
            const response = await api.get<Article>(RoutePath.article_details + articleId);

            if (!response.data) {
                throw new Error();
            }

            return response?.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
