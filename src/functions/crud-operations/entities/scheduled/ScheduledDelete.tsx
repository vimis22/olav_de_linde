import firestore from '@react-native-firebase/firestore';
import {CaseInfo} from '../case/CaseInfo.ts';

export const deleteScheduledById = async (allCaseInfo: CaseInfo) => {
    try {
        const docRef = firestore().collection('Scheduled').doc(allCaseInfo.id);
        const doc = await docRef.get();

        if (!doc.exists) {
            console.log('System has successfully deleted the customer by the id', allCaseInfo.id);
        }

        await docRef.delete();
        return 1;
    } catch (error) {
        console.log('An Error occurred while deleting the Scheduled by ID', error);
        return -1;
    }
};

export const deleteScheduledByName = async (name: string) => {
    try {
        const snapshot = await firestore()
            .collection('Scheduled')
            .where('Name','==',name)
            .get();
        return snapshot.docs.map((doc: {id: any; data: () => any}) => ({
            id: doc.id,
            ...doc.data(),
        }));
    } catch (error) {
        console.error('System is not able fetch by Name', error);
        return {id: -2};
    }
};

export const deleteScheduledByTimestamp = async (timestamp: string) => {
    try {
        const snapshot = await firestore()
            .collection('Scheduled')
            .where('Timestamp','==',timestamp)
            .get();
        return snapshot.docs.map((doc: {id: any; data: () => any}) => ({
            id: doc.id,
            ...doc.data(),
        }));
    } catch (error) {
        console.error('System is not able fetch by Timestamp', error);
        return {id: -2};
    }
};

export const deleteScheduledByCaseId = async (caseId: string) => {
    try {
        const snapshot = await firestore()
            .collection('Scheduled')
            .where('Case_Id','==',caseId)
            .get();
        return snapshot.docs.map((doc: {id: any; data: () => any}) => ({
            id: doc.id,
            ...doc.data(),
        }));
    } catch (error) {
        console.error('System is not able fetch by Case_Id', error);
        return {id: -2};
    }
};
