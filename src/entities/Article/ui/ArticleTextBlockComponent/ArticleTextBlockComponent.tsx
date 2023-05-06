import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import cls from './ArticleTextBlockComponent.module.scss';

export interface ArticleTextBlockComponentProps {
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
            {title && <Text title={title} size={TextSize.M} className={cls.title} theme={TextTheme.PRIMARY} />}
            {paragraphs.map((text) => (<Text text={text} size={TextSize.M} key={text} className={cls.paragraphs} />))}
        </div>
    );
});
