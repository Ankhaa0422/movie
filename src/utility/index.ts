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

export const omdbApiCall = (id:string) => {
    return new Promise(resolve => {
        getFilmInfo(id, resolve)
    })
}

async function getFilmInfo(id:string, resolve:Function) {
    await fetch(`http://www.omdbapi.com/?i=${id}&plot=full&apikey=${process.env.OMDB_API}`).then(result => {
        result.json().then(movie => {
            return resolve(movie)
        })
    })
}

export function deepClone(data: object | Array<any>) {
    return JSON.parse(JSON.stringify(data))
}