import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleSortField } from 'entities/Article';
import { ArticleType } from 'entities/Article/model/types/article';

export const getArticlesPageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading;
export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error;
export const getArticlesPageView = (state: StateSchema) => state.articlesPage?.view;
export const getArticlesPageNum = (state: StateSchema) => state.articlesPage?.page || 1;
export const getArticlesHasMore = (state: StateSchema) => state.articlesPage?.hasMore;
export const getArticlesLimit = (state: StateSchema) => state.articlesPage?.limit;
export const getArticlesPageInited = (state: StateSchema) => state.articlesPage?._inited;
export const getArticlesSort = (state: StateSchema) => state.articlesPage?.sort ?? ArticleSortField.CREATED;
export const getArticlesOrder = (state: StateSchema) => state.articlesPage?.order ?? 'asc';
export const getArticlesSearch = (state: StateSchema) => state.articlesPage?.search ?? '';
export const getArticlesType = (state: StateSchema) => state.articlesPage?.type ?? ArticleType.ALL;
