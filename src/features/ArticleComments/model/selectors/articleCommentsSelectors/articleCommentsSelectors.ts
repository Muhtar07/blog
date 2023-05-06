import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleCommentsIsLoading = (state: StateSchema) => state.articleComments?.comments.isLoading;
export const getArticleCommentsError = (state: StateSchema) => state.articleComments?.comments.error;
