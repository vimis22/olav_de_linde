import firestore from '@react-native-firebase/firestore';

export const getCustomerById = async (id: string) => {
    try{
        const doc = await firestore().collection('Customer').doc(id).get();
        if (doc.exists) {
            //Dette her return er default.
            return {id: doc.id, ...doc.data()};
        } else {
            console.log('Customer does not exist');
            return {id: -1};
        }
    } catch (error) {
        console.log('System is not able to fetch Customer by Id', error);
        return {id: -2};
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
        console.error('System is not able fetch by Customer Firstname', error);
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
        console.error('System is not able fetch by Customer Lastname', error);
        return {id: -2};
    }
};

export const getAllCustomerByEmail = async (email: string) => {
    try {
        const snapshot = await firestore()
            .collection('Customer')
            .where('Email','==',email)
            .get();
        return snapshot.docs.map((doc: {id: any; data: () => any}) => ({
            id: doc.id,
            ...doc.data(),
        }));
    } catch (error) {
        console.error('System is not able fetch Customer by Email', error);
        return {id: -2};
    }
};

