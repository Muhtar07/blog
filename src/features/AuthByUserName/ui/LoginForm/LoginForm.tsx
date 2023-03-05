import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { MyButton } from 'shared/ui/MyButton/MyButton';
import { MyInput } from 'shared/ui/MyInput/MyInput';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <MyInput
                autofocus
                type="text"
                className={cls.input}
                placeholder={t('Логин')}
            />
            <MyInput
                type="text"
                className={cls.input}
                placeholder={t('Пароль')}

            />
            <MyButton
                className={cls.loginBtn}
            >
                {t('Войти')}
            </MyButton>

        </div>
    );
};
