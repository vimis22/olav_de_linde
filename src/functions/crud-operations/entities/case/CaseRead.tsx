import firestore from '@react-native-firebase/firestore';
import { CaseInfo } from './CaseInfo.ts';
import {EnumMessages} from '../../EnumMessages.ts';

/**
 * Reads a case from the Firestore database based on the provided case ID.
 * @param id
 * @returns Promises a case information based on Enums, which is either SUCCESS or FAILED during execution.
 */
export const readCaseById = async (id: string): Promise<CaseInfo | string> => {
    try {
        const doc = await firestore().collection('Case').doc(id).get();
        if (doc.exists) {
            return {id: doc.id, ...doc.data()} as CaseInfo;
        } else {
            console.log('Case does not exist');
            return EnumMessages(-2);
        }
    } catch (error) {
        console.log('System is not able to fetch Case by Id', error);
        return EnumMessages(-1);
    }
};

/**
 * Reads all cases from the Firestore database.
 * @returns Promises a list of case information based on Enums, which is either SUCCESS or FAILED during execution.
 */
export const readAllCase = async (): Promise<CaseInfo[] | string> => {
    try {
        const snapShot = await firestore().collection('Case').get();
        return snapShot.docs.map((doc) => {
            return {id: doc.id, ...doc.data()} as CaseInfo;
        });
    } catch (error) {
        console.log('System is not able to fetch all Cases', error);
        return EnumMessages(-1);
    }
};

/**
 * Reads all cases from the Firestore database based on the provided creation date.
 * @param creationDate
 * @returns Promises a list of case information based on Enums, which is either SUCCESS or FAILED during execution.
 */
export const readAllCasesByCreationDate = async (creationDate: Date): Promise<CaseInfo[] | string> => {
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
        return EnumMessages(-1);
    }
};

/**
 * Reads all cases from the Firestore database based on the provided update date.
 * @param updateDate
 * @returns Promises a list of case information based on Enums, which is either SUCCESS or FAILED during execution.
 */
export const readAllCasesByUpdateDate = async (updateDate: Date): Promise<CaseInfo[] | string> => {
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
        return EnumMessages(-1);
    }
};

/**
 * Reads all cases from the Firestore database based on the provided deadline.
 * @param deadline
 * @returns Promises a list of case information based on Enums, which is either SUCCESS or FAILED during execution.
 */
export const readAllCasesByDeadline = async (deadline: Date): Promise<CaseInfo[] | string> => {
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
        return EnumMessages(-1);
    }
};
/**
 * Reads all cases from the Firestore database based on the provided title.
 * @param title
 * @returns Promises a list of case information based on Enums, which is either SUCCESS or FAILED during execution.
 */
export const readAllCasesByTitle = async (title: string): Promise<CaseInfo[] | string> => {
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
        return EnumMessages(-1);
    }
};

/**
 * Reads all cases from the Firestore database based on the provided description.
 * @param description
 * @returns Promises a list of case information based on Enums, which is either SUCCESS or FAILED during execution.
 */
export const readAllCasesByDescription = async (description: string): Promise<CaseInfo[] | string> => {
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
        return EnumMessages(-1);
    }
};
