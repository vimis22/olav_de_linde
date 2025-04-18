import firestore from '@react-native-firebase/firestore';

export const readCEmployeeImage = async (id: string) => {
    try {
        const doc = await firestore().collection('EmployeeImage').doc(id).get();
        if (doc.exists) {
            return {id: doc.id, ...doc.data()};
        } else {
            console.log('EmployeeImage does not exists');
            return {id: -1};
        }
    } catch (error) {
        console.log('System is not able to fetch EmployeeImage by Id', error);
        return {id: -2};
    }
};

export const readAllEmployeeImage = async () => {
    try {
        const snapshot = await firestore().collection('EmployeeImage').get();
        return snapshot.docs.map((doc: {id: any; data: () => any}) => {
            return {id: doc.id, ...doc.data()};
        });
    } catch (error) {
        console.log('System is not able to fetch all EmployeeImage', error);
        return {id: -2};
    }
};

export const readAllEmployeeImageByName = async (name: string) => {
    try {
        const snapshot = await firestore()
            .collection('EmployeeImage')
            .where('Name','==',name)
            .get();
        return snapshot.docs.map((doc: {id: any; data: () => any}) => {
            return {id: doc.id, ...doc.data()};
        });
    } catch (error) {
        console.error('System is not able fetch by EmployeeImage Name', error);
        return {id: -2};
    }
};


export const readAllEmployeeImageByTimestamp = async (timestamp: Date) => {
    try {
        const snapshot = await firestore()
            .collection('EmployeeImage')
            .where('Timestamp','==',timestamp)
            .get();
        return snapshot.docs.map((doc: {id: any; data: () => any}) => {
            return {id: doc.id, ...doc.data()};
        });
    } catch (error) {
        console.error('System is not able fetch by EmployeeImage Timestamp', error);
        return {id: -2};
    }
};

export const readAllEmployeeImageByType = async (type: string) => {
    try {
        const snapshot = await firestore()
            .collection('EmployeeImage')
            .where('Type','==',type)
            .get();
        return snapshot.docs.map((doc: {id: any; data: () => any}) => {
            return {id: doc.id, ...doc.data()};
        });
    } catch (error) {
        console.error('System is not able fetch by EmployeeImage Type', error);
        return {id: -2};
    }
};

export const readAllEmployeeImageByFilesize = async (filesize: string) => {
    try {
        const snapshot = await firestore()
            .collection('EmployeeImage')
            .where('Filesize','==',filesize)
            .get();
        return snapshot.docs.map((doc: {id: any; data: () => any}) => {
            return {id: doc.id, ...doc.data()};
        });
    } catch (error) {
        console.error('System is not able fetch by EmployeeImage Filesize', error);
        return {id: -2};
    }
};
