import { AddNewCommentForArticleSchema } from '../types/addNewCommentForArticle';
import {
    addNewCommentForArticleActions,
    addNewCommentForArticleReducer,
} from './addNewCommentForArticleSlice';

describe('addNewCommentForArticleSlice', () => {
    test('decrement', () => {
        const state: DeepPartial<AddNewCommentForArticleSchema> = {
            text: '',
        };
        expect(
            addNewCommentForArticleReducer(state as AddNewCommentForArticleSchema, addNewCommentForArticleActions.setText('123')),
        ).toEqual({ text: '123' });
    });
    test('decrement', () => {
        const state: DeepPartial<AddNewCommentForArticleSchema> = {
            error: '',
        };
        expect(
            addNewCommentForArticleReducer(state as AddNewCommentForArticleSchema, addNewCommentForArticleActions.setError('123')),
        ).toEqual({ error: '123' });
    });
});
