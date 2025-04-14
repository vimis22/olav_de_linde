import firestore from '@react-native-firebase/firestore';

export const readMessageCustomerById = async (id: string) => {
    try {
        const doc = await firestore().collection('MessageCustomer').doc(id).get();
        if (doc.exists) {
            return {id: doc.id, ...doc.data()};
        } else {
            console.log('MessageCustomer does not exist');
            return {id: -2};
        }
    } catch (error) {
        console.log('System is not able to fetch MessageCustomer by Id', error);
        return {id: -1};
    }
};

export const readMessageCustomerByChatId = async (Chat_Id: string) => {
    try {
        const snapshot = await firestore()
            .collection('MessageCustomer')
            .where('Chat_Id','==',Chat_Id)
            .get();
        return snapshot.docs.map((doc: {id: any, data: () => any}) => ({
            id: doc.id,
            ...doc.data(),
        }));
    } catch (error) {
        console.error('System is not able to fetch MessageCustomer by Chat_Id', error);
        return -1;
    }
};

export const readMessageCustomerByCustomerId = async (Customer_Id: string) => {
    try {
        const snapshot = await firestore()
            .collection('MessageCustomer')
            .where('Customer_Id','==',Customer_Id)
            .get();
        return snapshot.docs.map((doc: {id: any, data: () => any}) => ({
            id: doc.id,
            ...doc.data(),
        }));
    } catch (error) {
        console.error('System is not able to fetch MessageCustomer by Customer_Id', error);
        return -1;
    }
};

export const readMessageCustomerByMessage = async (Message: string) => {
    try {
        const snapshot = await firestore()
            .collection('MessageCustomer')
            .where('Message','==',Message)
            .get();
        return snapshot.docs.map((doc: {id: any, data: () => any}) => ({
            id: doc.id,
            ...doc.data(),
        }));
    } catch (error) {
        console.error('System is not able to fetch MessageCustomer by Message', error);
        return -1;
    }
};

export const readMessageCustomerByTimestamp = async (Timestamp: Date) => {
    try {
        const snapshot = await firestore()
            .collection('MessageCustomer')
            .where('Timestamp','==',Timestamp)
            .get();
        return snapshot.docs.map((doc: {id: any, data: () => any}) => ({
            id: doc.id,
            ...doc.data(),
        }));
    } catch (error) {
        console.error('System is not able to fetch MessageCustomer by Timestamp', error);
        return -1;
    }
};
