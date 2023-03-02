import { classNames } from 'shared/lib/classNames/classNames';
import { MyButton, ButtonTheme } from 'shared/ui/MyButton/MyButton';
import { useTranslation } from 'react-i18next';
import cls from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LanguageSwitcher = ({ className, short }: LanguageSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <MyButton
            onClick={toggle}
            theme={ButtonTheme.CLEAR}
            className={classNames(cls.LanguageSwitcher, {}, [className])}
        >
            { t(short ? 'Переключатель языка сокращение' : 'Переключатель языка')}
        </MyButton>
    );
};
