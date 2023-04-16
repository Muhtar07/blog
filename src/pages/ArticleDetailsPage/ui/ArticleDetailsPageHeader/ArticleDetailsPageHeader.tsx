import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { MyButton } from 'shared/ui/MyButton/MyButton';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCanEditArticle } from 'pages/ArticleDetailsPage';
import { getArticleDetailsData } from 'entities/Article';
import cls from './ArticleDetailsPageHeader.module.scss';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
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

    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
            <MyButton
                onClick={onBackButton}
            >
                {t('Назад к списку')}
            </MyButton>
            {canEdit && (
                <MyButton
                    onClick={onEditButton}
                    className={cls.editBtn}
                >
                    {t('Редактировать')}
                </MyButton>
            ) }
        </div>
    );
});
