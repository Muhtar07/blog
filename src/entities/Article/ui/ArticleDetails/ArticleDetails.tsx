import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { memo, useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
    Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Icon } from 'shared/ui/Icon/Icon';
import Eye from 'shared/assets/icons/eye.svg';
import Calendar from 'shared/assets/icons/calendar.svg';
import { ArticleBlockType } from '../../model/types/article';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { articleReducer } from '../../model/slice/articleSlice';
import cls from './ArticleDetails.module.scss';
import {
    getArticleDetailsData,
    getArticleError,
    getArticleIsLoading,
} from '../../model/selectors/getArticleDetailsData/getArticleDetailsData';

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const reducers: ReducersList = {
    articleDetails: articleReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { t } = useTranslation();
    const {
        className,
        id,
    } = props;
    const isLoading = useSelector(getArticleIsLoading);
    const error = useSelector(getArticleError);
    const article = useSelector(getArticleDetailsData);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);

    const renderBlock = useCallback(() => article?.blocks.map((block) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return (<ArticleCodeBlockComponent className={cls.block} key={block.id} text={block.code} />);
        case ArticleBlockType.IMAGE:
            return (
                <ArticleImageBlockComponent
                    className={cls.block}
                    key={block.id}
                    src={block.src}
                    title={block.title}
                />
            );
        case ArticleBlockType.TEXT:
            return (
                <ArticleTextBlockComponent
                    className={cls.block}
                    key={block.id}
                    paragraphs={block.paragraphs}
                    title={block.title}
                />
            );
        default:
            return null;
        }
    }), [article?.blocks]);

    let content;

    if (isLoading) {
        content = (
            <div className={cls.ArticleDetails}>
                <Skeleton
                    className={cls.avatar}
                    width={200}
                    height={200}
                    border="50%"
                />
                <Skeleton
                    className={cls.date}
                    width={400}
                    height={35}
                />
                <Skeleton
                    className={cls.views}
                    width={600}
                    height={30}
                />
                <Skeleton
                    className={cls.base}
                    width="100%"
                    height={800}
                />
                <Skeleton
                    className={cls.base}
                    width="100%"
                    height={300}
                />
            </div>
        );
    } else if (error) {
        content = (
            <Text
                text={t('Произошла ошибка загрузки статьи')}
                textAlign={TextAlign.CENTER}
                size={TextSize.L}
                theme={TextTheme.ERROR}
            />
        );
    } else {
        content = (
            <div>
                <Avatar
                    className={cls.avatar}
                    src={article?.img}
                    alt={t('Аватар')}
                    size={200}
                />
                <Text text={article?.title} size={TextSize.XL} className={cls.title} />
                <Text text={article?.subtitle} size={TextSize.L} className={cls.subtitle} />
                <div className={cls.views}>
                    <Icon
                        className={cls.icon}
                        Svg={Eye}
                        width={20}
                        height={20}
                    />
                    <Text text={String(article?.views)} />
                </div>
                <div
                    className={cls.date}
                >
                    <Icon
                        className={cls.icon}
                        Svg={Calendar}
                        width={20}
                        height={20}
                        stroke
                    />
                    <Text text={article?.createdAt} />
                </div>

                {renderBlock()}

            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>

    );
});
