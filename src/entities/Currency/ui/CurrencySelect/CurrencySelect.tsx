import { useTranslation } from 'react-i18next';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    className?: string;
    value?: Currency
    onChange?: (value: Currency) => void
    readonly?: boolean,
}
const currencies: SelectOption[] = [
    {
        value: Currency.RUB,
        content: Currency.RUB,
    },
    {
        value: Currency.CNY,
        content: Currency.CNY,
    },
    {
        value: Currency.USD,
        content: Currency.USD,
    },
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const { t } = useTranslation();

    const {
        className,
        value,
        onChange,
        readonly,
    } = props;

    const onChangeHandler = useCallback((value: string | number) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Укажите валюту')}
            value={value}
            onChange={onChangeHandler}
            options={currencies}
            readonly={readonly}
        />
    );
});
