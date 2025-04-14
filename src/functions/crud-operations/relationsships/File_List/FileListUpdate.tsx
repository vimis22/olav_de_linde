import firestore from '@react-native-firebase/firestore';

export const updateFileListByCaseId = async (OldCase_Id: string, NewCase_Id: string) => {
    try {
        const snapshot = await firestore()
            .collection('File_List')
            .where('Case_Id','==',OldCase_Id)
            .get();

        if (snapshot.empty) {
            console.log('System is not able to recognize file_list information');
            return -2;
        }

        const batch = firestore().batch();

        snapshot.docs.forEach((doc) => {
            const docRef = firestore().collection('File_List').doc(doc.id);
            batch.update(docRef, {Case_Id: NewCase_Id});
        });

        await batch.commit();
        console.log('System has updated ' + OldCase_Id + 'with: ' + NewCase_Id);
        return 1;
    } catch (error) {
        console.error('An Error occurred while updating the File_List by New Value', error);
        return -1;
    }
};

export const updateFileListByFileId = async (OldFile_Id: string, NewFile_Id: string) => {
    try {
        const snapshot = await firestore()
            .collection('File_List')
            .where('File_Id','==',OldFile_Id)
            .get();

        if (snapshot.empty) {
            console.log('System is not able to recognize file_list information');
            return -2;
        }

        const batch = firestore().batch();

        snapshot.docs.forEach((doc) => {
            const docRef = firestore().collection('File_List').doc(doc.id);
            batch.update(docRef, {File_Id: NewFile_Id});
        });

        await batch.commit();
        console.log('System has updated ' + OldFile_Id + 'with: ' + NewFile_Id);
        return 1;
    } catch (error) {
        console.error('An Error occurred while updating the File_List by New Value', error);
        return -1;
    }
};
