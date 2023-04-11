import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { ArticleView } from 'entities/Article';
import Table from 'shared/assets/icons/table.svg';
import List from 'shared/assets/icons/list.svg';
import { ButtonTheme, MyButton } from 'shared/ui/MyButton/MyButton';
import { Icon } from 'shared/ui/Icon/Icon';
import cls from './ArticlesSwitcherView.module.scss';

interface ArticlesSwitcherViewProps {
    handlerClick?: (view: ArticleView) => void
    view: ArticleView;
}

const articleView = [
    {
        view: ArticleView.SMALL,
        IconView: Table,
    },
    {
        view: ArticleView.BIG,
        IconView: List,
    },
];

export const ArticlesSwitcherView = memo((props: ArticlesSwitcherViewProps) => {
    const {
        handlerClick,
        view,
    } = props;

    const onClick = useCallback((newView: ArticleView) => () => {
        handlerClick?.(newView);
    }, [handlerClick]);

    return (
        <div className={cls.ArticlesSwitcherView}>
            {
                articleView.map((viewType) => (
                    <MyButton
                        key={viewType.view}
                        onClick={onClick(viewType.view)}
                        theme={ButtonTheme.CLEAR}
                    >
                        <Icon
                            className={
                                classNames(
                                    '',
                                    {
                                        [cls.selected]: viewType.view === view,
                                        [cls.notSelected]: viewType.view !== view,
                                    },
                                    [cls[viewType.view]],
                                )
                            }
                            Svg={viewType.IconView}
                            height={20}
                            width={20}
                        />
                    </MyButton>
                ))
            }
        </div>
    );
});
