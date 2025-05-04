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

export async function updateLoginWithCredentials(password: string){
  const user = await auth().currentUser;
  if (user) {
    try {
      await user.updatePassword(password);
      console.log('Password has been updated');
    } catch (error) {
      console.log('An unexpected error occured during password update', error);
    }
  } else {
    console.log('A User is not logged in');
  }
}

export const resetPasswordWithEmail = async (email: string) => {
  try {
    await auth().sendPasswordResetEmail(email);
    console.log('Reset link has been sent to: ', email);
  } catch (error) {
    console.log('An Error occurred while sending the email', error);
  }
};

export const deleteUser = async () => {
  const user = await auth().currentUser;
  if (user) {
    try {
      await user.delete();
      console.log('Password has been deleted');
    } catch (error) {
      console.log('An unexpected error occured during account deletion', error);
    }
  } else {
    console.log('A User has not logged in');
  }
}
