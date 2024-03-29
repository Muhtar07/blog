import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { sendNewComment } from '../../services/sendNewComment/sendNewComment';
import { AddNewCommentForArticleSchema } from '../../types/addNewCommentForArticleSchema';

const initialState: AddNewCommentForArticleSchema = {
    isLoading: false,
    error: '',
    data: undefined,
    text: undefined,
};

const addNewCommentForArticleSlice = createSlice({
    name: 'addNewCommentForArticleSlice',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(sendNewComment.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(sendNewComment.fulfilled, (state) => {
                state.isLoading = false;
                state.text = '';
            })
            .addCase(sendNewComment.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: addNewCommentForArticleActions } = addNewCommentForArticleSlice;
export const { reducer: addNewCommentForArticleReducer } = addNewCommentForArticleSlice;
