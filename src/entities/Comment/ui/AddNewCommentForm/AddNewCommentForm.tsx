import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { MyInput } from 'shared/ui/MyInput/MyInput';
import { MyButton } from 'shared/ui/MyButton/MyButton';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';

import cls from './AddNewCommentForm.module.scss';

export interface AddNewCommentFormProps {
    className?: string;
    error?: string;
    onHandlerInputText: (value: string) => void
    onSendComment: () => void;
    text?: string;
    isLoading?: boolean;
}

export const AddNewCommentForm = memo((props: AddNewCommentFormProps) => {
    const {
        className,
        onSendComment,
        onHandlerInputText,
        error,
        text,
        isLoading,
    } = props;

    const { t } = useTranslation();

    return (
        <div className={classNames(cls.AddNewCommentForm, {}, [className])}>
            <div className={cls.errorContainer}>
                <Text
                    text={error}
                    theme={TextTheme.ERROR}
                    size={TextSize.M}
                />
            </div>

            <div className={cls.commentFromWrapper}>
                <MyInput
                    className={cls.input}
                    onChange={onHandlerInputText}
                    placeholder={t('Введите текст коментария')}
                    value={text}
                />
                <MyButton
                    disabled={isLoading}
                    onClick={onSendComment}
                >
                    {t('Отправить')}
                </MyButton>
            </div>

        </div>

    );
});
