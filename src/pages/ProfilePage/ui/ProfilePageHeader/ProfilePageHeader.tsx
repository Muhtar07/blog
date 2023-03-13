import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { ButtonTheme, MyButton } from 'shared/ui/MyButton/MyButton';
import { useSelector } from 'react-redux';
import {
    getProfileForm, getProfileReadonly, profileActions, putProfileData,
} from 'entities/Profile';
import { memo, useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = memo((props: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();
    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEditData());
    }, [dispatch]);

    const form = useSelector(getProfileForm);

    const onSave = useCallback(async () => {
        if (form) {
            await dispatch(putProfileData());
        }
    }, [dispatch, form]);

    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text
                theme={TextTheme.PRIMARY}
                text={t('Профиль')}
                size={TextSize.L}
            />
            {readonly
                ? (
                    <MyButton
                        theme={ButtonTheme.OUTLINE}
                        className={cls.editBtn}
                        onClick={onEdit}
                    >
                        {t('Редактировать')}
                    </MyButton>
                )
                : (
                    <div className={cls.editBtn}>
                        <MyButton
                            className={cls.saveBtn}
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
                    </div>
                )}
        </div>
    );
});
