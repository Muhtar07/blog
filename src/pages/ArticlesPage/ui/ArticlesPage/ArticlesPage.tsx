import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import {
    Article, ArticleList, ArticleView, getArticleIsLoading,
} from 'entities/Article';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = (props: ArticlesPageProps) => {
    const { t } = useTranslation();

    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            <ArticleList isLoading={false} view={ArticleView.SMALL} />
        </div>
    );
};

export default memo(ArticlesPage);
