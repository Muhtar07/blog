import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleSortField } from 'entities/Article';
import { ArticleType } from 'entities/Article/model/types/article';

export const getArticlesPageIsLoading = (state: StateSchema) => state.articleInfiniteList?.isLoading;
export const getArticlesPageError = (state: StateSchema) => state.articleInfiniteList?.error;
export const getArticlesPageView = (state: StateSchema) => state.articleInfiniteList?.view;
export const getArticlesPageNum = (state: StateSchema) => state.articleInfiniteList?.page || 1;
export const getArticlesHasMore = (state: StateSchema) => state.articleInfiniteList?.hasMore;
export const getArticlesLimit = (state: StateSchema) => state.articleInfiniteList?.limit;
export const getArticlesPageInited = (state: StateSchema) => state.articleInfiniteList?._inited;
export const getArticlesSort = (state: StateSchema) => state.articleInfiniteList?.sort ?? ArticleSortField.CREATED;
export const getArticlesOrder = (state: StateSchema) => state.articleInfiniteList?.order ?? 'asc';
export const getArticlesSearch = (state: StateSchema) => state.articleInfiniteList?.search ?? '';
export const getArticlesType = (state: StateSchema) => state.articleInfiniteList?.type ?? ArticleType.ALL;
