import { ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { flip, useFloating } from '@floating-ui/react';
import { HStack } from '../Stack';
import cls from './ListBox.module.scss';
import { MyButton } from '../MyButton/MyButton';

export interface ListBoxItem<T extends string> {
    value: T;
    content: ReactNode;
    disabled?: boolean
}

interface ListBoxProps<T extends string> {
    className?: string;
    label?: string;
    items?: ListBoxItem<T>[];
    value?: string;
    // eslint-disable-next-line no-unused-vars
    onChange: (value: T) => void;
    readonly?: boolean;
    defaultValue?:string
}

export function ListBox<T extends string>(props: ListBoxProps<T>) {
    const {
        className,
        label,
        items,
        value,
        onChange,
        readonly,
        defaultValue,
    } = props;

    const { refs, floatingStyles } = useFloating({
        middleware: [flip()],
    });

    return (
        <HStack gap="8">
            {label && <span>{`${label}>`}</span>}
            <HListBox
                as="div"
                className={classNames(cls.ListBox, { [cls.readonly]: readonly }, [className])}
                value={value}
                onChange={onChange}
                disabled={readonly}
            >
                <HListBox.Button ref={refs.setReference} disabled={readonly} className={cls.trigger}>
                    <MyButton disabled={readonly}>
                        {value ?? defaultValue}
                    </MyButton>
                </HListBox.Button>
                <HListBox.Options
                    className={cls.options}
                    ref={refs.setFloating}
                    style={floatingStyles}
                >
                    {items?.map(({ value, content, disabled }) => (
                        <HListBox.Option
                            key={value}
                            value={value}
                            disabled={disabled}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(
                                        cls.item,
                                        { [cls.active]: active, [cls.disabled]: disabled },
                                        [],
                                    )}
                                >
                                    {selected && '!!!'}
                                    {content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>

    );
}
