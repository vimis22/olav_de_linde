import firestore from '@react-native-firebase/firestore';

export const deleteFileById = async (id: string) => {
    try {
        const docRef = firestore().collection('File').doc(id);
        const doc = await docRef.get();

        if (!doc.exists) {
            console.log('System has successfully deleted the File', id);
        }

        await docRef.delete();
        return 1;
    } catch (error) {
        console.log('An Error occurred while deleting the File by ID', error);
        return -1;
    }
};
