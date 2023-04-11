import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article';
import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView } from './getArticlesData';

describe('getArticlesData', () => {
    test('get Articles Page Is Loading', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                isLoading: false,

            },
        };
        expect(getArticlesPageIsLoading(state as StateSchema)).toBe(false);
    });
    test('get Articles Page Error', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                error: 'error',
            },
        };
        expect(getArticlesPageError(state as StateSchema)).toBe('error');
    });
    test('get Articles Page View', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                view: ArticleView.BIG,
            },
        };
        expect(getArticlesPageView(state as StateSchema)).toBe(ArticleView.BIG);
    });
});
