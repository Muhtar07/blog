import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { MyButton } from 'shared/ui/MyButton/MyButton';
import cls from './ErrorPage.module.scss';

interface ErrorPageProps {
    className?: string;
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.ErrorPage, {}, [className])}>
            <h2>{t('Произошла ошибка')}</h2>
            <MyButton className={cls.myButton} onClick={reloadPage}>
                {t('Обновить странциу')}
            </MyButton>
        </div>

    );
};
