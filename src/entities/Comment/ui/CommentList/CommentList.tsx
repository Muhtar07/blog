import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text';
import { VStack } from 'shared/ui/Stack';
import { CommentCard } from '../CommentCard/CommentCard';
import { IComment } from '../../model/types/comment';

interface CommentListProps {
    className?: string;
    comments?: IComment[];
    isLoading?: boolean;

}

export const CommentList = memo((props: CommentListProps) => {
    const { t } = useTranslation();

    const {
        className,
        comments,
        isLoading,
    } = props;

    if (isLoading) {
        return (
            <VStack max gap="16">
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </VStack>

        );
    }

    return (

        <VStack max gap="16" className={classNames('', {}, [className])}>
            {
                comments?.length
                    ? comments.map((comment) => (
                        <CommentCard
                            comment={comment}
                            key={comment.id}
                        />
                    ))
                    : <Text text={t('Коментариев нет')} textAlign={TextAlign.CENTER} size={TextSize.L} />
            }
        </VStack>
    );
});
