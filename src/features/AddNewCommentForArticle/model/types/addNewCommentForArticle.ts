import { IComment } from 'entities/Comment';

export interface AddNewCommentForArticleSchema {
    error?: string,
    data?: IComment,
    isLoading: boolean
    text?: string
}
