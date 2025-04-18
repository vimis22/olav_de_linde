import firestore from '@react-native-firebase/firestore';

export const getLogById = async (id: string) => {
    try {
        const doc = await firestore().collection('Log').doc(id).get();
        if (doc.exists) {
            //Dette her return er default.
            return {id: doc.id, ...doc.data()};
        } else {
            console.log('Log does not exist');
            return {id: -1};
        }
    } catch (error) {
        console.log('System is not able to fetch Log by Id', error);
        return {id: -2};
    }
};

export const getAllLog = async () => {
    try {
        const snapshot = await firestore().collection('Log').get();
        return snapshot.docs.map((doc: {id: any; data: () => any}) => {
            return {id: doc.id, ...doc.data()};
        });
    } catch (error) {
        console.log('System is not able fetch all Log', error);
        return {id: -2};
    }
};

export const readAllLogByStreetname = async (streetname: string) => {
    try {
        const snapshot = await firestore()
            .collection('Log')
            .where('Streetname','==',streetname)
            .get();
        return snapshot.docs.map((doc: {id: any; data: () => any}) => {
            return {id: doc.id, ...doc.data()};
        });
    } catch (error) {
        console.error('System is not able fetch by Log Streetname', error);
        return {id: -2};
    }
};

export const readAllLogByHousenumber = async (housenumber: string) => {
    try {
        const snapshot = await firestore()
            .collection('Log')
            .where('Housenumber','==',housenumber)
            .get();
        return snapshot.docs.map((doc: {id: any; data: () => any}) => {
            return {id: doc.id, ...doc.data()};
        });
    } catch (error) {
        console.error('System is not able fetch by Log Housenumber', error);
        return {id: -2};
    }
};

export const readAllLogByZipcode = async (zipcode: string) => {
    try {
        const snapshot = await firestore()
            .collection('Log')
            .where('Zipcode','==',zipcode)
            .get();
        return snapshot.docs.map((doc: {id: any; data: () => any}) => {
            return {id: doc.id, ...doc.data()};
        });
    } catch (error) {
        console.error('System is not able fetch by Log Zipcode', error);
        return {id: -2};
    }
};

export const readAllLogByCity = async (city: string) => {
    try {
        const snapshot = await firestore()
            .collection('Log')
            .where('City','==',city)
            .get();
        return snapshot.docs.map((doc: {id: any; data: () => any}) => {
            return {id: doc.id, ...doc.data()};
        });
    } catch (error) {
        console.error('System is not able fetch by Log City', error);
        return {id: -2};
    }
};

export const readAllLogByCountry = async (country: string) => {
    try {
        const snapshot = await firestore()
            .collection('Log')
            .where('Country','==',country)
            .get();
        return snapshot.docs.map((doc: {id: any; data: () => any}) => {
            return {id: doc.id, ...doc.data()};
        });
    } catch (error) {
        console.error('System is not able fetch by Log Country', error);
        return {id: -2};
    }
};

export const readAllLogByTimestamp = async (timestamp: Date) => {
    try {
        const snapshot = await firestore()
            .collection('Log')
            .where('Timestamp','==',timestamp)
            .get();
        return snapshot.docs.map((doc: {id: any; data: () => any}) => {
            return {id: doc.id, ...doc.data()};
        });
    } catch (error) {
        console.error('System is not able fetch by Log Timestamp', error);
        return {id: -2};
    }
};

export const readAllLogByMessager = async (message: string) => {
    try {
        const snapshot = await firestore()
            .collection('Log')
            .where('Country','==',message)
            .get();
        return snapshot.docs.map((doc: {id: any; data: () => any}) => {
            return {id: doc.id, ...doc.data()};
        });
    } catch (error) {
        console.error('System is not able fetch by Log Message', error);
        return {id: -2};
    }
};
