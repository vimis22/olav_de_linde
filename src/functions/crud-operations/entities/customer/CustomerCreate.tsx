import firestore from '@react-native-firebase/firestore';
import {UserInfo} from '../../UserInfo.ts';
import auth from '@react-native-firebase/auth';

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


/**
 * Creates a new user with email and password in Firebase Authentication
 * @param email User's email
 * @param password User's password
 * @returns The user ID if successful
 */
export async function createCustomerAuth(email: string, password: string): Promise<string> {
  try {
    const credentials = await auth().createUserWithEmailAndPassword(email, password);
    const userId = credentials.user.uid;
    console.log('Creation of User: ' + credentials.user + ' succeeded with Firestore document');
    return userId;
  } catch (error: any) {
    console.log('An unexpected error occurred during signup in firebase authentication', error);
    throw error;
  }
}

/**
 * Creates a customer in Firestore with the given information
 * @param userId User ID from Firebase Authentication
 * @param customerInfo Customer information
 * @returns 1 if successful, -1 if error
 */
export const createCustomerData = async (
  userId: string,
  customerInfo: {
    name: string,
    email: string,
    password: string,
    confirmPassword?: string,
    companyName: string,
    cvrNumber: string,
    address: string,
    houseNumber: string,
    phoneNumber: string
  }
): Promise<number> => {
  try {
    if (!userId) {
      console.log('A User is not logged in');
      return -1;
    }

    await firestore().collection('Customer').doc(userId).set({
      name: customerInfo.name,
      email: customerInfo.email,
      password: customerInfo.password,
      confirmPassword: customerInfo.confirmPassword,
      companyname: customerInfo.companyName,
      cvrnumber: customerInfo.cvrNumber,
      address: customerInfo.address,
      housenumber: customerInfo.houseNumber,
      phone: customerInfo.phoneNumber,
      createAt: firestore.FieldValue.serverTimestamp(),
    });
    console.log('The Document has the following ID: ', userId);
    return 1;
  } catch (error) {
    console.log('An Error occurred while adding the following ID: ', error);
    return -1;
  }
};

/**
 * Creates a new customer with authentication and data storage
 * @param customerInfo Customer information
 * @returns The user ID if successful
 */
export const createCustomer = async (
  customerInfo: {
    name: string,
    email: string,
    password: string,
    confirmPassword?: string,
    companyName: string,
    cvrNumber: string,
    address: string,
    houseNumber: string,
    phoneNumber: string
  }
): Promise<string | number> => {
  try {
    const userId = await createCustomerAuth(customerInfo.email, customerInfo.password);
    const result = await createCustomerData(userId, customerInfo);

    if (result === 1) {
      console.log('The User has been created with the following Information: ' + userId);
      return userId;
    } else {
      return result;
    }
  } catch (error) {
    console.log('An Error occurred while creating the following User: ', error);
    throw error;
  }
};

