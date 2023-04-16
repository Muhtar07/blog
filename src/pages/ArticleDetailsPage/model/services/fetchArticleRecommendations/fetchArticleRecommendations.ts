import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';

export const fetchArticleRecommendations = createAsyncThunk<
    Article[],
    void,
    ThunkConfig<string>
    >(
        'articleDetailsPage/fetchArticleRecommendations',
        async (props, thinkApi) => {
            const {
                extra: {
                    api,
                },
                rejectWithValue,
            } = thinkApi;

            try {
                const response = await api.get<Article[]>('/articles', {
                    params: {
                        _limit: 4,
                    },
                });

                if (!response.data) {
                    return rejectWithValue('SERVER ERROR');
                }

                return response.data;
            } catch (e) {
                return rejectWithValue('error');
            }
        },
    );
