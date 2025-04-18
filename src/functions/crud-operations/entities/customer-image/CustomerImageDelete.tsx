import firestore from '@react-native-firebase/firestore';

export const deleteCustomerImageById = async (id: string) => {
    try {
        const docRef = firestore().collection('CustomerImage').doc(id);
        const doc = await docRef.get();

        if (!doc.exists) {
            console.log('System has successfully deleted the CustomerImage', id);
        }

        await docRef.delete();
        return 1;
    } catch (error) {
        console.log('An Error occurred while deleting the CustomerImage by ID', error);
        return -1;
    }
}
