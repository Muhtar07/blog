import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { CommentCard } from '../CommentCard/CommentCard';
import cls from './CommentList.module.scss';
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

    return (

        <div className={classNames(cls.CommentList, {}, [className])}>
            {
                comments?.length
                    ? comments.map((comment) => (
                        <CommentCard
                            isLoading={isLoading}
                            comment={comment}
                            key={comment.id}
                        />
                    ))
                    : <Text text={t('Коментариев нет')} />
            }
        </div>
    );
});
