import firestore from '@react-native-firebase/firestore';

export const deletePropertyById = async (id: string) => {
    try {
        const docRef = firestore().collection('Property').doc(id);
        const doc = await docRef.get();

        if (!doc.exists) {
            console.log('System has successfully deleted the property', id);
        }

        await docRef.delete();
        return 1;
    } catch (error) {
        console.log('An Error occurred while deleting the property by ID', error);
        return -1;
    }
};
