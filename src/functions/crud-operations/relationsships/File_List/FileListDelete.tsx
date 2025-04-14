import firestore from '@react-native-firebase/firestore';

export const deleteFileListById = async (id: string) => {
    try {
        const docRef = firestore().collection('File_List').doc(id);
        const doc = await docRef.get();

        if (!doc.exists) {
            console.log('System has successfully deleted a relation FileList by Id', id);
            return 1;
        }

        await docRef.delete();
        return 1;
    } catch (error) {
        console.log('An Error occurred while deleting the Filelist by id', error);
        return -1;
    }
};

export const deleteFileListByCase = async (Case_Id: string) => {
    try {
        const snapshot = await firestore()
            .collection('File_List')
            .where('Case_Id','==',Case_Id)
            .get();

        if (snapshot.empty) {
            console.log('System is not able to find case_id in the system');
            return -2;
        }

        const docRef = snapshot.docs[0].ref;

        await docRef.delete();
        console.log('System has successfully deleted the FileList by case_id');
        return 1;
    } catch (error) {
        console.log('An Error occurred while deleting the FileList by case_id', error);
        return -1;
    }
};

export const deleteFileListByFile = async (File_Id: string) => {
    try {
        const snapshot = await firestore()
            .collection('File_List')
            .where('File_Id','==',File_Id)
            .get();

        if (snapshot.empty) {
            console.log('System is not able to find file_id in the system');
            return -2;
        }

        const docRef = snapshot.docs[0].ref;

        await docRef.delete();
        console.log('System has successfully deleted the FileList by file_id');
        return 1;
    } catch (error) {
        console.log('An Error occurred while deleting the FileList by file_id', error);
        return -1;
    }
};

export const deleteFileListByCaseFile = async (Case_Id: string, File_Id: string) => {
    try {
        const snapshot = await firestore()
            .collection('File_List')
            .where('Case_Id','==',Case_Id)
            .where('File_Id','==',File_Id)
            .get();

        if (snapshot.empty) {
            console.log('System is not able to find case_id and file_id in the system');
            return -2;
        }

        const docRef = snapshot.docs[0].ref;

        await docRef.delete();
        console.log('System has successfully deleted the FileList by case_id and file_id');
        return 1;
    } catch (error) {
        console.log('An Error occurred while deleting the FileList by case_id and file_id', error);
        return -1;
    }
};
