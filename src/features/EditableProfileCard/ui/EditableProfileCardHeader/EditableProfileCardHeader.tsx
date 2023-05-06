import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { ButtonTheme, MyButton } from 'shared/ui/MyButton/MyButton';
import { useSelector } from 'react-redux';

import { memo, useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from 'entities/User';
import { HStack } from 'shared/ui/Stack';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { profileActions } from '../../model/slice/profileSlice';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { putProfileData } from '../../model/services/putProfileData/putProfileData';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';

interface ProfilePageHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader = memo((props: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');
    const {
        className,
    } = props;
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();
    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);

    const canEdit = authData?.id === profileData?.id;

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEditData());
    }, [dispatch]);

    const form = useSelector(getProfileForm);

    const onSave = useCallback(async () => {
        if (form && form.id) {
            if (__PROJECT__ !== 'storybook') {
                await dispatch(putProfileData(form.id));
            }
        }
    }, [dispatch, form]);

    if (canEdit) {
        return (
            <HStack justify="between" max>
                <Text
                    theme={TextTheme.PRIMARY}
                    text={t('Профиль')}
                    size={TextSize.L}
                />
                {readonly
                    ? (
                        <MyButton
                            theme={ButtonTheme.OUTLINE}
                            onClick={onEdit}
                        >
                            {t('Редактировать')}
                        </MyButton>
                    )
                    : (
                        <HStack gap="12">
                            <MyButton
                                onClick={onSave}
                                theme={ButtonTheme.OUTLINE}
                            >
                                {t('Сохранить')}
                            </MyButton>
                            <MyButton
                                onClick={onCancelEdit}
                                theme={ButtonTheme.OUTLINE_RED}
                            >
                                {t('Отменить')}
                            </MyButton>
                        </HStack>
                    )}
            </HStack>
        );
    }
    return (
        <div className={classNames('', {}, [className])}>
            <Text
                theme={TextTheme.PRIMARY}
                text={t('Профиль')}
                size={TextSize.L}
            />
            <div />
        </div>
    );
});
