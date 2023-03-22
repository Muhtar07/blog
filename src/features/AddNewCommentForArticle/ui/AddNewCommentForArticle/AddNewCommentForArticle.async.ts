import { lazy } from 'react';

export const AddNewCommentForArticleAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./AddNewCommentForArticle')), 1500);
}));
