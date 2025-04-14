import firestore from '@react-native-firebase/firestore';

export const readMessageEmployeeById = async (id: string) => {
    try {
        const doc = await firestore().collection('MessageEmployee').doc(id).get();
        if (doc.exists) {
            return {id: doc.id, ...doc.data()};
        } else {
            console.log('MessageEmployee does not exist');
            return {id: -2};
        }
    } catch (error) {
        console.log('System is not able to fetch MessageEmployee by Id', error);
        return {id: -1};
    }
};

export const readMessageEmployeeByChatId = async (Chat_Id: string) => {
    try {
        const snapshot = await firestore()
            .collection('MessageEmployee')
            .where('Chat_Id','==',Chat_Id)
            .get();
        return snapshot.docs.map((doc: {id: any, data: () => any}) => ({
            id: doc.id,
            ...doc.data(),
        }));
    } catch (error) {
        console.error('System is not able to fetch MessageEmployee by Chat_Id', error);
        return -1;
    }
};

export const readMessageEmployeeByEmployeeId = async (Employee_Id: string) => {
    try {
        const snapshot = await firestore()
            .collection('MessageEmployee')
            .where('Employee_Id','==',Employee_Id)
            .get();
        return snapshot.docs.map((doc: {id: any, data: () => any}) => ({
            id: doc.id,
            ...doc.data(),
        }));
    } catch (error) {
        console.error('System is not able to fetch MessageEmployee by Employee_Id', error);
        return -1;
    }
};

export const readMessageEmployeeByMessage = async (Message: string) => {
    try {
        const snapshot = await firestore()
            .collection('MessageEmployee')
            .where('Message','==',Message)
            .get();
        return snapshot.docs.map((doc: {id: any, data: () => any}) => ({
            id: doc.id,
            ...doc.data(),
        }));
    } catch (error) {
        console.error('System is not able to fetch MessageEmployee by Message', error);
        return -1;
    }
};

export const readMessageEmployeeByTimestamp = async (Timestamp: Date) => {
    try {
        const snapshot = await firestore()
            .collection('MessageEmployee')
            .where('Timestamp','==',Timestamp)
            .get();
        return snapshot.docs.map((doc: {id: any, data: () => any}) => ({
            id: doc.id,
            ...doc.data(),
        }));
    } catch (error) {
        console.error('System is not able to fetch MessageEmployee by Timestamp', error);
        return -1;
    }
};
