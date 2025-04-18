import firestore from '@react-native-firebase/firestore';
import {EmployeeImageInfo} from './EmployeeImageInfo.ts';

export const updateEmployeeImage = async (employeeImage: EmployeeImageInfo) => {
    try {
        const {id, ...updatedData} = employeeImage;
        const docRef = firestore().collection('EmployeeImage').doc(id);
        const doc = await docRef.get();

        if (!doc.exists) {
            console.log('System cannot recognize employeeImage information');
            await docRef.update(updatedData);
            return updatedData;
        }
    } catch (error) {
        console.log('An Error occurred while updating the employeeImage', error);
        return -1;
    }
};

export const updateAllCustomerImage = async (allCustomerImage: EmployeeImageInfo[]) => {
    try {
        if (!allCustomerImage || allCustomerImage.length === 0) {
            return -2;
        }

        const batch = firestore().batch();

        allCustomerImage.forEach(employeeimage => {
            const employeeimageRef = firestore().collection('EmployeeImage').doc(employeeimage.id);
            batch.update(employeeimageRef, {
                filesize: employeeimage.filesize,
                name: employeeimage.name,
                type: employeeimage.type,
                timestamp: firestore.FieldValue.serverTimestamp(),
                employeeId: employeeimage.employeeId,
            });
        });
        await batch.commit();
        return 1;
    } catch (error) {
        console.error('An Error occurred in updating allEmployeeImage', error);
        return -1;
    }
};

export const updateNameForEmployeeImageById = async (name: string, id: string) => {
    try {
        const snapshot = await firestore()
            .collection('EmployeeImage')
            .where('Id','==',id)
            .get();

        if (snapshot.empty) {
            console.log('No EmployeeImage has been found with the id', + id);
            return -2;
        }

        const docRef = snapshot.docs[0].ref;
        await docRef.update({name: name});
        console.log('System has updated name from: ' + name + 'to ' + name);
    } catch (error) {
        console.log('An Error occurred while updating the name by an old name ', error);
        return -1;
    }
};

export const updateTimestampForEmployeeImageById = async (timestamp: Date, id: string) => {
    try {
        const snapshot = await firestore()
            .collection('EmployeeImage')
            .where('Id','==',id)
            .get();

        if (snapshot.empty) {
            console.log('No EmployeeImage has been found with the id ' + id);
            return -2;
        }

        const docRef = snapshot.docs[0].ref;
        await docRef.update({timestamp: timestamp});
        console.log('System has updated timestamp from: ' + timestamp + 'to ' + timestamp);
    } catch (error) {
        console.log('An Error occurred while updating the timestamp by an old timestamp ', error);
        return -1;
    }
};

export const updateFilesizeForEmployeeImageById = async (filesize: string, id: string) => {
    try {
        const snapshot = await firestore()
            .collection('EmployeeImage')
            .where('Id','==',id)
            .get();

        if (snapshot.empty) {
            console.log('No EmployeeImage has been found with the id ' + id);
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

export const updateTypeForEmployeeImageById = async (type: string, id: string) => {
    try {
        const snapshot = await firestore()
            .collection('EmployeeImage')
            .where('Id','==',id)
            .get();

        if (snapshot.empty) {
            console.log('No EmployeeImage has been found with the id ' + id);
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
