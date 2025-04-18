import firestore from '@react-native-firebase/firestore';
import {FileInfo} from './FileInfo.ts';

export const createFile = async (fileInfo: FileInfo) => {
    try {
        const batch = firestore().batch();

        const employeeImageRef = firestore().collection('File').doc(fileInfo.id);
        batch.set(employeeImageRef, {
            id: fileInfo.id,
            filesize: fileInfo.filesize,
            name: fileInfo.name,
            type: fileInfo.type,
            timestamp: firestore.FieldValue.serverTimestamp(),
        });
        await batch.commit();
        return 1;
    } catch (error) {
        console.error('An Error occurred in createFile', error);
        return -1;
    }
};
