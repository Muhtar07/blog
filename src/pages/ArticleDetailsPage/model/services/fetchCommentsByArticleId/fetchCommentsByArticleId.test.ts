import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { IComment } from 'entities/Comment';
import {
    fetchCommentsByArticleId,
} from './fetchCommentsByArticleId';

const comment: IComment = {
    id: '1',
    text: '123',
    user: {
        id: '1',
        username: 'test',
        avatar: 'AvatarUser',
    },
};
const comments = Array(3).fill(0).map((_, index) => {
    comment.id = `${comment.id + index}`;
    return comment;
});

describe('fetchCommentsByArticleId', () => {
    test('success get Comments By Article Id', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
        thunk.api.get.mockReturnValue(Promise.resolve({ data: comments }));

        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(comments);
    });
    test('error get Articles', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');

        expect(result.meta.requestStatus).toBe('rejected');
        expect(thunk.api.get).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.payload).toBe('SERVER ERROR');
    });
});
