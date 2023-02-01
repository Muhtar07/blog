type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods:Mods, additional: string[]):string {
    return [
        cls,
        ...additional,
        ...Object.entries(mods)
           .reduce((result, [className, mod]) => {
               mod ? result.push(className) : result
               return result
           }, [])
    ].join(' ')
}


