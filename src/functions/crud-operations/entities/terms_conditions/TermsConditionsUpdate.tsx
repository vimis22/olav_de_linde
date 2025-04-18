import firestore from '@react-native-firebase/firestore';
import {TermsConditionsInfo} from './TermsConditionsInfo.ts';

export const updateTermsConditions = async (termsconditionsInfo: TermsConditionsInfo) => {
    try {
        const {id, ...updatedData} = termsconditionsInfo;
        const docRef = firestore().collection('TermsConditions').doc(id);
        const doc = await docRef.get();

        if (!doc.exists) {
            console.log('System cannot recognize termsconditions information');
            await docRef.update(updatedData);
            return updatedData;
        }
    } catch (error) {
        console.log('An Error occurred while updating the termsconditions', error);
        return -1;
    }
};

export const updateAllTermsConditions = async (allTermsConditions: TermsConditionsInfo[]): Promise<number> => {
    try {
        if (!allTermsConditions || allTermsConditions.length === 0) {
            return -2;
        }

        const batch = firestore().batch();

        allTermsConditions.forEach(termsconditions => {
            const termsconditionsRef = firestore().collection('TermsConditions').doc(termsconditions.id);
            batch.update(termsconditionsRef, {
                content: termsconditions.content,
                implementedDate: firestore.FieldValue.serverTimestamp(),
            });
        });
        await batch.commit();
        return 1;
    } catch (error) {
        console.error('An Error occurred in updating allTermsConditions', error);
        return -1;
    }
};


export const updateContentForTermsConditionsById = async (id: string, content: string) => {
    try {
        const docRef = firestore().collection('TermsConditions').doc(id);
        const doc = await docRef.get();

        if (!doc.exists) {
            console.log('No TermsConditions has been found with : ' + id);
            return;
        }

        await docRef.update({content: content});
        console.log('System has updated the: ' + id + 'with ' + content);
    } catch (error) {
        console.error('An Error has occurred while updating by Content', error);
        return -1;
    }
};

export const updateImplementedDateForTermsConditionsById = async (id: string, implementedDate: string) => {
    try {
        const docRef = firestore().collection('TermsConditions').doc(id);
        const doc = await docRef.get();

        if (!doc.exists) {
            console.log('No TermsConditions has been found with : ' + id);
            return;
        }

        await docRef.update({implementedDate: implementedDate});
        console.log('System has updated the: ' + id + 'with ' + implementedDate);
    } catch (error) {
        console.error('An Error has occurred while updating by ImplementedDate', error);
        return -1;
    }
};
