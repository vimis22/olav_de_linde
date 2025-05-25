import firestore from '@react-native-firebase/firestore';
import {UserInfo} from '../../UserInfo.ts';
import auth from '@react-native-firebase/auth';

export const deleteCustomerAccount = async () => {
  const user = await auth().currentUser;
  if (user) {
    try {
      await firestore().collection('Customer').doc(user.uid).delete();
      await user.delete();
      console.log('User account has been deleted');
    } catch (error) {
      console.log('An unexpected error occured during account deletion', error);
      throw error;
    }
  } else {
    console.log('A User has not logged in');
    throw new Error('User not logged in');
  }
};

export const deleteCustomerById = async (customerId: UserInfo) => {
    try {
        const docRef = firestore().collection('Customer').doc(customerId.id);
        const doc = await docRef.get();

        if (!doc.exists) {
            console.log('Customer with ID does not exist:', customerId.id);
            return -1;
        }

        await docRef.delete();
        console.log('Customer with ID successfully deleted:', customerId.id);
        return 1;
    } catch (error) {
        console.error('An Error occurred while deleting the customer by ID:', error);
        return -1;
    }
};

export const deleteCustomerByEmail = async (email: string) => {
    try {
        const snapShot = await firestore()
            .collection('Customer')
            .where('Email','==',email)
            .get();

        if (snapShot.empty){
            console.log('System is not able to find customer in the system');
        }

        const docRef = snapShot.docs[0].ref;
        const docId = snapShot.docs[0].id;

        await docRef.delete();
        return console.log('System has successfully deleted the customer by id: ', docId);
    } catch (error) {
        console.log('An Error occured while deleting the Customer by email: ',error);
        return -1;
    }
};
