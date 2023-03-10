import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import cls from './MyInput.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface MyInputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void
    autofocus?: boolean
}

export const MyInput = memo((props: MyInputProps) => {
    const {
        className,
        value = '',
        onChange,
        type = 'text',
        placeholder,
        autofocus,
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
        setCaretPosition(e?.target?.selectionStart > value.length
            ? value.length : e?.target?.selectionStart || 0);
    };

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
                className={cls.caretWrapper}
            >
                <input
                    ref={ref}
                    value={value}
                    onChange={onChangeHandler}
                    className={cls.input}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    {...otherProps}
                />
                {isFocused && (
                    <span
                        className={cls.caret}
                        style={{ left: `${caretPosition}ch` }}
                    />
                )}
            </div>

        </div>

    );
});
