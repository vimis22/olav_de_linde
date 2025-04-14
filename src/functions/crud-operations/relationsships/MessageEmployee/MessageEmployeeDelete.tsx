import firestore from '@react-native-firebase/firestore';

export const deleteMessageEmployeeById = async (id: string) => {
    try {
        const docRef = firestore().collection('MessageEmployee').doc(id);
        const doc = await docRef.get();

        if (!doc.exists) {
            console.log('System has successfully deleted a relation MessageEmployee by Id', id);
            return 1;
        }

        await docRef.delete();
        return 1;
    } catch (error) {
        console.log('An Error occurred while deleting the MessageEmployee by id', error);
        return -1;
    }
};

export const deleteMessageEmployeeByChat = async (Chat_Id: string) => {
    try {
        const snapshot = await firestore()
            .collection('MessageEmployee')
            .where('Chat_Id','==',Chat_Id)
            .get();

        if (snapshot.empty) {
            console.log('System is not able to find chat_id in the system');
            return -2;
        }

        const docRef = snapshot.docs[0].ref;

        await docRef.delete();
        console.log('System has successfully deleted the MessageEmployee by chat_id');
        return 1;
    } catch (error) {
        console.log('An Error occurred while deleting the MessageEmployee by chat_id', error);
        return -1;
    }
};

export const deleteMessageEmployeeByEmployee = async (Employee_Id: string) => {
    try {
        const snapshot = await firestore()
            .collection('MessageEmployee')
            .where('Employee_Id','==',Employee_Id)
            .get();

        if (snapshot.empty) {
            console.log('System is not able to find employee_id in the system');
            return -2;
        }

        const docRef = snapshot.docs[0].ref;

        await docRef.delete();
        console.log('System has successfully deleted the MessageEmployee by employee_id');
        return 1;
    } catch (error) {
        console.log('An Error occurred while deleting the MessageEmployee by employee_id', error);
        return -1;
    }
};

export const deleteMessageEmployeeByMessage = async (Message: string) => {
    try {
        const snapshot = await firestore()
            .collection('MessageEmployee')
            .where('Message','==',Message)
            .get();

        if (snapshot.empty) {
            console.log('System is not able to find message in the system');
            return -2;
        }

        const docRef = snapshot.docs[0].ref;

        await docRef.delete();
        console.log('System has successfully deleted the MessageEmployee by message');
        return 1;
    } catch (error) {
        console.log('An Error occurred while deleting the MessageEmployee by message', error);
        return -1;
    }
};

export const deleteMessageEmployeeByTimestamp = async (Timestamp: Date) => {
    try {
        const snapshot = await firestore()
            .collection('MessageEmployee')
            .where('Timestamp','==',Timestamp)
            .get();

        if (snapshot.empty) {
            console.log('System is not able to find timestamp in the system');
            return -2;
        }

        const docRef = snapshot.docs[0].ref;

        await docRef.delete();
        console.log('System has successfully deleted the MessageEmployee by timestamp');
        return 1;
    } catch (error) {
        console.log('An Error occurred while deleting the MessageEmployee by timestamp', error);
        return -1;
    }
};

export const deleteMessageEmployeeByChatEmployeeMessageTimestamp = async (Chat_Id: string, Employee_Id: string, Message: string, Timestamp: Date) => {
    try {
        const snapshot = await firestore()
            .collection('MessageCustomer')
            .where('Chat_Id','==',Chat_Id)
            .where('Employee_Id','==',Employee_Id)
            .where('Message','==',Message)
            .where('Timestamp','==',Timestamp)
            .get();

        if (snapshot.empty) {
            console.log('System is not able to find chat_id, employee_id, message and timestamp in the system');
            return -2;
        }

        const docRef = snapshot.docs[0].ref;

        await docRef.delete();
        console.log('System has successfully deleted the MessageEmployee by chat_id, employee_id, message and timestamp');
        return 1;
    } catch (error) {
        console.log('An Error occurred while deleting the MessageEmployee by chat_id, employee_id, message and timestamp', error);
        return -1;
    }
};
