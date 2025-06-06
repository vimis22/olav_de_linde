import firestore from '@react-native-firebase/firestore';
import {PropertyInfo} from './PropertyInfo.ts';

export const createProperty = async (allPropertyInfo: PropertyInfo[]) => {
    try {
        if (!allPropertyInfo || allPropertyInfo.length === 0){
            return -2;
        }

        const batch = firestore().batch();

        allPropertyInfo.forEach(property => {
            const propertyRef = firestore().collection('Property').doc(property.id);
            batch.set(propertyRef, {
                address: property.address,
                housenumber: property.housenumber,
                createdAt: firestore.FieldValue.serverTimestamp(),
            });
        });
        await batch.commit();
        return 1;
    } catch (error) {
        console.error('An Error occured in createProperty', error);
        return -1;
    }
};

