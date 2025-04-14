import firestore from '@react-native-firebase/firestore';

export const updateMessageCustomerByChatId = async (OldChat_Id: string, NewChat_Id: string) => {
    try {
        const snapshot = await firestore()
            .collection('MessageCustomer')
            .where('Chat_Id','==',OldChat_Id)
            .get();

        if (snapshot.empty) {
            console.log('System is not able to recognize MessageCustomer information');
            return -2;
        }

        const batch = firestore().batch();

        snapshot.docs.forEach((doc) => {
            const docRef = firestore().collection('MessageCustomer').doc(doc.id);
            batch.update(docRef, {Chat_Id: NewChat_Id});
        });

        await batch.commit();
        console.log('System has updated ' + OldChat_Id + 'with: ' + NewChat_Id);
        return 1;
    } catch (error) {
        console.error('An Error occurred while updating the MessageCustomer by New Value', error);
        return -1;
    }
};

export const updateMessageCustomerByCustomerId = async (OldCustomer_Id: string, NewCustomer_Id: string) => {
    try {
        const snapshot = await firestore()
            .collection('MessageCustomer')
            .where('Customer_Id','==',OldCustomer_Id)
            .get();

        if (snapshot.empty) {
            console.log('System is not able to recognize MessageCustomer information');
            return -2;
        }

        const batch = firestore().batch();

        snapshot.docs.forEach((doc) => {
            const docRef = firestore().collection('MessageCustomer').doc(doc.id);
            batch.update(docRef, {Customer_Id: NewCustomer_Id});
        });

        await batch.commit();
        console.log('System has updated ' + OldCustomer_Id + 'with: ' + NewCustomer_Id);
        return 1;
    } catch (error) {
        console.error('An Error occurred while updating the MessageCustomer by New Value', error);
        return -1;
    }
};

export const updateMessageCustomerByMessage = async (OldMessage: string, NewMessage: string) => {
    try {
        const snapshot = await firestore()
            .collection('MessageCustomer')
            .where('Message','==',OldMessage)
            .get();

        if (snapshot.empty) {
            console.log('System is not able to recognize MessageCustomer information');
            return -2;
        }

        const batch = firestore().batch();

        snapshot.docs.forEach((doc) => {
            const docRef = firestore().collection('MessageCustomer').doc(doc.id);
            batch.update(docRef, {Message: NewMessage});
        });

        await batch.commit();
        console.log('System has updated ' + OldMessage + 'with: ' + NewMessage);
        return 1;
    } catch (error) {
        console.error('An Error occurred while updating the MessageCustomer by New Value', error);
        return -1;
    }
};

export const updateMessageCustomerByTimestamp = async (OldTimestamp: Date, NewTimestamp: Date) => {
    try {
        const snapshot = await firestore()
            .collection('MessageCustomer')
            .where('Timestamp','==',OldTimestamp)
            .get();

        if (snapshot.empty) {
            console.log('System is not able to recognize MessageCustomer information');
            return -2;
        }

        const batch = firestore().batch();

        snapshot.docs.forEach((doc) => {
            const docRef = firestore().collection('MessageCustomer').doc(doc.id);
            batch.update(docRef, {Timestamp: NewTimestamp});
        });

        await batch.commit();
        console.log('System has updated ' + OldTimestamp + 'with: ' + NewTimestamp);
        return 1;
    } catch (error) {
        console.error('An Error occurred while updating the MessageCustomer by New Value', error);
        return -1;
    }
};
