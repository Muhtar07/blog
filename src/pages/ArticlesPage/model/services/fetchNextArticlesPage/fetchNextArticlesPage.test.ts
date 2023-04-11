import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchArticlesPageData } from '../fetchArticlesPageData/fetchArticlesPageData';
import { fetchNextArticlesPage } from './fetchNextArticlesPage';

jest.mock('../fetchArticlesPageData/fetchArticlesPageData');

describe('fetchNextArticlesPage', () => {
    test('success get Articles', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 1,
                hasMore: true,
                limit: 9,
                ids: [],
                entities: {},
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(4);
    });
    test('error get Articles', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 1,
                hasMore: false,
                limit: 9,
                ids: [],
                entities: {},
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(fetchArticlesPageData).not.toHaveBeenCalled();
    });
});
