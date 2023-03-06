import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ButtonTheme, MyButton } from 'shared/ui/MyButton/MyButton';
import { MyInput } from 'shared/ui/MyInput/MyInput';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { getUserAuthData } from 'entities/User';
import { getLoginState } from '../../model/selectors/getUserState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUserName/loginByUserName';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const {
        username,
        password,
        error,
        isLoading,
    } = useSelector(getLoginState);

    const dispatch = useDispatch();

    const onChangeUserName = useCallback((value):void => {
        dispatch(loginActions.setUserName(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value):void => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text
                text={t('Форма авторизации')}
                theme={TextTheme.PRIMARY}
                size={TextSize.L}
            />
            {error && <Text text={error} theme={TextTheme.ERROR} />}
            <MyInput
                autofocus
                type="text"
                className={cls.input}
                placeholder={t('Логин')}
                onChange={onChangeUserName}
                value={username}
            />
            <MyInput
                type="text"
                className={cls.input}
                placeholder={t('Пароль')}
                onChange={onChangePassword}
                value={password}

            />
            <MyButton
                className={cls.loginBtn}
                disabled={isLoading}
                onClick={onLoginClick}
                theme={ButtonTheme.OUTLINE}
            >
                {t('Войти')}
            </MyButton>

        </div>
    );
});
