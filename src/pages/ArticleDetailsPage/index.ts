export { ArticleDetailsPageAsync as ArticleDetailsPage } from './ui/ArticleDetailsPage/ArticleDetailsPage.async';
export { ArticleDetailsCommentsSchema } from './model/types/articleDetailsCommentsSchema';
export {
    articleDetailsCommentsActions,
    articleDetailsCommentsReducer,
} from './model/slices/articleDetailsCommentSlice';
export {
    ArticleDetailsPageRecommendationSchema,
} from './model/types/articleDetailsPageRecommendationSchema';
export {
    ArticleDetailsPageSchema,
} from './model/types/index';
export { getCanEditArticle } from './model/selectors/article';
