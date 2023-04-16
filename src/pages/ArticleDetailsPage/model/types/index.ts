import { ArticleDetailsPageRecommendationSchema } from './articleDetailsPageRecommendationSchema';
import { ArticleDetailsCommentsSchema } from './articleDetailsCommentsSchema';

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentsSchema;
    recommendations: ArticleDetailsPageRecommendationSchema;
}
