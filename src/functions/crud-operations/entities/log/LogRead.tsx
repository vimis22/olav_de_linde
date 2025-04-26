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

export const readAllLogByAddress = async (address: string) => {
    try {
        const snapshot = await firestore()
            .collection('Log')
            .where('Address','==',address)
            .get();
        return snapshot.docs.map((doc: {id: any; data: () => any}) => {
            return {id: doc.id, ...doc.data()};
        });
    } catch (error) {
        console.error('System is not able fetch by Log Address', error);
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

export const readAllLogByMessage = async (message: string) => {
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
