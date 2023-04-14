import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Article, ArticleSortField, ArticleView } from 'entities/Article';
import { StateSchema } from 'app/providers/StoreProvider';
import { VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { SortOrder } from 'shared/types';
import { ArticleType } from 'entities/Article/model/types/article';
import { ArticlesPageSchema } from '../types/articlesPageTypes';
import { fetchArticlesPageData } from '../services/fetchArticlesPageData/fetchArticlesPageData';

const initialState: ArticlesPageSchema = {
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    view: ArticleView.SMALL,
    limit: 9,
    page: 1,
    hasMore: true,
    _inited: false,
    search: '',
    sort: ArticleSortField.CREATED,
    order: 'asc',
    type: ArticleType.ALL,

};

const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || articlesAdapter.getInitialState(),
);

export const articlesPageSlice = createSlice({
    name: 'articlePageSlice',
    initialState: articlesAdapter.getInitialState<ArticlesPageSchema>(initialState),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(VIEW_LOCALSTORAGE_KEY, action.payload);
        },
        setPage: (state, action:PayloadAction<number>) => {
            state.page = action.payload;
        },
        initState: (state) => {
            const view = localStorage.getItem(VIEW_LOCALSTORAGE_KEY) as ArticleView;
            state.view = view;
            state.limit = view === ArticleView.BIG ? 4 : 9;
            state.page = 1;
            state._inited = true;
        },
        setOrder: (state, { payload }: PayloadAction<SortOrder>) => {
            state.order = payload;
        },
        setSearch: (state, { payload }: PayloadAction<string>) => {
            state.search = payload;
        },
        setSort: (state, { payload }: PayloadAction<ArticleSortField>) => {
            state.sort = payload;
        },
        setType: (state, { payload }: PayloadAction<ArticleType>) => {
            state.type = payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesPageData.pending, (state, action) => {
                state.isLoading = true;
                state.error = undefined;
                if (action.meta.arg.replace) {
                    articlesAdapter.removeAll(state);
                }
            })
            .addCase(fetchArticlesPageData.fulfilled, (
                state,
                action,
            ) => {
                state.isLoading = false;
                state.hasMore = action.payload.length >= state.limit;
                if (action.meta.arg.replace) {
                    articlesAdapter.setAll(state, action.payload);
                } else {
                    articlesAdapter.addMany(state, action.payload);
                }
            })
            .addCase(fetchArticlesPageData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: articlesPageActions } = articlesPageSlice;
export const { reducer: articlesPageReducer } = articlesPageSlice;
