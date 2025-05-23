import firestore from '@react-native-firebase/firestore';
import {CaseInfo} from './CaseInfo.ts';
export const createCase = async (defect: CaseInfo): Promise<string | number> => {
    try {
        const docRef = await firestore().collection('Case').add({
            title: defect.title,
            description: defect.description,
            createdAt: firestore.FieldValue.serverTimestamp(),
            updateDate: firestore.FieldValue.serverTimestamp(),
            deadline: defect.deadline || firestore.FieldValue.serverTimestamp(),
        });
        console.log('Case created with ID: ', docRef.id);
        return docRef.id;
    } catch (error) {
        console.error('An Error occurred in createCase', error);
        return -1;
    }
};
