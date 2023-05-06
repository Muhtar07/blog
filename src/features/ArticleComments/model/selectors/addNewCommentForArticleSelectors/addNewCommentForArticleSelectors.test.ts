import { StateSchema } from 'app/providers/StoreProvider';
import {
    getAddNewCommentForArticleError, getAddNewCommentForArticleIsLoading, getAddNewCommentForArticleText,
} from './addNewCommentForArticleSelectors';

describe('addNewCommentForArticleSelectors.test', () => {
    test('get error', () => {
        const state: DeepPartial<StateSchema> = {
            articleComments: {
                addNewComments: {
                    error: 'no',

                },
            },
        };
        expect(getAddNewCommentForArticleError(state as StateSchema)).toEqual('no');
    });
    test(('get is loading'), () => {
        const state: DeepPartial<StateSchema> = {
            articleComments: {
                addNewComments: {
                    isLoading: true,
                },
            },
        };
        expect(getAddNewCommentForArticleIsLoading(state as StateSchema)).toEqual(true);
    });
    test(('get data'), () => {
        const state: DeepPartial<StateSchema> = {
            articleComments: {
                addNewComments: {
                    text: '1234',
                },
            },
        };
        expect(getAddNewCommentForArticleText(state as StateSchema)).toEqual('1234');
    });
});
