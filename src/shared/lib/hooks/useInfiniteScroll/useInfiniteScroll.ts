import { MutableRefObject, useEffect, useRef } from 'react';

interface UseInfiniteScrollProps {
    callback?: () => void;
    triggerRef: MutableRefObject<HTMLElement>;
    wrapperRef: MutableRefObject<HTMLElement>;
}

export function useInfiniteScroll(props: UseInfiniteScrollProps) {
    const observer = useRef<IntersectionObserver | null >(null);

    const {
        callback,
        triggerRef,
        wrapperRef,
    } = props;

    useEffect(() => {
        const triggerElement = triggerRef.current;
        const wrapperElement = wrapperRef.current;
        if (callback) {
            const options = {
                root: wrapperElement,
                rootMargin: '0px',
                threshold: 1.0,
            };

            observer.current = new IntersectionObserver(([entries]) => {
                if (entries.isIntersecting) {
                    callback();
                }
            }, options);

            observer.current.observe(triggerElement);
        }

        return () => {
            if (observer.current && triggerElement) {
                observer.current?.unobserve(triggerElement);
            }
        };
    }, [callback, triggerRef, wrapperRef]);
}
