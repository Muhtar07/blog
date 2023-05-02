import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useMemo } from 'react';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { ArticleType } from '../../model/types/article';

interface ArticlesTypeTabsProps {
    className?: string;
    type: ArticleType,
    onChangeType: (type: TabItem) => void
}

export const ArticlesTypeTabs = memo((props: ArticlesTypeTabsProps) => {
    const {
        className,
        type,
        onChangeType,
    } = props;
    const typeTabs = useMemo<TabItem[]>(() => ([
        {
            value: ArticleType.ALL,
            content: ArticleType.ALL,
        },
        {
            value: ArticleType.IT,
            content: ArticleType.IT,
        },
        {
            value: ArticleType.SCIENCE,
            content: ArticleType.SCIENCE,
        },
        {
            value: ArticleType.ECONOMICS,
            content: ArticleType.ECONOMICS,
        },
    ]), []);
    const onTabClick = useCallback((tab: TabItem) => {
        onChangeType(tab);
    }, [onChangeType]);

    return (
        <Tabs
            tabs={typeTabs}
            value={type}
            onTabClick={onTabClick}
            className={classNames('', {}, [className])}
        />
    );
});
