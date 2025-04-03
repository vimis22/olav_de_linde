import auth from '@react-native-firebase/auth';


export async function loginWithEmail(email: string, password: string){
    try{
        const credentials = await auth().signInWithEmailAndPassword(email, password);
        console.log(`Login with Email: ${credentials.user.email} succeeded`);
        return credentials.user;
    } catch (error: any){
        console.log('An unexpected error occured at Login', error?.code, error?.message);
        throw error;
    }
}


export async function signupWithEmail(email: string, password: string){
    try{
        const credentials = await auth().createUserWithEmailAndPassword(email, password);
        console.log(`Creation of User: ${credentials.user.email} succeeded`);
        return credentials.user;
    } catch (error: any){
        console.log('An unexpected error occured at signup', error?.code, error?.message);
        throw error;
    }
}
