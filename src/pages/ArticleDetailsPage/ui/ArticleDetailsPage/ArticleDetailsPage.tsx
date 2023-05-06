import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { memo } from 'react';
import { Page } from 'widgets/Page/Page';
import { VStack } from 'shared/ui/Stack';
import { ArticleRecommendationList } from 'features/ArticleRecommendationList';
import { ArticleComments } from 'features/ArticleComments';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

const ArticleDetailsPage = () => {
    const { id } = useParams<{id: string}>();

    return (
        <Page>
            <ArticleDetailsPageHeader />
            <VStack
                max
                gap="16"
            >
                <ArticleDetails id={id || '1'} />
                <ArticleRecommendationList />
                <ArticleComments id={id} />
            </VStack>
        </Page>
    );
};

export default memo(ArticleDetailsPage);
