import firestore from '@react-native-firebase/firestore';

export const deleteCustomerImageById = async (id: string) => {
    try {
        const docRef = firestore().collection('EmployeeImage').doc(id);
        const doc = await docRef.get();

        if (!doc.exists) {
            console.log('System has successfully deleted the EmployeeImage', id);
        }

        await docRef.delete();
        return 1;
    } catch (error) {
        console.log('An Error occurred while deleting the EmployeeImage by ID', error);
        return -1;
    }
};
