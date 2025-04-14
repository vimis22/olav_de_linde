import firestore from '@react-native-firebase/firestore';

export const deleteCustomerLogById = async (id: string) => {
    try {
        const docRef = firestore().collection('CustomerLog').doc(id);
        const doc = await docRef.get();

        if (!doc.exists) {
            console.log('System has successfully deleted a relation in CustomerLog by Id', id);
            return 1;
        }

        await docRef.delete();
        return 1;
    } catch (error) {
        console.log('An Error occurred while deleting the CustomerLog by id', error);
        return -1;
    }
};

export const deleteCustomerLogByCustomer = async (Customer_Id: string) => {
    try {
        const snapshot = await firestore()
            .collection('CustomerLog')
            .where('Customer_Id','==',Customer_Id)
            .get();

        if (snapshot.empty) {
            console.log('System is not able to find customer_id in the system');
            return -2;
        }

        const docRef = snapshot.docs[0].ref;

        await docRef.delete();
        console.log('System has successfully deleted the CustomerLog by customer_id');
        return 1;
    } catch (error) {
        console.log('An Error occurred while deleting the CustomerLog by customer_id', error);
        return -1;
    }
};

export const deleteCustomerLogByLog = async (Log_Id: string) => {
    try {
        const snapshot = await firestore()
            .collection('CustomerLog')
            .where('Log_Id','==',Log_Id)
            .get();

        if (snapshot.empty) {
            console.log('System is not able to find log_id in the system');
            return -2;
        }

        const docRef = snapshot.docs[0].ref;

        await docRef.delete();
        console.log('System has successfully deleted the CustomerLog by log_id');
        return 1;
    } catch (error) {
        console.log('An Error occurred while deleting the CustomerLog by log_id', error);
        return -1;
    }
};

export const deleteCustomerLogByCustomerLog = async (Customer_Id: string, Log_Id: string) => {
    try {
        const snapshot = await firestore()
            .collection('CustomerLog')
            .where('Customer_Id','==',Customer_Id)
            .where('Log_Id','==',Log_Id)
            .get();

        if (snapshot.empty) {
            console.log('System is not able to find both customer_id and log_id in the system');
            return -2;
        }

        const docRef = snapshot.docs[0].ref;

        await docRef.delete();
        console.log('System has successfully deleted the CustomerLog by both the customer_id and log_id');
        return 1;
    } catch (error) {
        console.log('An Error occurred while deleting the CustomerLog by both customer_id and log_id', error);
        return -1;
    }
};

