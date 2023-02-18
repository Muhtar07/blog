import { classNames } from 'shared/lib/classNames/classNames';
import { MyButton, ThemeButton } from 'shared/ui/MyButton/MyButton';
import { useTranslation } from 'react-i18next';
import cls from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
    className?: string;
}

export const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <MyButton
            onClick={toggle}
            theme={ThemeButton.CLEAR}
            className={classNames(cls.LanguageSwitcher, {}, [className])}
        >
            {t('язык')}
        </MyButton>
    );
};
