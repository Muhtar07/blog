import { StateSchema } from 'app/providers/StoreProvider';

export const getAddNewCommentForArticleText = (state: StateSchema) => state.addNewCommentForArticle?.text;
export const getAddNewCommentForArticleError = (state: StateSchema) => state.addNewCommentForArticle?.error;
export const getAddNewCommentForArticleIsLoading = (state: StateSchema) => state.addNewCommentForArticle?.isLoading;
