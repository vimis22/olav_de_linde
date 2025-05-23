import firestore from '@react-native-firebase/firestore';

export const deleteCaseById = async (id: string): Promise<number> => {
    try {
        const docRef = firestore().collection('Case').doc(id);
        const doc = await docRef.get();

        if (!doc.exists) {
            console.log('Case with ID does not exist:', id);
            return 0;
        }

        await docRef.delete();
        console.log('System has successfully deleted the case with ID:', id);
        return 1;
    } catch (error) {
        console.log('An Error occurred while deleting the case by ID', error);
        return -1;
    }
};
