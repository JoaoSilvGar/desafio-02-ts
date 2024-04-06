export const sum = (num: number): number => {
    return num + 1
}

export const multiply = (num:number, mult:number): number | string => {
    return (mult === 2 || mult === 3) ? num * mult : "Multiplicador não aceito"
}