import firestore from '@react-native-firebase/firestore';

export const readFile = async (id: string) => {
    try {
        const doc = await firestore().collection('File').doc(id).get();
        if (doc.exists) {
            return {id: doc.id, ...doc.data()};
        } else {
            console.log('File does not exists');
            return {id: -1};
        }
    } catch (error) {
        console.log('System is not able to fetch File by Id', error);
        return {id: -2};
    }
};

export const readAllFile = async () => {
    try {
        const snapshot = await firestore().collection('File').get();
        return snapshot.docs.map((doc: {id: any; data: () => any}) => {
            return {id: doc.id, ...doc.data()};
        });
    } catch (error) {
        console.log('System is not able to fetch all File', error);
        return {id: -2};
    }
};

export const readAllFileByName = async (name: string) => {
    try {
        const snapshot = await firestore()
            .collection('File')
            .where('Name','==',name)
            .get();
        return snapshot.docs.map((doc: {id: any; data: () => any}) => {
            return {id: doc.id, ...doc.data()};
        });
    } catch (error) {
        console.error('System is not able fetch by File Name', error);
        return {id: -2};
    }
};


export const readAllFileByTimestamp = async (timestamp: Date) => {
    try {
        const snapshot = await firestore()
            .collection('File')
            .where('Timestamp','==',timestamp)
            .get();
        return snapshot.docs.map((doc: {id: any; data: () => any}) => {
            return {id: doc.id, ...doc.data()};
        });
    } catch (error) {
        console.error('System is not able fetch by File Timestamp', error);
        return {id: -2};
    }
};

export const readAllFileByType = async (type: string) => {
    try {
        const snapshot = await firestore()
            .collection('File')
            .where('Type','==',type)
            .get();
        return snapshot.docs.map((doc: {id: any; data: () => any}) => {
            return {id: doc.id, ...doc.data()};
        });
    } catch (error) {
        console.error('System is not able fetch by File Type', error);
        return {id: -2};
    }
};

export const readAllFileByFilesize = async (filesize: string) => {
    try {
        const snapshot = await firestore()
            .collection('File')
            .where('Filesize','==',filesize)
            .get();
        return snapshot.docs.map((doc: {id: any; data: () => any}) => {
            return {id: doc.id, ...doc.data()};
        });
    } catch (error) {
        console.error('System is not able fetch by File Filesize', error);
        return {id: -2};
    }
};
