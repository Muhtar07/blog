import { combineReducers } from '@reduxjs/toolkit';
import { ArticleCommentsSchema } from '../types';
import {
    articleDetailsCommentsReducer,
} from './ArticleCommentsSlice/ArticleCommentsSlice';
import {
    addNewCommentForArticleReducer,
} from './addNewCommentForArticleSlice/addNewCommentForArticleSlice';

export const articleCommentsReducer = combineReducers<ArticleCommentsSchema>({
    addNewComments: addNewCommentForArticleReducer,
    comments: articleDetailsCommentsReducer,
});
