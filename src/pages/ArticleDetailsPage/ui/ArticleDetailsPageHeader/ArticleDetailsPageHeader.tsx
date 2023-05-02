import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { MyButton } from 'shared/ui/MyButton/MyButton';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from 'entities/Article';
import { HStack } from 'shared/ui/Stack';
import { getCanEditArticle } from '../../model/selectors/article';

export const ArticleDetailsPageHeader = memo(() => {
    const { t } = useTranslation();

    const canEdit = useSelector(getCanEditArticle);
    const article = useSelector(getArticleDetailsData);

    const navigate = useNavigate();

    const onBackButton = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const onEditButton = useCallback(() => {
        navigate(`${RoutePath.article_details}${article?.id}/edit`);
    }, [article?.id, navigate]);

    return (
        <HStack max justify="between">
            <MyButton
                onClick={onBackButton}
            >
                {t('Назад к списку')}
            </MyButton>
            {canEdit && (
                <MyButton
                    onClick={onEditButton}
                >
                    {t('Редактировать')}
                </MyButton>
            ) }
        </HStack>
    );
});
