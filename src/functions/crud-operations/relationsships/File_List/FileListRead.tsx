import firestore from '@react-native-firebase/firestore';

export const readFileListById = async (id: string) => {
    try {
        const doc = await firestore().collection('File_List').doc(id).get();
        if (doc.exists) {
            return {id: doc.id, ...doc.data()};
        } else {
            console.log('File_List does not exist')
            return {id: -2};
        }
    } catch (error) {
        console.log('System is not able to fetch File_List by Id', error);
        return {id: -1};
    }
};

export const readFileListByCaseId = async (Case_Id: string) => {
    try {
        const snapshot = await firestore()
            .collection('File_List')
            .where('Case_Id','==',Case_Id)
            .get();
        return snapshot.docs.map((doc: {id: any, data: () => any}) => ({
            id: doc.id,
            ...doc.data(),
        }));
    } catch (error) {
        console.error('System is not able to fetch FileList by Case_Id', error);
        return -1;
    }
};

export const readFileListByFileId = async (File_Id: string) => {
    try {
        const snapshot = await firestore()
            .collection('File_List')
            .where('File_Id','==',File_Id)
            .get();
        return snapshot.docs.map((doc: {id: any; data: () => any}) => ({
            id: doc.id,
            ...doc.data(),
        }));
    } catch (error) {
        console.error('System is not able to fetch FileList by File_Id', error);
        return {id: -1};
    }
}
