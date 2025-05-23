import firestore from '@react-native-firebase/firestore';
import { CaseInfo } from './CaseInfo.ts';

export const readCaseById = async (id: string): Promise<CaseInfo | {id: number}> => {
    try {
        const doc = await firestore().collection('Case').doc(id).get();
        if (doc.exists) {
            return {id: doc.id, ...doc.data()} as CaseInfo;
        } else {
            console.log('Case does not exist');
            return {id: -1};
        }
    } catch (error) {
        console.log('System is not able to fetch Case by Id', error);
        return {id: -2};
    }
};

export const readAllCase = async (): Promise<CaseInfo[] | {id: number}> => {
    try {
        const snapShot = await firestore().collection('Case').get();
        return snapShot.docs.map((doc) => {
            return {id: doc.id, ...doc.data()} as CaseInfo;
        });
    } catch (error) {
        console.log('System is not able to fetch all Cases', error);
        return {id: -2};
    }
};

export const readAllCasesByCreationDate = async (creationDate: Date): Promise<CaseInfo[] | number> => {
    try {
        const snapShot = await firestore()
            .collection('Case')
            .where('createdAt','==', creationDate)
            .get();
        return snapShot.docs.map((doc) => {
            return {id: doc.id, ...doc.data()} as CaseInfo;
        });
    } catch (error) {
        console.error('System is not able to fetch by createdAt', error);
        return -1;
    }
};

export const readAllCasesByUpdateDate = async (updateDate: Date): Promise<CaseInfo[] | number> => {
    try {
        const snapShot = await firestore()
            .collection('Case')
            .where('updateDate','==', updateDate)
            .get();
        return snapShot.docs.map((doc) => {
            return {id: doc.id, ...doc.data()} as CaseInfo;
        });
    } catch (error) {
        console.error('System is not able to fetch by updateDate', error);
        return -1;
    }
};

export const readAllCasesByDeadline = async (deadline: Date): Promise<CaseInfo[] | number> => {
    try {
        const snapShot = await firestore()
            .collection('Case')
            .where('deadline','==', deadline)
            .get();
        return snapShot.docs.map((doc) => {
            return {id: doc.id, ...doc.data()} as CaseInfo;
        });
    } catch (error) {
        console.error('System is not able to fetch by deadline', error);
        return -1;
    }
};

export const readAllCasesByTitle = async (title: string): Promise<CaseInfo[] | number> => {
    try {
        const snapShot = await firestore()
            .collection('Case')
            .where('title','==', title)
            .get();
        return snapShot.docs.map((doc) => {
            return {id: doc.id, ...doc.data()} as CaseInfo;
        });
    } catch (error) {
        console.error('System is not able to fetch by title', error);
        return -1;
    }
};

export const readAllCasesByDescription = async (description: string): Promise<CaseInfo[] | number> => {
    try {
        const snapShot = await firestore()
            .collection('Case')
            .where('description','==', description)
            .get();
        return snapShot.docs.map((doc) => {
            return {id: doc.id, ...doc.data()} as CaseInfo;
        });
    } catch (error) {
        console.error('System is not able to fetch by description', error);
        return -1;
    }
};
