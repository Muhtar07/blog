import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from 'widgets/Page/Page';
import { useParams } from 'react-router-dom';
import { Text, TextSize } from 'shared/ui/Text/Text';
import cls from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
    const { t } = useTranslation();

    const { id } = useParams<{id: string}>();

    const {
        className,
    } = props;

    return (
        <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
            {
                id ? <Text title={t('Редатирования статьи с ID =') + id} size={TextSize.L} />
                    : <Text title={t('Создание новой статьи')} size={TextSize.L} />
            }
        </Page>
    );
});

export default ArticleEditPage;
