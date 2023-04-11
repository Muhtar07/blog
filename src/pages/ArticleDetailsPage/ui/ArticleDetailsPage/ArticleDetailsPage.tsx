import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import {
    Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

import { useSelector } from 'react-redux';
import { CommentList } from 'entities/Comment';
import { memo, useCallback } from 'react';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AddNewCommentForArticle } from 'features/AddNewCommentForArticle';
import { MyButton } from 'shared/ui/MyButton/MyButton';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'shared/ui/Page/Page';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

import { getArticleCommentsError, getArticleCommentsIsLoading } from '../../model/selectors/articleCommentsSelectors';
import cls from './ArticleDetailsPage.module.scss';
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slices/articleDetailsCommentSlice';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsComment: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article-details');
    const comments = useSelector(getArticleComments.selectAll);
    const commentIsLoading = useSelector(getArticleCommentsIsLoading);
    const commentError = useSelector(getArticleCommentsError);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const {
        className,
    } = props;

    const { id } = useParams<{id: string}>();

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    const onBackButton = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    if (!id && __PROJECT__ !== 'storybook') {
        return (
            <Page className={cls.articleNotFound}>
                <Text
                    text={t('Статья не найдена')}
                    theme={TextTheme.ERROR}
                    size={TextSize.L}
                    textAlign={TextAlign.CENTER}
                />
            </Page>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={cls.buttonContainer}>
                <MyButton
                    onClick={onBackButton}
                >
                    {t('Назад')}
                </MyButton>
            </Page>
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <ArticleDetails id={id || '1'} />
                <Text text={t('Комментарии')} size={TextSize.XL} theme={TextTheme.PRIMARY} />
                <AddNewCommentForArticle />
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
                            isLoading={commentIsLoading}
                            comments={comments}
                        />
                    )}

            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
