import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { VStack } from 'shared/ui/Stack';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ProfileCard } from 'entities/Profile';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ValidateProfileError } from '../../model/types/EditableProfileCardSchema';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';
import {
    getProfileIsLoading,
} from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import {
    getUpdateValidateProfileErrors,
} from '../../model/selectors/getUpdateValidateProfileErrors/getUpdateValidateProfileErrors';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';

import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';

interface EditableProfileCardProps {
    className?: string;
    id?: string;
}

const reducers: ReducersList = {
    profile: profileReducer,
};

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const { className, id } = props;
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getProfileIsLoading);
    const readonly = useSelector(getProfileReadonly);
    const form = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const validateErrors = useSelector(getUpdateValidateProfileErrors);

    const validateErrorsTranslates = {
        [ValidateProfileError.SERVER_ERROR]: t('Серверная ошибка при сохранении'),
        [ValidateProfileError.INCORRECT_AVATAR]: t('Неправильный формат аватара'),
        [ValidateProfileError.INCORRECT_LASTNAME_OR_FIRSTNAME]: t('Фамилия и имя обязательны для заполнения'),
        [ValidateProfileError.INCORRECT_CITY]: t('Укажите город'),
        [ValidateProfileError.NO_COUNTRY]: t('Укажите страну'),
        [ValidateProfileError.INCORRECT_AGE]: t('Укажите ваш возраст'),
        [ValidateProfileError.NO_DATA]: t('Данные не указаны'),

    };

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });

    const updateFirstname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ firstname: value }));
    }, [dispatch]);

    const updateLastname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ lastname: value }));
    }, [dispatch]);

    const updateAge = useCallback((value?: string) => {
        if (!Number.isNaN(Number(value))) {
            const age: number| string = Number(value) ? Number(value) : '';
            dispatch(profileActions.updateProfile({ age }));
        }
    }, [dispatch]);

    const updateUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ username: value }));
    }, [dispatch]);

    const updateCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ city: value }));
    }, [dispatch]);

    const updateAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ avatar: value }));
    }, [dispatch]);

    const updateCurrency = useCallback((currency?: Currency) => {
        dispatch(profileActions.updateProfile({ currency }));
    }, [dispatch]);

    const updateCountry = useCallback((country?: Country) => {
        dispatch(profileActions.updateProfile({ country }));
    }, [dispatch]);

    if (!id) {
        return <Text text={t('Произошла ошибка')} />;
    }

    return (
        <DynamicModuleLoader reducers={reducers}>

            <VStack gap="16" max className={classNames('', {}, [className])}>
                <EditableProfileCardHeader />
                {
                    validateErrors?.length ? validateErrors.map((err: ValidateProfileError) => (
                        <Text
                            text={validateErrorsTranslates[err]}
                            size={TextSize.L}
                            theme={TextTheme.ERROR}
                            key={err}
                        />
                    )) : null
                }
                <ProfileCard
                    form={form}
                    isLoading={isLoading}
                    error={error}
                    updateFirstname={updateFirstname}
                    updateLastname={updateLastname}
                    readonly={readonly}
                    updateAge={updateAge}
                    updateUsername={updateUsername}
                    updateCity={updateCity}
                    updateAvatar={updateAvatar}
                    updateCurrency={updateCurrency}
                    updateCountry={updateCountry}
                />
            </VStack>
        </DynamicModuleLoader>
    );
});
