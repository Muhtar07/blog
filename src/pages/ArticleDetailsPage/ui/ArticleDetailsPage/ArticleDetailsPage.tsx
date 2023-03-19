import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import {
    Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article-details');

    const {
        className,
    } = props;

    const { id } = useParams<{id: string}>();
    console.log(id);

    if (!id) {
        return (
            <div className={cls.articleNotFound}>
                <Text
                    text={t('Статья не найдена')}
                    theme={TextTheme.ERROR}
                    size={TextSize.L}
                    textAlign={TextAlign.CENTER}
                />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            <ArticleDetails id={id} />
        </div>
    );
};

export default memo(ArticleDetailsPage);
