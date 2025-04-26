import firestore from '@react-native-firebase/firestore';

export const readPropertyById = async (id: string) => {
    try {
        const doc = await firestore().collection('Property').doc(id).get();
        if (doc.exists) {
            return {id: doc.id, ...doc.data()};
        } else {
            console.log('Property does not exists');
            return {id: -1};
        }
    } catch (error) {
        console.log('System is not able to fetch Property by Id', error);
        return {id: -2};
    }
};

export const readAllProperties = async () => {
    try {
        const snapShot = await firestore().collection('Property').get();
        return snapShot.docs.map((doc: {id: any; data: () => any}) => {
            return {id: doc.id, ...doc.data()};
        });
    } catch (error) {
        console.log('System is not able to fetch all Properties', error);
        return {id: -2};
    }
};

export const readPropertyByAddress = async (address: string) => {
    try {
        const snapShot = await firestore()
            .collection('Property')
            .where('Address','==',address)
            .get();
        return snapShot.docs.map((doc: {id: any; data: () => any}) => {
            return {id: doc.id, ...doc.data()};
        });
    } catch (error) {
        console.error('System is not able to fetch by Streetname', error);
        return -1;
    }
};

export const readPropertyByHousenumber = async (address: string, housenumber: string) => {
    try {
        const snapShot = await firestore()
            .collection('Property')
            .where('Address', '==', address)
            .where('Housenumber', '==', housenumber)
            .get();
        return snapShot.docs.map((doc: {id: any; data: () => any}) => ({
        id: doc.id,
        ...doc.data(),
        }));
    } catch (error) {
        console.error('System is not able to fetch by Housenumber through Streetname', error);
        return -1;
    }
};
