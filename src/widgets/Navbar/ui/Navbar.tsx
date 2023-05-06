import React, { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ButtonTheme, MyButton } from 'shared/ui/MyButton/MyButton';
import { LoginModal } from 'features/AuthByUserName';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { HStack } from 'shared/ui/Stack';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const dispatch = useDispatch();
    const authData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const handlerLogout = () => {
        dispatch(userActions.logout());
    };

    if (authData) {
        return (
            <HStack justify="between" className={classNames(cls.Navbar, {}, [className])}>
                <Text title={t('MUHTAR')} size={TextSize.L} className={cls.appName} theme={TextTheme.INVERTED} />
                <AppLink to={RoutePath.article_create} theme={AppLinkTheme.INVERTED}>
                    {t('Создать новую статью')}
                </AppLink>
                <Dropdown
                    items={[
                        {
                            content: t('Профиль'),
                            href: RoutePath.profile + authData.id,
                            key: '1',
                        },
                        {
                            content: t('Выйти'),
                            onClick: handlerLogout,
                            key: '2',
                        },
                    ]}
                    trigger={<Avatar src={authData.avatar} size={30} />}
                />

            </HStack>
        );
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <MyButton
                onClick={onShowModal}
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.login}

            >
                {t('Войти')}
            </MyButton>
            {isAuthModal && (
                <LoginModal
                    onClose={onCloseModal}
                    isOpen={isAuthModal}
                />
            )}
        </div>
    );
});
