import firestore from '@react-native-firebase/firestore';
import {TermsConditionsInfo} from './TermsConditionsInfo.ts';

export const createTermsConditions = async (allTermsConditions: TermsConditionsInfo[]) => {
    try {
        if (!allTermsConditions || allTermsConditions.length === 0) {
            return -2;
        }

        const batch = firestore().batch();

        allTermsConditions.forEach(termsconditions => {
            const termsconditionsRef = firestore().collection('TermsConditions').doc(termsconditions.id);
            batch.set(termsconditionsRef, {
                id: termsconditions.id,
                content: termsconditions.content,
                implementedDate: firestore.FieldValue.serverTimestamp(),
            });
        });
        await batch.commit();
        return 1;
    } catch (error) {
        console.error('An Error occurred in createTermsConditions', error);
        return -1;
    }
};
