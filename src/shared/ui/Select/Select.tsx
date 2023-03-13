import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import {
    ChangeEvent,
    memo, useMemo,
} from 'react';
import cls from './Select.module.scss';

export interface SelectOption {
    value: string,
    content: string
}

interface SelectProps {
    className?: string;
    label: string;
    options?:SelectOption[];
    value?: string;
    onChange?: (value: string | number) => void;
    readonly?:boolean,
}

export const Select = memo((props: SelectProps) => {
    const {
        className,
        label,
        options,
        value,
        onChange,
        readonly,
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
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
});
