export const isNullOrUndefined = (utga:any) => {
    return utga === undefined || utga === null
}

export const cycleArray = (array: unknown[]) => {
    const newArray = [...array];
    newArray.push(newArray.shift());
    return newArray;
};