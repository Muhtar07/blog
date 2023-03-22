import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { IComment } from 'entities/Comment';
import { Article } from 'entities/Article';
import { sendNewComment } from './sendNewComment';

const comment: IComment = {
    id: '1',
    user: {
        username: 'user',
        id: '1',
    },
    text: '1234',
};

describe('sendNewComment', () => {
    test('success  send new comment', async () => {
        const thunk = new TestAsyncThunk(sendNewComment, {
            user: {
                authData: {
                    id: '1',
                    username: 'user',
                },
            },
            articleDetails: {
                isLoading: false,
                data: {
                    id: '1',
                } as Article,

            },
            addNewCommentForArticle: {
                isLoading: false,
                text: '1234',
            },
        });
        thunk.api.post.mockReturnValue(Promise.resolve({ data: comment }));

        const result = await thunk.callThunk();

        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(comment);
    });
    test('error post new comment', async () => {
        const thunk = new TestAsyncThunk(sendNewComment, {
            user: {
                authData: {
                    id: '1',
                    username: 'user',
                },
            },
            articleDetails: {
                isLoading: false,
                data: {
                    id: '1',
                } as Article,

            },
            addNewCommentForArticle: {
                isLoading: false,
                text: '1234',
            },
        });
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.payload).toEqual('SERVER ERROR');
    });
});
