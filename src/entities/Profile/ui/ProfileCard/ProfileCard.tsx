import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { ButtonTheme, MyButton } from 'shared/ui/MyButton/MyButton';
import { MyInput } from 'shared/ui/MyInput/MyInput';
import cls from './ProfileCard.module.scss';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const { t } = useTranslation('profile');

    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileError);
    const error = useSelector(getProfileError);

    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text
                    theme={TextTheme.PRIMARY}
                    text={t('Профиль')}
                    size={TextSize.L}
                />
                <MyButton
                    theme={ButtonTheme.OUTLINE}
                    className={cls.editBtn}
                >
                    {t('Редактировать')}
                </MyButton>
            </div>
            <div className={cls.data}>
                <MyInput
                    placeholder={t('Ваше имя')}
                    value={data?.firstname}
                    className={cls.input}
                />
                <MyInput
                    placeholder={t('Ваша фамимлия')}
                    value={data?.lastname}
                    className={cls.input}
                />
            </div>
        </div>
    );
};
