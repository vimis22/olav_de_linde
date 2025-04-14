import firestore from '@react-native-firebase/firestore';

export const updateCustomerLogByCustomerId = async (OldCustomer_Id: string, NewCustomer_Id: string) => {
    try {
        const snapshot = await firestore()
            .collection('CustomerLog')
            .where('Customer_Id','==',OldCustomer_Id)
            .get();

        if (snapshot.empty) {
            console.log('System is not able to recognize customerlog information');
            return -2;
        }

        const batch = firestore().batch();

        snapshot.docs.forEach((doc) => {
            const docRef = firestore().collection('CustomerLog').doc(doc.id);
            batch.update(docRef, {Customer_Id: NewCustomer_Id});
        });

        await batch.commit();
        console.log('System has updated ' + OldCustomer_Id + 'with: ' + NewCustomer_Id);
        return 1;
    } catch (error) {
        console.error('An Error occurred while updating the CustomerLog by New Value', error);
        return -1;
    }
};

export const updateCustomerLogByLogId = async (OldLog_Id: string, NewLog_Id: string) => {
    try {
        const snapshot = await firestore()
            .collection('CustomerLog')
            .where('Log_Id','==',OldLog_Id)
            .get();

        if (snapshot.empty) {
            console.log('System is not able to recognize customerlog information');
            return -2;
        }

        const batch = firestore().batch();

        snapshot.docs.forEach((doc) => {
            const docRef = firestore().collection('CustomerLog').doc(doc.id);
            batch.update(docRef, {Log_Id: NewLog_Id});
        });

        await batch.commit();
        console.log('System has updated ' + OldLog_Id + 'with: ' + NewLog_Id);
        return 1;
    } catch (error) {
        console.error('An Error occurred while updating the CustomerLog by New Value', error);
        return -1;
    }
};
