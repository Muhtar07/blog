import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleDetailsData, getArticleError, getArticleIsLoading } from './getArticleDetailsData';

const state: DeepPartial<StateSchema> = {
    articleDetails: {
        isLoading: true,
        error: 'test',
        data: {
            id: '1',
            subtitle: 'test',
        },
    },
};

describe('getArticleDetailsData.test', () => {
    test('get article details data', () => {
        expect(getArticleDetailsData(state as StateSchema)).toEqual(state.articleDetails?.data);
    });
    test('get article details error', () => {
        expect(getArticleError(state as StateSchema)).toEqual(state.articleDetails?.error);
    });
    test('get article details is loading', () => {
        expect(getArticleIsLoading(state as StateSchema)).toEqual(state.articleDetails?.isLoading);
    });
});
