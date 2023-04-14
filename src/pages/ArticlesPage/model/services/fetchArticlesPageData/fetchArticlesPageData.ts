import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article, ArticleType } from 'entities/Article';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';
import {
    getArticlesLimit,
    getArticlesOrder,
    getArticlesPageNum,
    getArticlesSearch,
    getArticlesSort,
    getArticlesType,
} from '../../selectors/getArticlesData';

interface FetchArticlesPageData {
    replace?: boolean;
}

export const fetchArticlesPageData = createAsyncThunk<
    Article[],
    FetchArticlesPageData,
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
            const order = getArticlesOrder(getState());
            const sort = getArticlesSort(getState());
            const search = getArticlesSearch(getState());
            const type = getArticlesType(getState());

            try {
                addQueryParams({
                    sort,
                    order,
                    search,
                    type,
                });
                const response = await api.get<Article[]>('/articles', {
                    params: {
                        _expand: 'user',
                        _limit: limit,
                        _page: page,
                        _order: order,
                        _sort: sort,
                        q: search,
                        type: type === ArticleType.ALL ? undefined : type,
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
