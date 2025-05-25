import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export async function loginCustomer(email: string, password: string) {
    try {
        const credentials = await auth().signInWithEmailAndPassword(email, password);
        const userId = credentials.user.uid;
        const docRef = await firestore().collection('Customer').doc(userId).get();
        const userInfoData = docRef.data();
        console.log('Login with Email: ' + userInfoData + ' succeeded');
        return credentials.user;
    } catch (error: any) {
        console.log('An unexpected error occurred in Login with Firestore and Authentication', error);
        throw error;
    }
}

export async function logoutCustomer() {
  try {
    await auth().signOut();
    console.log('User has been logged out');
  } catch (error) {
    console.log('An unexpected error occured during logout', error);
    throw error;
  }
}

export const getCustomerById = async (id: string) => {
    try {
        const doc = await firestore().collection('Customer').doc(id).get();
        if (doc.exists) {
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

export const getAllCustomerByName = async (name: string) => {
    try {
        const snapshot = await firestore()
            .collection('Customer')
            .where('Name','==',name)
            .get();
        return snapshot.docs.map((doc: {id: any; data: () => any}) => {
            return {id: doc.id, ...doc.data()};
        });
    } catch (error) {
        console.error('System is not able fetch by Customer Name', error);
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
