import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { VStack } from 'shared/ui/Stack';
import { ArticleList } from 'entities/Article';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleRecommendationList.module.scss';
import { useArticleRecommendationsList } from '../../api/recommendationApi';

interface ArticleRecommendationListProps {
    className?: string;
}

export const ArticleRecommendationList = memo((props: ArticleRecommendationListProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const { isLoading, data: articles, error } = useArticleRecommendationsList(4);

    if (isLoading || error) {
        return null;
    }

    return (
        <VStack gap="10" max className={classNames('', {}, [className])}>
            <Text
                title={t('Рекомендуем')}
                size={TextSize.L}
                theme={TextTheme.PRIMARY}
            />
            <ArticleList
                className={cls.articleRecommendationList}
                articles={articles}
                target="_blank"
            />

        </VStack>
    );
});
