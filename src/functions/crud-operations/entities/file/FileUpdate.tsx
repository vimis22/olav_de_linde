import firestore from '@react-native-firebase/firestore';
import {FileInfo} from './FileInfo.ts';

export const updateFile = async (fileInfo: FileInfo) => {
    try {
        const {id, ...updatedData} = fileInfo;
        const docRef = firestore().collection('File').doc(id);
        const doc = await docRef.get();

        if (!doc.exists) {
            console.log('System cannot recognize File information');
            await docRef.update(updatedData);
            return updatedData;
        }
    } catch (error) {
        console.log('An Error occurred while updating the File', error);
        return -1;
    }
};

export const updateAllFile = async (allFile: FileInfo[]) => {
    try {
        if (!allFile || allFile.length === 0) {
            return -2;
        }

        const batch = firestore().batch();

        allFile.forEach(employeeimage => {
            const employeeimageRef = firestore().collection('File').doc(employeeimage.id);
            batch.update(employeeimageRef, {
                filesize: employeeimage.filesize,
                name: employeeimage.name,
                type: employeeimage.type,
                timestamp: firestore.FieldValue.serverTimestamp(),
            });
        });
        await batch.commit();
        return 1;
    } catch (error) {
        console.error('An Error occurred in updating allFile', error);
        return -1;
    }
};

export const updateNameForFileById = async (name: string, id: string) => {
    try {
        const snapshot = await firestore()
            .collection('File')
            .where('Id','==',id)
            .get();

        if (snapshot.empty) {
            console.log('No File has been found with the id', + id);
            return -2;
        }

        const docRef = snapshot.docs[0].ref;
        await docRef.update({name: name});
        console.log('System has updated name from: ' + name + 'to ' + name);
    } catch (error) {
        console.log('An Error occurred while updating the File by an old File ', error);
        return -1;
    }
};

export const updateTimestampForFileById = async (timestamp: Date, id: string) => {
    try {
        const snapshot = await firestore()
            .collection('File')
            .where('Id','==',id)
            .get();

        if (snapshot.empty) {
            console.log('No File has been found with the id ' + id);
            return -2;
        }

        const docRef = snapshot.docs[0].ref;
        await docRef.update({timestamp: timestamp});
        console.log('System has updated File from: ' + timestamp + 'to ' + timestamp);
    } catch (error) {
        console.log('An Error occurred while updating the File by an old File ', error);
        return -1;
    }
};

export const updateFilesizeForFileById = async (filesize: string, id: string) => {
    try {
        const snapshot = await firestore()
            .collection('File')
            .where('Id','==',id)
            .get();

        if (snapshot.empty) {
            console.log('No File has been found with the id ' + id);
            return -2;
        }

        const docRef = snapshot.docs[0].ref;
        await docRef.update({filesize: filesize});
        console.log('System has updated filesize from: ' + filesize + 'to ' + filesize);
    } catch (error) {
        console.log('An Error occurred while updating the filesize by an old filesize ', error);
        return -1;
    }
};

export const updateTypeForFileById = async (type: string, id: string) => {
    try {
        const snapshot = await firestore()
            .collection('File')
            .where('Id','==',id)
            .get();

        if (snapshot.empty) {
            console.log('No File has been found with the id ' + id);
            return -2;
        }

        const docRef = snapshot.docs[0].ref;
        await docRef.update({type: type});
        console.log('System has updated type from: ' + type + 'to ' + type);
    } catch (error) {
        console.log('An Error occurred while updating the type by an old type ', error);
        return -1;
    }
};
