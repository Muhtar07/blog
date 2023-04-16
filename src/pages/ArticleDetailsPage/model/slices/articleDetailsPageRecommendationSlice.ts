import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { Article } from 'entities/Article';
import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleDetailsPageRecommendationSchema } from '../types/articleDetailsPageRecommendationSchema';
import { fetchArticleRecommendations } from '../services/fetchArticleRecommendations/fetchArticleRecommendations';

const initialState: ArticleDetailsPageRecommendationSchema = {
    isLoading: false,
    error: undefined,
    entities: {},
    ids: [],
};

const recommendationAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,

});

export const getArticleRecommendation = recommendationAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.recommendations || recommendationAdapter.getInitialState(),
);

export const articleDetailsPageRecommendationSlice = createSlice({
    name: 'articleDetailsPageRecommendation',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommendations.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchArticleRecommendations.fulfilled, (state, action) => {
                state.isLoading = false;
                recommendationAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticleRecommendations.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: articleDetailsPageRecommendationActions } = articleDetailsPageRecommendationSlice;
export const { reducer: articleDetailsPageRecommendationReducer } = articleDetailsPageRecommendationSlice;
