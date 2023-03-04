import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import cls from './Modal.module.scss';
import { Portal } from '../Portal/Portal';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: ()=> void;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
    } = props;

    const [isClose, setIsClose] = useState(false);

    const timeRef = useRef<ReturnType <typeof setTimeout>>();

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClose((prevState) => !prevState);
            timeRef.current = setTimeout(() => {
                onClose();
                setIsClose((prevState) => !prevState);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onClickContent = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            clearTimeout(timeRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClose,
    };

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={(e) => onClickContent(e)}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>

    );
};
