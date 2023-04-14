import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { useCallback } from 'react';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country
    onChange?: (value: Country) => void
    readonly?: boolean
}

const countries: SelectOption<Country>[] = [
    {
        value: Country.RUSSIA,
        content: Country.RUSSIA,
    },
    {
        value: Country.KAZAKHSTAN,
        content: Country.KAZAKHSTAN,
    },
    {
        value: Country.ARMENIA,
        content: Country.ARMENIA,
    },
    {
        value: Country.USA,
        content: Country.USA,
    },
];

export const CountrySelect = (props: CountrySelectProps) => {
    const { t } = useTranslation();

    const {
        className,
        value,
        onChange,
        readonly,
    } = props;

    const onChangeHandler = useCallback((value: string | number) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Select
            label={t('Укажите страну')}
            options={countries}
            className={classNames('', {}, [className])}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
};
