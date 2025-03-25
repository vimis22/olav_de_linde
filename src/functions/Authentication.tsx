import auth from '@react-native-firebase/auth';

export async function loginWithEmail(email: string, password: string){
    try{
        const credentials = await auth().signInWithEmailAndPassword(email, password);
        return credentials.user;
    } catch (error: unknown){
        console.log('An unexpected error occured at Login', error);
    }
}

export async function signupWithEmail(email: string, password: string){
    try{
        const credentials = await auth().createUserWithEmailAndPassword(email, password);
        return credentials.user;
    } catch (error: unknown){
        console.log('An unexpected error occured at signup', error);
    }
}

