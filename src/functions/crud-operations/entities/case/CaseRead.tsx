import firestore from '@react-native-firebase/firestore';

export const readCaseById = async (id: string) => {
    try {
        const doc = await firestore().collection('Case').doc(id).get();
        if (doc.exists) {
            return {id: doc.id, ...doc.data()};
        } else {
            console.log('Case does not exists');
            return {id: -1};
        }
    } catch (error) {
        console.log('System is not able to fetch Case by Id', error);
        return {id: -2};
    }
};

export const readAllCase = async () => {
    try {
        const snapShot = await firestore().collection('Case').get();
        return snapShot.docs.map((doc: {id: any; data: () => any}) => {
            return {id: doc.id, ...doc.data()};
        });
    } catch (error) {
        console.log('System is not able to fetch all Cases', error);
        return {id: -2};
    }
};

export const readAllCasesByCreationDate = async (creationDate: Date) => {
    try {
        const snapShot = await firestore()
            .collection('Cases')
            .where('CreationDate','==', creationDate)
            .get();
        return snapShot.docs.map((doc: {id: any; data: () => any}) => {
            return {id: doc.id, ...doc.data()};
        });
    } catch (error) {
        console.error('System is not able to fetch by CreationDate', error);
        return -1;
    }
};

export const readAllCasesByUpdateDate = async (updateDate: Date) => {
    try {
        const snapShot = await firestore()
            .collection('Cases')
            .where('UpdateDate','==', updateDate)
            .get();
        return snapShot.docs.map((doc: {id: any; data: () => any}) => {
            return {id: doc.id, ...doc.data()};
        });
    } catch (error) {
        console.error('System is not able to fetch by UpdateDate', error);
        return -1;
    }
};


export const readAllCasesByDeadline = async (deadline: Date) => {
    try {
        const snapShot = await firestore()
            .collection('Cases')
            .where('Deadline','==', deadline)
            .get();
        return snapShot.docs.map((doc: {id: any; data: () => any}) => {
            return {id: doc.id, ...doc.data()};
        });
    } catch (error) {
        console.error('System is not able to fetch by Deadline', error);
        return -1;
    }
};

export const readAllCasesByTitle = async (title: string) => {
    try {
        const snapShot = await firestore()
            .collection('Cases')
            .where('Title','==', title)
            .get();
        return snapShot.docs.map((doc: {id: any; data: () => any}) => {
            return {id: doc.id, ...doc.data()};
        });
    } catch (error) {
        console.error('System is not able to fetch by Title', error);
        return -1;
    }
};

export const readAllCasesByDescription = async (description: string) => {
    try {
        const snapShot = await firestore()
            .collection('Cases')
            .where('Description','==', description)
            .get();
        return snapShot.docs.map((doc: {id: any; data: () => any}) => {
            return {id: doc.id, ...doc.data()};
        });
    } catch (error) {
        console.error('System is not able to fetch by Description', error);
        return -1;
    }
};
