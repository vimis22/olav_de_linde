import {auth} from '../../FirebaseConfig.ts';
export async function loginWithEmail(email: string, password: string){
    try{
        const credentials = await auth().signInWithEmailAndPassword(email, password);
        console.log(credentials);
        return credentials.user;
    } catch (error: unknown){
        console.log('An unexpected error occured at Login', error);
    }
}

export async function signupWithEmail(email: string, password: string){
    try{
        const credentials = await auth().createUserWithEmailAndPassword(email, password);
        console.log(credentials);
        return credentials.user;
    } catch (error: unknown){
        console.log('An unexpected error occured at signup', error);
    }
}

