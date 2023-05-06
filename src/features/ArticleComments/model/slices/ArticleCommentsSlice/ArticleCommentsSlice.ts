import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IComment } from 'entities/Comment';
import { StateSchema } from 'app/providers/StoreProvider';
import {
    fetchCommentsByArticleId,
} from '../../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { ArticleDetailsCommentsSchema } from '../../types/articleDetailsCommentsSchema';

const commentInitialState: ArticleDetailsCommentsSchema = {
    isLoading: false,
    entities: {},
    error: undefined,
    ids: [],
};

const commentsAdapter = createEntityAdapter<IComment>({
    selectId: (comment) => comment.id,

});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleComments?.comments || commentsAdapter.getInitialState(),
);

const articleDetailsCommentSlice = createSlice({
    name: 'articleDetailsCommentSlice',
    initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>(commentInitialState),
    reducers: {
        addComment: (state, action: PayloadAction<IComment>) => {
            commentsAdapter.addOne(state, action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCommentsByArticleId.fulfilled, (state, action:PayloadAction<IComment[]>) => {
                commentsAdapter.setAll(state, action.payload);
                state.isLoading = false;
            })
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },
});

export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentSlice;
export const { actions: articleDetailsCommentsActions } = articleDetailsCommentSlice;
