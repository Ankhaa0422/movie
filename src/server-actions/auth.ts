import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { filmbridgeApp } from '@/firebase'

const auth = getAuth(filmbridgeApp)

export async function login(email:string = '', password:string = '') {
    let data:any = null, error:any = null, success:boolean = false
    try {
        data = await signInWithEmailAndPassword(auth, email, password)
        const idTokenResult = await data.user.getIdTokenResult();
        console.log(idTokenResult, data)
        await fetch("/api/login", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${idTokenResult.token}`,
            },
        });
        success = true
    } catch(e) {
        error = e
    }
    return { success, data: data?.user, error }
}

export async function logout() {
    await signOut(auth);
    // Removes authenticated cookies
    await fetch("/api/logout", {
      method: "GET",
    });
    window.location.reload();
}