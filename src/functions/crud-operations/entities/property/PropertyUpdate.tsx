import firestore from '@react-native-firebase/firestore';
import {PropertyInfo} from './PropertyInfo.ts';

export const updatePropertyById = async (propertyInfo: PropertyInfo) => {
    try {
        const {id, ...updatedData} = propertyInfo;
        const docRef = firestore().collection('Property').doc(id);
        const doc = await docRef.get();

        if (!doc.exists) {
            console.log('System cannot recognize property information');
            await docRef.update(updatedData);
            return updatedData;
        }
    } catch (error) {
        console.error('An Error occurred while updating the property', error);
        return -1;
    }
};

export const updatePropertyByAddress = async (Oldaddress: string, Newaddress: string) => {
    try {
        const snapShot = await firestore()
            .collection('Property')
            .where('Oldaddress','==',Oldaddress)
            .where('Newaddress','==',Newaddress)
            .get();

        if (snapShot.empty) {
            console.log('No Property has been found with the Oldaddress: ' + Oldaddress);
            return -2;
        }

        const docRef = snapShot.docs[0].ref;
        await docRef.update({ Oldaddress: Oldaddress, Newaddress: Newaddress});
        console.log('System has updated address from: :' + Oldaddress + ' to' + Newaddress);
    } catch (error) {
        console.log('An Error occured while updating the address by an old address ', error);
        return -1;
    }
};
