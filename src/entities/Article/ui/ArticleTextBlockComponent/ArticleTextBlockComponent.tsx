import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text, TextSize } from 'shared/ui/Text/Text';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
    className?: string;
    title?: string;
    paragraphs: string[]

}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
    const {
        className,
        title,
        paragraphs,
    } = props;

    return (
        <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
            {title && <Text text={title} size={TextSize.L} className={cls.title} />}
            {paragraphs.map((text) => (<Text text={text} key={text} className={cls.paragraphs} />))}
        </div>
    );
});
