import firestore from '@react-native-firebase/firestore';
import {UserInfo} from '../../UserInfo.ts';
import auth from '@react-native-firebase/auth';
// These imports are for reference to match the example in the issue description
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth, db } from "./firebase";
// import { doc, setDoc } from "firebase/firestore";

export const createAllCustomers = async (allCustomersInfo: UserInfo[]): Promise<number> => {
    try {
        if (!allCustomersInfo || allCustomersInfo.length === 0) {
            return -2;
        }

        const batch = firestore().batch();

        allCustomersInfo.forEach(customer => {
            const customerRef = firestore().collection('Customer').doc(customer.id);
            batch.set(customerRef, {
                address: customer.address,
                email: customer.email,
                name: customer.name,
                housenumber: customer.housenumber,
                companyname: customer.companyName,
                cvrnumber: customer.cvrnumber,
                phone: customer.phone,
                password: customer.password,
                createAt: firestore.FieldValue.serverTimestamp(),
            });
        });
        await batch.commit();
        return 1;
    } catch (error) {
        console.error('An Error occured in createCustomer', error);
        return -1;
    }
};

export async function createCustomerWithEmail(email: string, password: string, userData: any): Promise<number> {
  try {
    //Here a usual account has been made
    const userCredential = await auth().createUserWithEmailAndPassword(email, password);
    const uid = userCredential.user.uid;

    //Dette her gemmer ekstra data, som vi kan anvende i firestore efterfølgende.
    const customerRef = firestore().collection('Customer').doc(uid);
    const customerData = {
      email: email,
      // Her gemmer vi ekstra filer som vi ønsker, at gemme.
      address: userData?.address ,
      phone: userData?.phone,
      fullName: userData?.fullName,
      name: userData?.name || userData?.fullName,
      companyname: userData?.companyname,
      cvrnumber: userData?.cvrnumber,
      housenumber: userData?.housenumber,
      createdAt: firestore.FieldValue.serverTimestamp(),
    };
    await customerRef.set(customerData);

    console.log('A Customer has been successfully created at :', uid);
    return 0;
  } catch (error) {
    console.error('Fejl under oprettelse:', error);
    return -1;
  }
}

// export async function createCustomerWithEmail(email: string, password: string, userData?: any): Promise<number> {
//   try {
//     const credentials = await auth().createUserWithEmailAndPassword(email, password);
//     const {uid} = credentials.user;
//     const customerRef = firestore().collection('Customer').doc(uid);
//     const customerData = {
//       email: email,
//       password: password,
//       firstName: userData?.firstName || '',
//       lastName: userData?.lastName || '',
//       companyname: userData?.companyName || '',
//       address: userData?.address || '',
//       cvrnumber: userData?.cvrNumber || 0,
//       phone: userData?.phoneNumber || '',
//       floor: userData?.floor || '',
//       sharesAddress: userData?.sharesAddress || false,
//       createAt: firestore.FieldValue.serverTimestamp(),
//       isActive: userData?.isActive || true,
//     };
//     await customerRef.set(customerData);
//
//     console.log(`Customer document created for user: ${uid}`);
//     return 0;
//   } catch (error) {
//     console.error('An Error occured in createCustomerWithEmail:', error);
//     return -1;
//   }
// }
