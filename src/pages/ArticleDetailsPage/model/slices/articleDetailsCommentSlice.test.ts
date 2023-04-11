import { articleDetailsCommentsActions, articleDetailsCommentsReducer } from './articleDetailsCommentSlice';
import { ArticleDetailsCommentsSchema } from '../types/articleDetailsCommentsSchema';

describe('ArticleDetailsCommentsSchema', () => {
    test('add comment', () => {
        const state = {
            ids: ['1', '2', '3'],
            entities: {
                1: {
                    id: '1',
                    user: {
                        id: '1',
                        username: 'muhtar',
                    },
                    text: 'testing',
                },
                2: {
                    id: '2',
                    user: {
                        id: '1',
                        username: 'muhtar',
                    },
                    text: 'testing 2',
                },
                3: {
                    id: '3',
                    user: {
                        id: '1',
                        username: 'muhtar',
                    },
                    text: 'testing 3',
                },
            },
        };

        const newComment = {
            id: '4',
            user: {
                id: '1',
                username: 'muhtar',
            },
            text: 'testing',
        };

        expect(
            articleDetailsCommentsReducer(state, articleDetailsCommentsActions.addComment(newComment)),
        ).toEqual({
            ids: ['1', '2', '3', '4'],
            entities: { ...state.entities, [newComment.id]: newComment },
        });
    });
});
