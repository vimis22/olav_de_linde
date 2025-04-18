import firestore from '@react-native-firebase/firestore';
import {LogInfo} from './LogInfo.ts';

export const updateLog = (logInfo: LogInfo) => {
    try {
        const {id, ...updatedData} = logInfo;
        const docRef = firestore().collection('Log').doc(id);
        const doc = await docRef.get();

        if (!doc.exists) {
            console.log('System cannot recognize log information');
            await docRef.update(updatedData);
            return updatedData;
        }
    } catch (error) {
        console.log('An Error occurred while updating the log', error);
        return -1;
    }
};

export const updateAllLog = async (allLog: LogInfo[]): Promise<number> => {
    try {
        if (!allLog || allLog.length === 0) {
            return -2;
        }

        const batch = firestore().batch();

        allLog.forEach(log => {
            const logRef = firestore().collection('Log').doc(log.id);
            batch.update(logRef, {
                streetname: log.streetname,
                housenumber: log.housenumber,
                city: log.city,
                zipcode: log.zipcode,
                country: log.country,
                timestamp: firestore.FieldValue.serverTimestamp(),
                message: log.message,
            });
        });
        await batch.commit();
        return 1;
    } catch (error) {
        console.error('An Error occurred in updating allLog', error);
        return -1;
    }
};

export const updateStreetnameForLogById = async (streetname: string, id: string) => {
    try {
        const snapshot = await firestore()
            .collection('Log')
            .where('Id','==',id)
            .get();

        if (snapshot.empty) {
            console.log('No Log has been found with the id: ' + id);
            return -2;
        }

        const docRef = snapshot.docs[0].ref;
        await docRef.update({streetname: streetname});
        console.log('System has updated name from: :' + streetname + ' to' + streetname);
        return 1;
    } catch (error) {
        console.log('An Error occurred while updating the Streetname by an Id ', error);
        return -1;
    }
};

export const updateHousenumberForLogById = async (housenumber: string, id: string) => {
    try {
        const snapshot = await firestore()
            .collection('Log')
            .where('Id','==',id)
            .get();

        if (snapshot.empty) {
            console.log('No Log has been found with the id: ' + id);
            return -2;
        }

        const docRef = snapshot.docs[0].ref;
        await docRef.update({housenumber: housenumber});
        console.log('System has updated name from: ' + housenumber + ' to' + housenumber);
        return 1;
    } catch (error) {
        console.log('An Error occurred while updating the Housenumber by an Id ', error);
        return -1;
    }
};

export const updateZipcodeForLogById = async (zipcode: string, id: string) => {
    try {
        const snapshot = await firestore()
            .collection('Log')
            .where('Id','==',id)
            .get();

        if (snapshot.empty) {
            console.log('No Log has been found with the id: ' + id);
            return -2;
        }

        const docRef = snapshot.docs[0].ref;
        await docRef.update({zipcode: zipcode});
        console.log('System has updated name from: ' + zipcode + ' to' + zipcode);
        return 1;
    } catch (error) {
        console.log('An Error occurred while updating the Zipcode by an Id ', error);
        return -1;
    }
};

export const updateCityForLogById = async (city: string, id: string) => {
    try {
        const snapshot = await firestore()
            .collection('Log')
            .where('Id','==',id)
            .get();

        if (snapshot.empty) {
            console.log('No Log has been found with the id: ' + id);
            return -2;
        }

        const docRef = snapshot.docs[0].ref;
        await docRef.update({zipcode: city});
        console.log('System has updated name from: ' + city + ' to' + city);
        return 1;
    } catch (error) {
        console.log('An Error occurred while updating the City by an Id ', error);
        return -1;
    }
};

export const updateCountryForLogById = async (country: string, id: string) => {
    try {
        const snapshot = await firestore()
            .collection('Log')
            .where('Id','==',id)
            .get();

        if (snapshot.empty) {
            console.log('No Log has been found with the id: ' + id);
            return -2;
        }

        const docRef = snapshot.docs[0].ref;
        await docRef.update({zipcode: country});
        console.log('System has updated name from: ' + country + ' to' + country);
        return 1;
    } catch (error) {
        console.log('An Error occurred while updating the Country by an Id ', error);
        return -1;
    }
};

export const updateMessageForLogById = async (message: string, id: string) => {
    try {
        const snapshot = await firestore()
            .collection('Log')
            .where('Id','==',id)
            .get();

        if (snapshot.empty) {
            console.log('No Log has been found with the id: ' + id);
            return -2;
        }

        const docRef = snapshot.docs[0].ref;
        await docRef.update({zipcode: message});
        console.log('System has updated name from: ' + message + ' to' + message);
        return 1;
    } catch (error) {
        console.log('An Error occurred while updating the Country by an Id ', error);
        return -1;
    }
};
