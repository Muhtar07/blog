import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { ArticleSortField, ArticleType, ArticleView } from 'entities/Article';
import { fetchArticlesPageData } from '../fetchArticlesInfiniteListData/fetchArticlesInfiniteListData';
import { fetchNextArticlesListData } from './fetchNextArticlesListData';

jest.mock('../fetchArticlesInfiniteListData/fetchArticlesInfiniteListData');

describe('fetchNextArticlesListData', () => {
    test('success get Articles', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesListData, {
            articleInfiniteList: {
                page: 1,
                hasMore: true,
                limit: 9,
                ids: [],
                entities: {},
                sort: ArticleSortField.CREATED,
                order: 'asc',
                search: '',
                view: ArticleView.BIG,
                _inited: false,
                type: ArticleType.ALL,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(4);
    });
    test('error get Articles', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesListData, {
            articleInfiniteList: {
                page: 1,
                hasMore: true,
                limit: 9,
                ids: [],
                entities: {},
                sort: ArticleSortField.CREATED,
                order: 'asc',
                search: '',
                view: ArticleView.BIG,
                _inited: false,
                type: ArticleType.ALL,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(fetchArticlesPageData).not.toHaveBeenCalled();
    });
});
