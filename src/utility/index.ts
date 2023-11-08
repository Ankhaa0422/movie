export const zurgiinTogtmol = {
    WIDTH: 300,
    HEIGHT: 450
}

export const isNullOrUndefined = (utga:any) => {
    return utga === undefined || utga === null
}

export const cycleArray = (array: unknown[]) => {
    const newArray = [...array];
    newArray.push(newArray.shift());
    return newArray;
};

export const defaultZurgiinKhemjeegeerHeightBodyo = (urt:number) => {
    const zurgiinRatio = zurgiinTogtmol.WIDTH / zurgiinTogtmol.HEIGHT
    return urt / zurgiinRatio
}