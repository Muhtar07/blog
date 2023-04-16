import { HTMLAttributeAnchorTarget, memo } from 'react';
import { Card } from 'shared/ui/Card/Card';
import { Text, TextSize } from 'shared/ui/Text/Text';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { MyButton } from 'shared/ui/MyButton/MyButton';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Article, ArticleBlockType, ArticleView } from '../../model/types/article';
import {
    ArticleTextBlockComponent,
    ArticleTextBlockComponentProps,
} from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
    className?:string,
    view?: ArticleView;
    article:Article;
    target?: HTMLAttributeAnchorTarget
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        view = ArticleView.SMALL,
        article,
        className,
        target,
    } = props;

    const { t } = useTranslation();

    if (view === ArticleView.SMALL) {
        return (
            <AppLink
                to={RoutePath.article_details + article.id}
                target={target}
            >
                <Card className={classNames('', {}, [className, cls[ArticleView.SMALL]])}>
                    <div>
                        <img src={article.img} alt={article.title} className={cls.img} />
                        <Text text={article.createdAt} className={cls.createdAt} />
                        <div className={cls.footer}>
                            <div className={cls.meta}>
                                <Text className={cls.type} text={article.type.join(' ')} />
                                <div className={cls.view}>
                                    <Text text={String(article.views)} />
                                    <Icon Svg={EyeIcon} width={20} height={20} />
                                </div>
                            </div>
                            <Text className={cls.title} text={article.title} size={TextSize.L} />
                        </div>
                    </div>
                </Card>
            </AppLink>

        );
    }

    const textBlock = article.blocks.find(({
        type,
    }) => type === ArticleBlockType.TEXT) as ArticleTextBlockComponentProps;

    return (
        <Card className={classNames('', {}, [className, cls[ArticleView.BIG]])}>
            <div>
                <div className={cls.articleItemHeader}>
                    <div className={cls.author}>
                        <div className={cls.user}>
                            <Avatar
                                src={article.user.avatar}
                                size={30}
                                alt={article.user.username}
                            />
                            <Text className={cls.username} text={article.user.username} />
                        </div>
                        <Text text={article.createdAt} />
                    </div>
                    <Text className={cls.title} text={article.title} size={TextSize.L} />
                    <Text className={cls.type} text={article.type.join(' ')} />
                </div>
                <img src={article.img} alt={article.title} className={cls.img} />
                { textBlock && (
                    <ArticleTextBlockComponent
                        className={cls.paragraphs}
                        paragraphs={textBlock.paragraphs}
                        title={textBlock.title}
                    />
                )}
                <div className={cls.footer}>
                    <AppLink
                        to={RoutePath.article_details + article.id}
                        target={target}
                    >
                        <MyButton>
                            {t('Читать далее...')}
                        </MyButton>
                    </AppLink>

                    <div className={cls.viewBig}>
                        <Text text={String(article.views)} />
                        <Icon Svg={EyeIcon} width={20} height={20} className={cls.icon} />
                    </div>
                </div>
            </div>
        </Card>
    );
});
