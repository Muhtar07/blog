import { ArticleView } from 'entities/Article';
import { ArticleInfiniteListSchema } from '../types/articlesInfiniteTypes';
import { articlesInfiniteListActions, articlesInfiniteListReducer } from './articlesInfiniteListSlice';

describe('articlesPageSlice', () => {
    test('set view', () => {
        const state: DeepPartial<ArticleInfiniteListSchema> = {
            view: ArticleView.SMALL,
        };

        expect(
            articlesInfiniteListReducer(state as ArticleInfiniteListSchema, articlesInfiniteListActions.setView(ArticleView.BIG)),
        ).toEqual({ view: ArticleView.BIG });
    });
});
