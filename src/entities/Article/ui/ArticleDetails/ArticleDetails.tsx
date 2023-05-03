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
import { HStack, VStack } from 'shared/ui/Stack';
import { ArticleBlockType } from '../../model/types/article';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { articleReducer } from '../../model/slice/articleSlice';
import {
    getArticleDetailsData,
    getArticleError,
    getArticleIsLoading,
} from '../../model/selectors/getArticleDetailsData/getArticleDetailsData';

interface ArticleDetailsProps {
    id: string;
}

const reducers: ReducersList = {
    articleDetails: articleReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { t } = useTranslation();
    const {
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
            return (<ArticleCodeBlockComponent key={block.id} text={block.code} />);
        case ArticleBlockType.IMAGE:
            return (
                <ArticleImageBlockComponent
                    key={block.id}
                    src={block.src}
                    title={block.title}
                />
            );
        case ArticleBlockType.TEXT:
            return (
                <ArticleTextBlockComponent
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
            <>
                <HStack max justify="center">
                    <Skeleton
                        width={200}
                        height={200}
                        border="50%"
                    />
                </HStack>

                <Skeleton
                    width={400}
                    height={35}
                />
                <Skeleton
                    width={300}
                    height={30}
                />
                <Skeleton
                    width={200}
                    height={20}
                />
                <Skeleton
                    width={200}
                    height={20}
                />
                <Skeleton
                    width="100%"
                    height={800}
                />
                <Skeleton
                    width="100%"
                    height={300}
                />
            </>
        );
    } else if (error) {
        content = (
            <HStack max justify="center">
                <Text
                    title={t('Произошла ошибка загрузки статьи')}
                    textAlign={TextAlign.CENTER}
                    size={TextSize.L}
                    theme={TextTheme.ERROR}
                />
            </HStack>

        );
    } else {
        content = (
            <>
                <HStack max justify="center">
                    <Avatar
                        src={article?.img}
                        alt={t('Аватар')}
                        size={200}
                    />
                </HStack>
                <Text title={article?.title} size={TextSize.L} theme={TextTheme.PRIMARY} />
                <VStack max gap="8">
                    <Text title={article?.subtitle} size={TextSize.M} />
                    <HStack gap="10">
                        <Icon
                            Svg={Eye}
                            width={20}
                            height={20}
                        />
                        <Text size={TextSize.S} text={String(article?.views)} />
                    </HStack>
                    <HStack gap="10">
                        <Icon
                            Svg={Calendar}
                            width={20}
                            height={20}
                            stroke
                        />
                        <Text size={TextSize.S} text={article?.createdAt} />
                    </HStack>
                </VStack>
                {renderBlock()}
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <VStack max gap="16">
                {content}
            </VStack>
        </DynamicModuleLoader>

    );
});
