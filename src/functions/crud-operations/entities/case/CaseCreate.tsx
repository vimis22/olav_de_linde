import firestore from '@react-native-firebase/firestore';
import {CaseInfo} from './CaseInfo.ts';

export const createCase = async (allCaseInfo: CaseInfo[]): Promise<number> => {
    try {
        if (!allCaseInfo || allCaseInfo.length === 0) {
            return -2;
        }

        const batch = firestore().batch();

        allCaseInfo.forEach(sag => {
            const caseRef = firestore().collection('Case').doc(sag.id);
            batch.set(caseRef, {
                id: sag.id,
                title: '',
                description: '',
                createdDate: firestore.FieldValue.serverTimestamp(),
                updateDate: firestore.FieldValue.serverTimestamp(),
                Deadline: firestore.FieldValue.serverTimestamp(),
            });
        });
        await batch.commit();
        return 1;
    } catch (error) {
        console.error('An Error occurred in createCase', error);
        return -1;
    }
};

