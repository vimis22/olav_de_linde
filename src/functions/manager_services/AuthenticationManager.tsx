import auth from '@react-native-firebase/auth';
import {createCustomerWithEmail} from '../crud-operations/entities/customer/CustomerCreate.tsx';

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


export async function signupWithEmail(email: string, password: string, companyName: string, cvrnumber: number, name?: string, phone?: string, address?: string, housenumber?: number,) {
  try {
    const credentials = await auth().createUserWithEmailAndPassword(email, password);
    const userData = {
      companyName,
      name,
      email,
      password,
      phone,
      address,
      cvrnumber,
      housenumber,
      userId: credentials.user.uid,
      createdAt: new Date().toISOString(),
      isActive: true,
    };
    await createCustomerWithEmail(email, password, userData);
    console.log(`Creation of User: ${credentials.user.email} succeeded with Firestore document`);
    return credentials.user;
  } catch (error: any) {
    console.log('An unexpected error occurred during signup or document creation', error?.code, error?.message);
    throw error;
  }
};
