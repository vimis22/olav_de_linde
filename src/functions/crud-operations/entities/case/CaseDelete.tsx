import firestore from '@react-native-firebase/firestore';

export const deleteCasesById = async (id: string) => {
    try {
        const docRef = firestore().collection('Case').doc(id);
        const doc = await docRef.get();

        if (!doc.exists) {
            console.log('System has successfully deleted the cases', id);
        }

        await docRef.delete();
        return 1;
    } catch (error) {
        console.log('An Error occurred while deleting the cases by ID', error);
        return -1;
    }
};
