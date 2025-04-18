import firestore from '@react-native-firebase/firestore';

export const readCustomerImage = async (id: string) => {
    try {
        const doc = await firestore().collection('CustomerImage').doc(id).get();
        if (doc.exists) {
            return {id: doc.id, ...doc.data()};
        } else {
            console.log('CustomerImage does not exists');
            return {id: -1};
        }
    } catch (error) {
        console.log('System is not able to fetch CustomerImage by Id', error);
        return {id: -2};
    }
};

export const readAllCustomerImage = async () => {
    try {
        const snapshot = await firestore().collection('CustomerImage').get();
        return snapshot.docs.map((doc: {id: any; data: () => any}) => {
            return {id: doc.id, ...doc.data()};
        });
    } catch (error) {
        console.log('System is not able to fetch all CustomerImages', error);
        return {id: -2};
    }
};

export const readAllCustomerImageByName = async (name: string) => {
    try {
        const snapshot = await firestore()
            .collection('CustomerImage')
            .where('Name','==',name)
            .get();
        return snapshot.docs.map((doc: {id: any; data: () => any}) => {
            return {id: doc.id, ...doc.data()};
        });
    } catch (error) {
        console.error('System is not able fetch by CustomerImage Name', error);
        return {id: -2};
    }
};


export const readAllCustomerImageByTimestamp = async (timestamp: Date) => {
    try {
        const snapshot = await firestore()
            .collection('CustomerImage')
            .where('Timestamp','==',timestamp)
            .get();
        return snapshot.docs.map((doc: {id: any; data: () => any}) => {
            return {id: doc.id, ...doc.data()};
        });
    } catch (error) {
        console.error('System is not able fetch by CustomerImage Timestamp', error);
        return {id: -2};
    }
};

export const readAllCustomerImageByType = async (type: string) => {
    try {
        const snapshot = await firestore()
            .collection('CustomerImage')
            .where('Type','==',type)
            .get();
        return snapshot.docs.map((doc: {id: any; data: () => any}) => {
            return {id: doc.id, ...doc.data()};
        });
    } catch (error) {
        console.error('System is not able fetch by CustomerImage Type', error);
        return {id: -2};
    }
};

export const readAllCustomerImageByFilesize = async (filesize: string) => {
    try {
        const snapshot = await firestore()
            .collection('CustomerImage')
            .where('Filesize','==',filesize)
            .get();
        return snapshot.docs.map((doc: {id: any; data: () => any}) => {
            return {id: doc.id, ...doc.data()};
        });
    } catch (error) {
        console.error('System is not able fetch by CustomerImage Filesize', error);
        return {id: -2};
    }
};
