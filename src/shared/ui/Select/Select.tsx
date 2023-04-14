import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import {
    ChangeEvent,
    memo, useMemo,
} from 'react';
import cls from './Select.module.scss';

export interface SelectOption<T extends string> {
    value: T,
    content: string
}

interface SelectProps<T extends string> {
    className?: string;
    label: string;
    options?:SelectOption<T>[];
    value?: T;
    onChange?: (value: T) => void;
    readonly?:boolean,
}

export const Select = <T extends string>(props: SelectProps<T>) => {
    const {
        className,
        label,
        options,
        value,
        onChange,
        readonly,
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
    };

    const optionList = useMemo(() => options?.map(({ content, value }) => (
        <option value={value} key={value}>
            {content}
        </option>
    )), [options]);

    return (
        <div className={classNames(cls.Wrapper, {}, [className])}>
            <Text className={cls.label} text={`${label}>`} theme={TextTheme.PRIMARY} />
            <select
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
                disabled={readonly}
            >
                {optionList}
            </select>
        </div>
    );
};
