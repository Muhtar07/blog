import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { IComment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string;
    comment?: IComment;
    isLoading?: boolean
}

export const CommentCard = memo((props: CommentCardProps) => {
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
    if (!comment) {
        return null;
    }

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <AppLink to={`${RoutePath.profile}${comment?.user.id}`} className={cls.header}>
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
            </AppLink>
            <Text className={cls.text} text={comment?.text} />
        </div>
    );
});
