type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods:Mods = {}, additional: string[] = []):string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .reduce((result, [className, mod]) => {
                if (mod) {
                    result.push(className);
                }
                return result;
            }, []),
    ].join(' ');
}
