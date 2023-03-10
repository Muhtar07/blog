import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ButtonTheme, MyButton } from 'shared/ui/MyButton/MyButton';
import { MyInput } from 'shared/ui/MyInput/MyInput';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { loginByUsername } from '../../model/services/loginByUserName/loginByUserName';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo((props: LoginFormProps) => {
    const {
        className,
        onSuccess,
    } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);
    const username = useSelector(getLoginUsername);

    const onChangeUserName = useCallback((value):void => {
        dispatch(loginActions.setUserName(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value):void => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));

        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [dispatch, password, username, onSuccess]);

    return (
        <DynamicModuleLoader reducers={initialReducers}>
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
        </DynamicModuleLoader>

    );
});
export default LoginForm;
