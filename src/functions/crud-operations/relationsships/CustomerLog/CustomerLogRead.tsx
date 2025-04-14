import firestore from '@react-native-firebase/firestore';

export const readCustomerLogById = async (id: string) => {
    try {
        const doc = await firestore().collection('CustomerLog').doc(id).get();
        if (doc.exists) {
            return {id: doc.id, ...doc.data()};
        } else {
            console.log('CustomerLog does not exist');
            return {id: -2};
        }
    } catch (error) {
        console.log('System is not able to fetch CustomerLog by Id', error);
        return {id: -1};
    }
};

export const readCustomerLogByCustomerId = async (Customer_Id: string) => {
    try {
        const snapshot = await firestore()
            .collection('CustomerLog')
            .where('Customer_Id','==',Customer_Id)
            .get();
        return snapshot.docs.map((doc: {id: any; data: () => any}) => ({
            id: doc.id,
            ...doc.data(),
        }));
    } catch (error) {
        console.error('System is not able to fetch CustomerLog', error);
        return {id: -2};
    }
};

export const readCustomerLogByLogId = async (Log_Id: string) => {
    try {
        const snapshot = await firestore()
            .collection('CustomerLog')
            .where('Log_Id','==',Log_Id)
            .get();
        return snapshot.docs.map((doc: {id: any; data: () => any}) => ({
            id: doc.id,
            ...doc.data(),
        }));
    } catch (error) {
        console.error('System is not able to fetch CustomerLog', error);
        return {id: -1};
    }
};
