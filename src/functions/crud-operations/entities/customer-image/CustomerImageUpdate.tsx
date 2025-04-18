import firestore from '@react-native-firebase/firestore';
import {CustomerImageInfo} from './CustomerImageInfo.ts';

export const updateCustomerImage = async (customerImage: CustomerImageInfo) => {
    try {
        const {id, ...updatedData} = customerImage;
        const docRef = firestore().collection('CustomerImage').doc(id);
        const doc = await docRef.get();

        if (!doc.exists) {
            console.log('System cannot recognize customerImage information');
            await docRef.update(updatedData);
            return updatedData;
        }
    } catch (error) {
        console.log('An Error occurred while updating the customerImage', error);
        return -1;
    }
};

export const updateAllCustomerImage = async (allCustomerImage: CustomerImageInfo[]) => {
    try {
        if (!allCustomerImage || allCustomerImage.length === 0) {
            return -2;
        }

        const batch = firestore().batch();

        allCustomerImage.forEach(customerimage => {
            const customerImageRef = firestore().collection('TermsConditions').doc(customerimage.id);
            batch.update(customerImageRef, {
                filesize: customerimage.filesize,
                name: customerimage.name,
                type: customerimage.type,
                timestamp: firestore.FieldValue.serverTimestamp(),
                customerId: customerimage.customerId,
            });
        });
        await batch.commit();
        return 1;
    } catch (error) {
        console.error('An Error occurred in updating allCustomerImage', error);
        return -1;
    }
};

export const updateNameForCustomerImageById = async (name: string, id: string) => {
    try {
        const snapshot = await firestore()
            .collection('CustomerImage')
            .where('Id','==',id)
            .get();

        if (snapshot.empty) {
            console.log('No CustomerImage has been found with the id', + id);
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

export const updateTimestampForCustomerImageById = async (timestamp: Date, id: string) => {
    try {
        const snapshot = await firestore()
            .collection('CustomerImage')
            .where('Id','==',id)
            .get();

        if (snapshot.empty) {
            console.log('No CustomerImage has been found with the id ' + id);
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

export const updateFilesizeForCustomerImageById = async (filesize: string, id: string) => {
    try {
        const snapshot = await firestore()
            .collection('CustomerImage')
            .where('Id','==',id)
            .get();

        if (snapshot.empty) {
            console.log('No CustomerImage has been found with the id ' + id);
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

export const updateTypeForCustomerImageById = async (type: string, id: string) => {
    try {
        const snapshot = await firestore()
            .collection('CustomerImage')
            .where('Id','==',id)
            .get();

        if (snapshot.empty) {
            console.log('No CustomerImage has been found with the id ' + id);
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
