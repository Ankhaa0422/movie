import { db, storage } from "@/firebase";
import { collection, addDoc, getDocs, doc, getDoc, query, where, limit, deleteDoc, updateDoc, startAfter } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes, uploadString } from "firebase/storage";
import { deepClone, isNullOrUndefined } from "@/utility";
export async function addFilm (data:any) {
    try {
        const cloneData = deepClone(data)
        cloneData['Images'] = await uploadImage(cloneData['Images'], cloneData['Title'])
        const dataRef = await addDoc(collection(db, 'films'), cloneData)
        return true
    } catch(e) {
        console.error(e)
        return false 
    }
}

export async function uploadImage(files:any, title:string) {
    try {
        const uploadPromises = files.map((data:any) => {
            const storageRef = ref(storage, `image/${data.name}`)
            return uploadString(storageRef, data.blob, 'data_url')
            
        })
        const result = await Promise.all(uploadPromises)
        const links = await Promise.all(result.map((x) => getDownloadURL(x.ref)))
        return links
    } catch(e) {
        console.error(e)
        return []
    }
}

export async function getFilmList(status:string|null) {
    try {
        const result:any = {
            datas: [],
            lastKey: undefined
        }
        const queryParam = !isNullOrUndefined(status) ? status : null
        const dataRef = await collection(db, 'films')
        const queryResult = await query(dataRef, where('Status', status ? '==' : '!=', queryParam))
        const queryData = await getDocs(queryResult)
        queryData.forEach((doc:any) => {
            result.datas.push({id: doc.id, ...doc.data()})
            result.lastKey = doc.id
        })
        return result
    } catch(e) {
        console.error(e)
        return []
    }
}


export async function getFilmWithFromList(status:string|null, lastKey:any) {
    try {
        const result:any = {
            datas: [],
            lastKey: undefined
        }
        const queryParam = !isNullOrUndefined(status) ? status : null
        const dataRef = await collection(db, 'films')
        const queryResult = await query(dataRef, where('Status', status ? '==' : '!=', queryParam), startAfter(lastKey))
        const queryData = await getDocs(queryResult)
        queryData.forEach((doc:any) => {
            result.datas.push({id: doc.id, ...doc.data()})
            result.lastKey = doc.id
        })
        return result
    } catch(e) {
        console.error(e)
        return []
    }
}

export async function getFilmInfo (id:string) {
    try {
        const queryResult = await doc(db, 'films', id)
        let result:any
        await getDoc(queryResult).then(data => {
            if(data.exists()) {
                result = data.data()
            } else {
                result = undefined
            }
        })

        return result
        
    } catch(e) {
        console.error(e)
        return undefined
    }
} 

export async function getHomeList () {
    try {
        let result:any ={
            sliderData: [],
            onStreamData: [],
            upcomingData: [],
            inTheaterData: [],
            originalData: [],
        }
        const dataRef = await collection(db, 'films')
        const sliderData = await query(dataRef, limit(5))
        const onStreamData = await query(dataRef, where('Status', '==', 'onstream'), limit(14))
        const upcomingData = await query(dataRef, where('Status', '==', 'upcoming'), limit(14))
        const inTheaterData = await query(dataRef, where('Status', '==', 'intheater'), limit(14))
        const originalContent = await query(dataRef, where('Type', '==', 'original'), limit(14))
        const sliderDataQuery = await getDocs(sliderData)
        const onStreamDataQuery = await getDocs(onStreamData)
        const upcomingDataQuery = await getDocs(upcomingData)
        const inTheaterDataQuery = await getDocs(inTheaterData)
        const originalContentQuery = await getDocs(originalContent)
        sliderDataQuery.forEach(data => {
            if(data.exists()) {
                result.sliderData.push({id:data.id, ...data.data()})
            }
        })
        onStreamDataQuery.forEach(data => {
            if(data.exists()) {
                result.onStreamData.push({id:data.id, ...data.data()})
            }
        })
        upcomingDataQuery.forEach(data => {
            if(data.exists()) {
                result.upcomingData.push({id:data.id, ...data.data()})
            }
        })
        inTheaterDataQuery.forEach(data => {
            if(data.exists()) {
                result.inTheaterData.push({id:data.id, ...data.data()})
            }
        })
        originalContentQuery.forEach(data => {
            if(data.exists()) {
                result.originalData.push({id:data.id, ...data.data()})
            }
        })
        return result
    } catch(e) {
        console.error(e)
        return undefined
    }
}

export async function uploadPoster(file:any, blob:string) {
    try {
        const storageRef = ref(storage, `poster/${file.name}`)
        const posterRef = uploadString(storageRef, blob, 'data_url')
        const link = getDownloadURL((await posterRef).ref)
        return link
    } catch(e) {
        console.error(e)
        return []
    }
}

export async function deleteFilm(id:string) {
    try {
        const res = await deleteDoc(doc(db, 'films', id))
        return true
    } catch(e) {
        console.error(e)
        return false
    }
}

export async function updateFilm(id:string, data:any) {
    try {
        const res = await updateDoc(doc(db, 'films', id), data)
        return true
    } catch(e) {
        console.error(e)
        return false
    }
}