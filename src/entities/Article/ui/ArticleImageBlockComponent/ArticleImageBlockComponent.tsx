import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    className?: string;
    src: string;
    title?: string;
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
    const {
        src,
        title,
        className,
    } = props;

    return (
        <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
            <img className={cls.img} src={src} alt={title} />
            {title && (
                <Text
                    text={title}
                    textAlign={TextAlign.CENTER}
                    className={cls.title}
                />
            )}
        </div>
    );
});
