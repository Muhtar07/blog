import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { getArticlesLimit, getArticlesPageNum } from 'pages/ArticlesPage/model/selectors/getArticlesData';

export const fetchArticlesPageData = createAsyncThunk<
    Article[],
    void,
    ThunkConfig<string>
    >(
        'article/fetchArticlesPageData',
        async (props, thinkApi) => {
            const {
                extra: {
                    api,
                },
                getState,
                rejectWithValue,
            } = thinkApi;

            const page = getArticlesPageNum(getState());
            const limit = getArticlesLimit(getState());

            try {
                const response = await api.get<Article[]>('/articles', {
                    params: {
                        _expand: 'user',
                        _limit: limit,
                        _page: page,
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
