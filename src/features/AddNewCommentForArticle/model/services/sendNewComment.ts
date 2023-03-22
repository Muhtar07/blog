import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getUserAuthData } from 'entities/User';
import { getArticleDetailsData } from 'entities/Article';
import { IComment } from 'entities/Comment';
import { articleDetailsCommentsActions } from 'pages/ArticleDetailsPage';
import {
    getAddNewCommentForArticleText,
} from '../selectors/addNewCommentForArticleSelectors/addNewCommentForArticleSelectors';

export const sendNewComment = createAsyncThunk<IComment, void, ThunkConfig<string>>(
    'article/sendNewComment',
    async (_, thinkApi) => {
        const {
            extra: {
                api,
            },
            getState,
            rejectWithValue,
            dispatch,
        } = thinkApi;

        const text = getAddNewCommentForArticleText(getState());
        const userData = getUserAuthData(getState());
        const articleData = getArticleDetailsData(getState());

        if (!text || !userData || !articleData) {
            return rejectWithValue('no data');
        }

        try {
            const response = await api.post<IComment>('/comments', {
                articleId: articleData?.id,
                userId: userData?.id,
                text,
            });

            if (!response.data) {
                return rejectWithValue('SERVER ERROR');
            }

            const newComment = {
                ...response.data,
                user: userData,
            };
            dispatch(articleDetailsCommentsActions.addComment(newComment));

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
