import { Menu } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Fragment, ReactNode } from 'react';
import { flip, shift, useFloating } from '@floating-ui/react';
import { AppLink } from '../AppLink/AppLink';
import cls from './Dropdown.module.scss';

export interface DropDownItem<T extends string> {
    content: ReactNode;
    disabled?: boolean;
    onClick?: () => void;
    href?: string;
}

interface DropdownProps<T extends string> {
    className?: string;
    items: DropDownItem<T>[];
    trigger: ReactNode;

}

export function Dropdown<T extends string>(props: DropdownProps<T>) {
    const {
        className,
        items,
        trigger,
    } = props;

    const { refs, floatingStyles } = useFloating({
        middleware: [
            flip(),
            shift(),
        ],
    });

    return (
        <Menu as="div" className={classNames(cls.Dropdown, {}, [className])}>
            <Menu.Button ref={refs.setReference} className={cls.btn}>
                {trigger}
            </Menu.Button>
            <Menu.Items
                ref={refs.setFloating}
                className={cls.menu}
                style={floatingStyles}
            >
                {items.map((item) => {
                    const content = ({ active }: {active: boolean}) => (
                        <button
                            type="button"
                            disabled={item.disabled}
                            onClick={item.onClick}
                            className={classNames(cls.item, { [cls.active]: active })}
                        >
                            {item.content}
                        </button>
                    );

                    if (item?.href) {
                        return (
                            <Menu.Item as={AppLink} to={item.href} disabled={item.disabled}>
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item as={Fragment} disabled={item.disabled}>
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
}
