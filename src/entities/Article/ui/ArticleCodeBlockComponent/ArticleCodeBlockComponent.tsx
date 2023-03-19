import { memo, useCallback } from 'react';
import { ButtonTheme, MyButton } from 'shared/ui/MyButton/MyButton';
import { Icon } from 'shared/ui/Icon/Icon';
import Copy from 'shared/assets/icons/copy.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
    className?: string;
    text?: string
}

export const ArticleCodeBlockComponent = memo((props: ArticleCodeBlockComponentProps) => {
    const {
        className,
        text,
    } = props;
    const handlerCopyButton = useCallback(() => {
        navigator.clipboard.writeText(text || '');
    }, [text]);

    return (
        <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
            <Icon Svg={Copy} width={32} height={32} stroke fillNone className={cls.copyBtn} />
            <pre className={cls.codeContainer}>
                <MyButton
                    theme={ButtonTheme.CLEAR}
                    onClick={handlerCopyButton}
                    className={cls.copyBtn}
                    square
                />
                <code>
                    {text}
                </code>
            </pre>
        </div>

    );
});
