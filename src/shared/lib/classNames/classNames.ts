export type Mods = Record<string, boolean | string | undefined>

export function classNames(
    cls: string,
    mods:Mods = {},
    additional: Array<string | undefined> = [],
):string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .reduce((result:string[], [className, mod]) => {
                if (mod) {
                    result.push(className);
                }
                return result;
            }, []),
    ].join(' ');
}
