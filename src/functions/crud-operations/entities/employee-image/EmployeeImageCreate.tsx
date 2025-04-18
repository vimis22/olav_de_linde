import firestore from '@react-native-firebase/firestore';
import {EmployeeImageInfo} from './EmployeeImageInfo.ts';

export const createCustomerImage = async (employeeImage: EmployeeImageInfo) => {
    try {
        const batch = firestore().batch();

        const employeeImageRef = firestore().collection('EmployeeImage').doc(employeeImage.id);
        batch.set(employeeImageRef, {
            id: employeeImage.id,
            filesize: employeeImage.filesize,
            name: employeeImage.name,
            type: employeeImage.type,
            timestamp: firestore.FieldValue.serverTimestamp(),
            employeeId: employeeImage.employeeId,
        });
        await batch.commit();
        return 1;
    } catch (error) {
        console.error('An Error occurred in createEmployeeImage', error);
        return -1;
    }
};
