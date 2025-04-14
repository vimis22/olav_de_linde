import firestore from '@react-native-firebase/firestore';

export const deleteMessageCustomerById = async (id: string) => {
    try {
        const docRef = firestore().collection('MessageCustomer').doc(id);
        const doc = await docRef.get();

        if (!doc.exists) {
            console.log('System has successfully deleted a relation MessageCustomer by Id', id);
            return 1;
        }

        await docRef.delete();
        return 1;
    } catch (error) {
        console.log('An Error occurred while deleting the MessageCustomer by id', error);
        return -1;
    }
};

export const deleteMessageCustomerByChat = async (Chat_Id: string) => {
    try {
        const snapshot = await firestore()
            .collection('MessageCustomer')
            .where('Chat_Id','==',Chat_Id)
            .get();

        if (snapshot.empty) {
            console.log('System is not able to find chat_id in the system');
            return -2;
        }

        const docRef = snapshot.docs[0].ref;

        await docRef.delete();
        console.log('System has successfully deleted the MessageCustomer by chat_id');
        return 1;
    } catch (error) {
        console.log('An Error occurred while deleting the MessageCustomer by chat_id', error);
        return -1;
    }
};

export const deleteMessageCustomerByCustomer = async (Customer_Id: string) => {
    try {
        const snapshot = await firestore()
            .collection('MessageCustomer')
            .where('Customer_Id','==',Customer_Id)
            .get();

        if (snapshot.empty) {
            console.log('System is not able to find customer_id in the system');
            return -2;
        }

        const docRef = snapshot.docs[0].ref;

        await docRef.delete();
        console.log('System has successfully deleted the MessageCustomer by customer_id');
        return 1;
    } catch (error) {
        console.log('An Error occurred while deleting the MessageCustomer by customer_id', error);
        return -1;
    }
};

export const deleteMessageCustomerByMessage = async (Message: string) => {
    try {
        const snapshot = await firestore()
            .collection('MessageCustomer')
            .where('Message','==',Message)
            .get();

        if (snapshot.empty) {
            console.log('System is not able to find message in the system');
            return -2;
        }

        const docRef = snapshot.docs[0].ref;

        await docRef.delete();
        console.log('System has successfully deleted the MessageCustomer by message');
        return 1;
    } catch (error) {
        console.log('An Error occurred while deleting the MessageCustomer by message', error);
        return -1;
    }
};

export const deleteMessageCustomerByTimestamp = async (Timestamp: Date) => {
    try {
        const snapshot = await firestore()
            .collection('MessageCustomer')
            .where('Timestamp','==',Timestamp)
            .get();

        if (snapshot.empty) {
            console.log('System is not able to find timestamp in the system');
            return -2;
        }

        const docRef = snapshot.docs[0].ref;

        await docRef.delete();
        console.log('System has successfully deleted the MessageCustomer by timestamp');
        return 1;
    } catch (error) {
        console.log('An Error occurred while deleting the MessageCustomer by timestamp', error);
        return -1;
    }
};

export const deleteMessageCustomerByChatCustomerMessageTimestamp = async (Chat_Id: string, Customer_Id: string, Message: string, Timestamp: Date) => {
    try {
        const snapshot = await firestore()
            .collection('MessageCustomer')
            .where('Chat_Id','==',Chat_Id)
            .where('Customer_Id','==',Customer_Id)
            .where('Message','==',Message)
            .where('Timestamp','==',Timestamp)
            .get();

        if (snapshot.empty) {
            console.log('System is not able to find chat_id, customer_id, message and timestamp in the system');
            return -2;
        }

        const docRef = snapshot.docs[0].ref;

        await docRef.delete();
        console.log('System has successfully deleted the MessageCustomer by chat_id, customer_id, message and timestamp');
        return 1;
    } catch (error) {
        console.log('An Error occurred while deleting the MessageCustomer by chat_id, customer_id, message and timestamp', error);
        return -1;
    }
};
