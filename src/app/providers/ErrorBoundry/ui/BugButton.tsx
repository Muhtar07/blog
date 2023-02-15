import { MyButton } from 'shared/ui/MyButton/MyButton';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
// компонент для тестирования
export const BugButton = () => {
    const { t } = useTranslation();

    const [error, setError] = useState(false);
    const onThrow = () => {
        setError((prevState) => !prevState);
    };

    useEffect(() => {
        if (error) throw new Error();
    }, [error]);
    return (
        <MyButton onClick={onThrow}>
            {t('Вызвать ошибку')}
        </MyButton>
    );
};
