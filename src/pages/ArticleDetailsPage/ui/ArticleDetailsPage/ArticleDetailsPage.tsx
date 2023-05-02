import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleDetails, ArticleList } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import {
    Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

import { useSelector } from 'react-redux';
import { CommentList } from 'entities/Comment';
import { memo } from 'react';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AddNewCommentForArticle } from 'features/AddNewCommentForArticle';
import { Page } from 'widgets/Page/Page';
import { HStack, VStack } from 'shared/ui/Stack';
import {
    fetchArticleRecommendations,
} from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { articleDetailsPageReducer } from '../../model/slices';
import { getArticleRecommendationError, getArticleRecommendationIsLoading } from '../../model/selectors/recommendation';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

import { getArticleCommentsError, getArticleCommentsIsLoading } from '../../model/selectors/articleCommentsSelectors';
import cls from './ArticleDetailsPage.module.scss';
import { getArticleComments } from '../../model/slices/articleDetailsCommentSlice';
import { getArticleRecommendation } from '../../model/slices/articleDetailsPageRecommendationSlice';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article-details');
    const comments = useSelector(getArticleComments.selectAll);
    const commentIsLoading = useSelector(getArticleCommentsIsLoading);
    const commentError = useSelector(getArticleCommentsError);
    const recommendation = useSelector(getArticleRecommendation.selectAll);
    const recommendationIsLoading = useSelector(getArticleRecommendationIsLoading);
    const recommendationIsError = useSelector(getArticleRecommendationError);
    const dispatch = useAppDispatch();

    const {
        className,
    } = props;

    const { id } = useParams<{id: string}>();

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommendations());
    });

    if (!id && __PROJECT__ !== 'storybook') {
        return (
            <Page className={cls.articleNotFound}>
                <HStack max justify="center" align="center">
                    <Text
                        text={t('Статья не найдена')}
                        theme={TextTheme.ERROR}
                        size={TextSize.L}
                        textAlign={TextAlign.CENTER}
                    />
                </HStack>
            </Page>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={cls.buttonContainer}>
                <ArticleDetailsPageHeader />

                <VStack
                    max
                    gap="16"
                >
                    <ArticleDetails id={id || '1'} />
                    <Text
                        text={t('Рекомендуем')}
                        size={TextSize.XL}
                        theme={TextTheme.PRIMARY}
                    />
                    <HStack max>
                        <ArticleList
                            articles={recommendation}
                            isLoading={recommendationIsLoading}
                            error={recommendationIsError}
                            className={cls.recommendations}
                            target="_blank"
                        />
                    </HStack>

                    <Text
                        text={t('Комментарии')}
                        size={TextSize.XL}
                        theme={TextTheme.PRIMARY}
                    />
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

                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
