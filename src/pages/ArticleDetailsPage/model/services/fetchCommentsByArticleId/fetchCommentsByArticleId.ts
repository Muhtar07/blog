import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { IComment } from 'entities/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<IComment[], string | undefined, ThunkConfig<string>>(
    'article/fetchCommentsByArticleId',
    async (articleId, thinkApi) => {
        const {
            extra: {
                api,
            },
            rejectWithValue,
        } = thinkApi;

        if (!articleId) {
            throw rejectWithValue('ошибка');
        }

        try {
            const response = await api.get<IComment[]>('/comments', {
                params: {
                    articleId,
                    _expand: 'user',
                },
            });

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
