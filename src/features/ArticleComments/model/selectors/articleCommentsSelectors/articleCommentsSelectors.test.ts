import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleCommentsError, getArticleCommentsIsLoading } from './articleCommentsSelectors';

describe('comment', () => {
    test('get Article Comments Is Loading', () => {
        const state: DeepPartial<StateSchema> = {
            articleComments: {
                comments: {
                    isLoading: false,

                },
            },
        };
        expect(getArticleCommentsIsLoading(state as StateSchema)).toBe(false);
    });
    test('get Articles fetch comments Error', () => {
        const state: DeepPartial<StateSchema> = {
            articleComments: {
                comments: { error: 'error' },
            },
        };
        expect(getArticleCommentsError(state as StateSchema)).toBe('error');
    });
});
