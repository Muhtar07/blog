import { ArticleView } from 'entities/Article';
import { ArticlesPageSchema } from '../types/articlesPageTypes';
import { articlesPageActions, articlesPageReducer } from './articlesPageSlice';

describe('articlesPageSlice', () => {
    test('set view', () => {
        const state: DeepPartial<ArticlesPageSchema> = {
            view: ArticleView.SMALL,
        };

        expect(
            articlesPageReducer(state as ArticlesPageSchema, articlesPageActions.setView(ArticleView.BIG)),
        ).toEqual({ view: ArticleView.BIG });
    });
});
