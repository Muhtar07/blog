import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
    Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { MyInput } from 'shared/ui/MyInput/MyInput';
import { Loader } from 'shared/ui/Loader/Loader';
import { memo } from 'react';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import { ValidateProfileError } from 'entities/Profile';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    isLoading?: boolean,
    error?: string,
    updateFirstname?: (value?: string) => void
    updateLastname?: (value?: string) => void
    updateAge?: (value?: string)=> void
    updateUsername?: (value?: string)=> void
    updateCity?: (value?: string)=> void
    updateAvatar?: (value?: string)=> void
    updateCurrency?: (value?: Currency)=> void
    updateCountry?: (value?: Country)=> void
    form?: Profile
    readonly?: boolean
}

export const ProfileCard = memo((props: ProfileCardProps) => {
    const { t } = useTranslation('profile');

    const {
        isLoading,
        error,
        className,
        updateFirstname,
        updateLastname,
        form,
        readonly,
        updateAge,
        updateUsername,
        updateCity,
        updateAvatar,
        updateCurrency,
        updateCountry,
    } = props;
    const mods:Mods = {
        [cls.editing]: !readonly,
    };

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [cls.isLoading])}>
                <Loader />
            </div>
        );
    }
    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [cls.error])}>
                <div>
                    <Text
                        text={t('Произошла ошибка')}
                        theme={TextTheme.ERROR}
                        textAlign={TextAlign.CENTER}
                        size={TextSize.L}
                    />
                    <Text
                        text={error}
                        theme={TextTheme.ERROR}
                        textAlign={TextAlign.CENTER}
                    />
                </div>
            </div>
        );
    }

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            {form?.avatar && (
                <div
                    className={cls.avatarWrapper}
                >
                    <Avatar
                        size={150}
                        src={form.avatar}
                        alt={t('Не удалось загрузить картинку')}
                    />
                </div>
            )}
            <div className={cls.data}>
                <MyInput
                    autofocus={!readonly}
                    placeholder={t('Ваше имя')}
                    value={form?.firstname}
                    className={cls.input}
                    readonly={readonly}
                    onChange={updateFirstname}
                />
                <MyInput
                    placeholder={t('Ваша фамилия')}
                    value={form?.lastname}
                    className={cls.input}
                    readonly={readonly}
                    onChange={updateLastname}
                />
                <MyInput
                    placeholder={t('Ваш возраст')}
                    value={form?.age}
                    className={cls.input}
                    readonly={readonly}
                    onChange={updateAge}
                />
                <MyInput
                    placeholder={t('Ваш username')}
                    value={form?.username}
                    className={cls.input}
                    readonly={readonly}
                    onChange={updateUsername}
                />
                <MyInput
                    placeholder={t('Ваш город')}
                    value={form?.city}
                    className={cls.input}
                    readonly={readonly}
                    onChange={updateCity}
                />
                <MyInput
                    placeholder={t('Ваш аватар')}
                    value={form?.avatar}
                    className={cls.input}
                    readonly={readonly}
                    onChange={updateAvatar}
                />
                <CurrencySelect
                    className={cls.input}
                    value={form?.currency}
                    onChange={updateCurrency}
                    readonly={readonly}
                />
                <CountrySelect
                    readonly={readonly}
                    value={form?.country}
                    onChange={updateCountry}
                    className={cls.input}
                />
            </div>
        </div>
    );
});
