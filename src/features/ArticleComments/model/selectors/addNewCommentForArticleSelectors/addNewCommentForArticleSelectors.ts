import { StateSchema } from 'app/providers/StoreProvider';

export const getAddNewCommentForArticleText = (state: StateSchema) => state.articleComments?.addNewComments?.text ?? '';
export const getAddNewCommentForArticleError = (state: StateSchema) => state.articleComments?.addNewComments?.error;
export const getAddNewCommentForArticleIsLoading = (state: StateSchema) => state.articleComments?.addNewComments?.isLoading;
