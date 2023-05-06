import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { AddNewCommentForm, CommentList } from 'entities/Comment';
import {
    Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { VStack } from 'shared/ui/Stack';

import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    getArticleCommentsError,
    getArticleCommentsIsLoading,
} from '../../model/selectors/articleCommentsSelectors/articleCommentsSelectors';
import { getArticleComments } from '../../model/slices/ArticleCommentsSlice/ArticleCommentsSlice';
import {
    fetchCommentsByArticleId,
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import {
    addNewCommentForArticleActions,
} from '../../model/slices/addNewCommentForArticleSlice/addNewCommentForArticleSlice';
import { sendNewComment } from '../../model/services/sendNewComment/sendNewComment';
import { articleCommentsReducer } from '../../model/slices';
import {
    getAddNewCommentForArticleError,
    getAddNewCommentForArticleIsLoading,
    getAddNewCommentForArticleText,
} from '../../model/selectors/addNewCommentForArticleSelectors/addNewCommentForArticleSelectors';

interface ArticleCommentsProps {
    className?: string;
    id?:string;
}

const reducers: ReducersList = {
    articleComments: articleCommentsReducer,
};

const ArticleComments = memo((props: ArticleCommentsProps) => {
    const { className, id } = props;
    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    const comments = useSelector(getArticleComments.selectAll);
    const commentError = useSelector(getArticleCommentsError);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const text = useSelector(getAddNewCommentForArticleText);
    const isLoadingNewComment = useSelector(getAddNewCommentForArticleIsLoading);
    const errorNewComment = useSelector(getAddNewCommentForArticleError);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    const onHandlerInputText = useCallback((value: string) => {
        dispatch(addNewCommentForArticleActions.setText(value));
    }, [dispatch]);

    const onSendComment = useCallback(async () => {
        if (!text) {
            dispatch(addNewCommentForArticleActions.setError('Пустой коментарии'));
            setTimeout(() => {
                dispatch(addNewCommentForArticleActions.setError(''));
            }, 2000);
        } else {
            await dispatch(sendNewComment());
        }
    }, [dispatch, text]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <VStack gap="16" max className={classNames('', {}, [className])}>
                <Text
                    title={t('Комментарии')}
                    size={TextSize.L}
                    theme={TextTheme.PRIMARY}
                />
                <AddNewCommentForm
                    onHandlerInputText={onHandlerInputText}
                    onSendComment={onSendComment}
                    isLoading={isLoadingNewComment}
                    error={errorNewComment}
                    text={text}
                />
                {commentError
                    ? (
                        <Text
                            text={commentError}
                            textAlign={TextAlign.CENTER}
                            size={TextSize.L}
                            theme={TextTheme.ERROR}
                        />
                    )
                    : (
                        <CommentList
                            isLoading={commentsIsLoading}
                            comments={comments}
                        />
                    )}
            </VStack>
        </DynamicModuleLoader>

    );
});

export default ArticleComments;
