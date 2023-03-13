import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, {
    InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import cls from './MyInput.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'readOnly' | 'onChange'>

interface MyInputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void
    autofocus?: boolean
    readonly?: boolean
}

export const MyInput = memo((props: MyInputProps) => {
    const {
        className,
        value = '',
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        readonly,
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement>(null);

    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        if (autofocus) {
            setIsFocused(autofocus);
            ref.current?.focus();
        }
    }, [autofocus]);
    const [caretPosition, setCaretPosition] = useState(0);
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onSelect = (e: any) => {
        setCaretPosition(e?.target?.selectionStart > `${value}`.length
            ? `${value}`.length : e?.target?.selectionStart || 0);
    };
    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    const caretVisible = !readonly && isFocused;

    return (
        <div className={classNames(cls.MyInputWrapper, {}, [className])}>
            {placeholder && (
                <div
                    className={cls.placeholder}
                >
                    {`${placeholder}>`}
                </div>
            )}
            <div
                className={classNames(cls.caretWrapper, mods, [])}
            >
                <input
                    ref={ref}
                    value={value}
                    onChange={onChangeHandler}
                    className={cls.input}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    readOnly={readonly}
                    {...otherProps}
                />
                {caretVisible && (
                    <span
                        className={cls.caret}
                        style={{ left: `${caretPosition}ch` }}
                    />
                )}
            </div>

        </div>

    );
});
