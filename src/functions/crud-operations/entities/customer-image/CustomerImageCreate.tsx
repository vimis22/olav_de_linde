import firestore from '@react-native-firebase/firestore';
import {CustomerImageInfo} from './CustomerImageInfo.ts';

export const createCustomerImage = async (customerImage: CustomerImageInfo) => {
    try {
        const batch = firestore().batch();

        const customerImageRef = firestore().collection('CustomerImage').doc(customerImage.id);
        batch.set(customerImageRef, {
            id: customerImage.id,
            filesize: customerImage.filesize,
            name: customerImage.name,
            type: customerImage.type,
            timestamp: firestore.FieldValue.serverTimestamp(),
            customerId: customerImage.customerId,
        });
        await batch.commit();
        return 1;
    } catch (error) {
        console.error('An Error occurred in createCustomerImage', error);
        return -1;
    }
};
