import firestore from '@react-native-firebase/firestore';
import {CaseInfo} from './CaseInfo.ts';
export const createCase = async (defect: CaseInfo): Promise<number> => {
    try {
        const batch = firestore().batch();

        const caseRef = firestore().collection('Case').doc(defect.id);
        batch.set(caseRef, {
            id: defect.id,
            title: '',
            description: '',
            createdDate: firestore.FieldValue.serverTimestamp(),
            updateDate: firestore.FieldValue.serverTimestamp(),
            Deadline: firestore.FieldValue.serverTimestamp(),
        });
        await batch.commit();
        return 1;
    } catch (error) {
        console.error('An Error occurred in createCase', error);
        return -1;
    }
};
