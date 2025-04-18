import firestore from '@react-native-firebase/firestore';
import {UserInfo} from '../../UserInfo.ts';

export const deleteCustomerById = async (customerId: UserInfo) => {
    try {
        const docRef = firestore().collection('Customer').doc(customerId.id);
        const doc = await docRef.get();

        if (!doc.exists) {
            console.log('System has successfully deleted the customer by the email', customerId.id);
        }

        await docRef.delete();
        return 1;
    } catch (error) {
        console.log('An Error occurred while updating the employee by ID', error);
        return -1;
    }
};

export const getAllCustomer = async () => {
    try{
        const snapshot = await firestore().collection('Customer').get();
        return snapshot.docs.map((doc: {id: any; data: () => any}) => {
            return {id: doc.id, ...doc.data()};
        });
    } catch (error) {
        console.log('System is not able fetch all Customers', error);
        return {id: -2};
    }
};

export const getAllCustomerByFirstname = async (firstname: string) => {
    try {
        const snapshot = await firestore()
            .collection('Customer')
            .where('Firstname','==',firstname)
            .get();
        return snapshot.docs.map((doc: {id: any; data: () => any}) => {
            return {id: doc.id, ...doc.data()};
        });
    } catch (error) {
        console.error('System is not able to fetch by Firstname', error);
        return {id: -2};
    }
};

export const getAllCustomerByLastname = async (lastname: string) => {
    try {
        const snapshot = await firestore()
            .collection('Customer')
            .where('Lastname','==',lastname)
            .get();
        return snapshot.docs.map((doc: {id: any; data: () => any}) => ({
            id: doc.id,
            ...doc.data(),
        }));
    } catch (error) {
        console.error('System is not able fetch by Lastname', error);
        return {id: -2};
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
