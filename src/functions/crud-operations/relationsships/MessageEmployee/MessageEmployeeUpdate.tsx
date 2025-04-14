import firestore from '@react-native-firebase/firestore';

export const updateMessageEmployeeByChatId = async (OldChat_Id: string, NewChat_Id: string) => {
    try {
        const snapshot = await firestore()
            .collection('MessageEmployee')
            .where('Chat_Id','==',OldChat_Id)
            .get();

        if (snapshot.empty) {
            console.log('System is not able to recognize MessageEmployee information');
            return -2;
        }

        const batch = firestore().batch();

        snapshot.docs.forEach((doc) => {
            const docRef = firestore().collection('MessageEmployee').doc(doc.id);
            batch.update(docRef, {Chat_Id: NewChat_Id});
        });

        await batch.commit();
        console.log('System has updated ' + OldChat_Id + 'with: ' + NewChat_Id);
        return 1;
    } catch (error) {
        console.error('An Error occurred while updating the MessageEmployee by New Value', error);
        return -1;
    }
};

export const updateMessageEmployeeByEmployeeId = async (OldEmployee_Id: string, NewEmployee_Id: string) => {
    try {
        const snapshot = await firestore()
            .collection('MessageEmployee')
            .where('Employee_Id','==',OldEmployee_Id)
            .get();

        if (snapshot.empty) {
            console.log('System is not able to recognize MessageEmployee information');
            return -2;
        }

        const batch = firestore().batch();

        snapshot.docs.forEach((doc) => {
            const docRef = firestore().collection('MessageEmployee').doc(doc.id);
            batch.update(docRef, {Customer_Id: NewEmployee_Id});
        });

        await batch.commit();
        console.log('System has updated ' + OldEmployee_Id + 'with: ' + NewEmployee_Id);
        return 1;
    } catch (error) {
        console.error('An Error occurred while updating the MessageEmployee by New Value', error);
        return -1;
    }
};

export const updateMessageCustomerByMessage = async (OldMessage: string, NewMessage: string) => {
    try {
        const snapshot = await firestore()
            .collection('MessageEmployee')
            .where('Message','==',OldMessage)
            .get();

        if (snapshot.empty) {
            console.log('System is not able to recognize MessageEmployee information');
            return -2;
        }

        const batch = firestore().batch();

        snapshot.docs.forEach((doc) => {
            const docRef = firestore().collection('MessageEmployee').doc(doc.id);
            batch.update(docRef, {Message: NewMessage});
        });

        await batch.commit();
        console.log('System has updated ' + OldMessage + 'with: ' + NewMessage);
        return 1;
    } catch (error) {
        console.error('An Error occurred while updating the MessageEmployee by New Value', error);
        return -1;
    }
};

export const updateMessageCustomerByTimestamp = async (OldTimestamp: Date, NewTimestamp: Date) => {
    try {
        const snapshot = await firestore()
            .collection('MessageEmployee')
            .where('Timestamp','==',OldTimestamp)
            .get();

        if (snapshot.empty) {
            console.log('System is not able to recognize MessageEmployee information');
            return -2;
        }

        const batch = firestore().batch();

        snapshot.docs.forEach((doc) => {
            const docRef = firestore().collection('MessageEmployee').doc(doc.id);
            batch.update(docRef, {Timestamp: NewTimestamp});
        });

        await batch.commit();
        console.log('System has updated ' + OldTimestamp + 'with: ' + NewTimestamp);
        return 1;
    } catch (error) {
        console.error('An Error occurred while updating the MessageEmployee by New Value', error);
        return -1;
    }
};
