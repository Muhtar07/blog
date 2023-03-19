import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { IComment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string;
    comment?: IComment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { t } = useTranslation();

    const {
        className,
        comment,
        isLoading,
    } = props;

    if (isLoading) {
        return (
            <div className={cls.CommentCard}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border="50%" className={cls.avatar} />
                    <Skeleton width={180} height={16} />
                </div>
                <Skeleton width={700} height={16} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <div className={cls.header}>
                {comment?.user?.avatar
                    ? (
                        <Avatar
                            src={comment?.user?.avatar}
                            alt={comment?.user?.avatar}
                            className={cls.avatar}
                            size={40}
                        />
                    )
                    : null}
                <Text text={comment?.user.username} size={TextSize.L} theme={TextTheme.PRIMARY} />
            </div>
            <Text className={cls.text} text={comment?.text} />
        </div>
    );
});
