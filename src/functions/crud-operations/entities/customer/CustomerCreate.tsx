import firestore from '@react-native-firebase/firestore';
import {UserInfo} from '../../UserInfo.ts';
import auth from '@react-native-firebase/auth';
import {EnumMessages} from '../../EnumMessages.ts';

export const createAllCustomers = async (allCustomersInfo: UserInfo[]): Promise<string> => {
    try {
        if (!allCustomersInfo || allCustomersInfo.length === 0) {
            return EnumMessages(-2);
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
        return EnumMessages(1);
    } catch (error) {
        console.error('An Error occured in createCustomer', error);
        return EnumMessages(-1);
    }
};


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

export const createCustomerData = async (userId: string, customerInfo: UserInfo): Promise<string> => {
  try {
    if (!userId) {
      console.log('A User is not logged in');
      return EnumMessages(-1);
    }

    await firestore().collection('Customer').doc(userId).set({
      name: customerInfo.name,
      email: customerInfo.email,
      password: customerInfo.password,
      companyname: customerInfo.companyName,
      cvrnumber: customerInfo.cvrnumber,
      address: customerInfo.address,
      housenumber: customerInfo.housenumber,
      phone: customerInfo.phone,
      createAt: firestore.FieldValue.serverTimestamp(),
    });
    console.log('The Document has the following ID: ', userId);
    return EnumMessages(1);
  } catch (error) {
    console.log('An Error occurred while adding the following ID: ', error);
    return EnumMessages(-1);
  }
};

export const createCustomer = async (
  customerInfo: UserInfo
): Promise<string> => {
  try {
    if (!customerInfo.email || !customerInfo.password) {
      return EnumMessages(-1);
    }
    const userId = await createCustomerAuth(customerInfo.email, customerInfo.password);
    const result = await createCustomerData(userId, customerInfo);

    if (result === EnumMessages(1)){
      console.log('The User has been created with the following Information: ' + userId);
      return userId;
    } else {
      return result;
    }
  } catch (error) {
    console.log('An Error occurred while creating the following User: ', error);
    return EnumMessages(-1);
  }
};
