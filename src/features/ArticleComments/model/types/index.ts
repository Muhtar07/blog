import { ArticleDetailsCommentsSchema } from './articleDetailsCommentsSchema';
import { AddNewCommentForArticleSchema } from './addNewCommentForArticleSchema';

export interface ArticleCommentsSchema {
    comments: ArticleDetailsCommentsSchema;
    addNewComments: AddNewCommentForArticleSchema

}
