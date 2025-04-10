import firestore from '@react-native-firebase/firestore';
import {PropertyInfo} from "./PropertyInfo.ts";

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

export const upddatePropertyByStreetname = async (Oldstreetname: string, Newstreetname: string, city: string) => {
    try {
        const snapShot = await firestore()
            .collection('Property')
            .where('Oldstreetname','==',Oldstreetname)
            .where('Newstreetname','==',Newstreetname)
            .where('City','==',city)
            .get();

        if (snapShot.empty) {
            console.log('No Property has been found with the Streetname: ' + Oldstreetname);
            return -2;
        }

        const docRef = snapShot.docs[0].ref;
        await docRef.update({ Oldstreetname: Oldstreetname, Newstreetname: Newstreetname});
        console.log('System has updated email from: :' + Oldstreetname + ' to' + Newstreetname);
    } catch (error) {
        console.log('An Error occured while updating the email by an old email ', error);
        return -1;
    }
};

export const upddatePropertyByCity = async (Oldcity: string, Newcity: string, zipcode: string) => {
    try {
        const snapShot = await firestore()
            .collection('Property')
            .where('Oldcity','==',Oldcity)
            .where('Newcity','==',Newcity)
            .where('Zipcode','==',zipcode)
            .get();

        if (snapShot.empty) {
            console.log('No Property has been found with the City: ' + Oldcity);
            return -2;
        }

        const docRef = snapShot.docs[0].ref;
        await docRef.update({ Oldcity: Oldcity, Newcity: Newcity});
        console.log('System has updated city from: :' + Oldcity + ' to' + Newcity);
    } catch (error) {
        console.log('An Error occured while updating the city name by an old city name ', error);
        return -1;
    }
};

export const upddatePropertyByZipcode = async (Oldzipcode: number, Newzipcode: number) => {
    try {
        const snapShot = await firestore()
            .collection('Property')
            .where('Oldzipcode','==',Oldzipcode)
            .where('Newzipcode','==',Newzipcode)
            .get();

        if (snapShot.empty) {
            console.log('No Property has been found with the Zipcode: ' + Oldzipcode);
            return -2;
        }

        const docRef = snapShot.docs[0].ref;
        await docRef.update({ Oldzipcode: Oldzipcode, Newzipcode: Newzipcode});
        console.log('System has updated zipcode from: :' + Oldzipcode + ' to' + Newzipcode);
    } catch (error) {
        console.log('An Error occured while updating the zipcode by an old zipcode ', error);
        return -1;
    }
};

