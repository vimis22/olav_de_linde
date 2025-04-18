import firestore from '@react-native-firebase/firestore';
import {CaseInfo} from './CaseInfo.ts';

export const updateCase = async (caseInfo: CaseInfo) => {
    try {
        const {id, ...updatedData} = caseInfo;
        const docRef = firestore().collection('Case').doc(id);
        const doc = await docRef.get();

        if (!doc.exists) {
            console.log('System cannot recognize case information');
            await docRef.update(updatedData);
            return updatedData;
        }
    } catch (error) {
        console.log('An Error occurred while updating the case', error);
        return -1;
    }
};


export const updateAllUsers = async (allCases: CaseInfo[]): Promise<number> => {
    try {
        if (!allCases || allCases.length === 0) {
            return -2;
        }

        const batch = firestore().batch();

        allCases.forEach(defect => {
            const caseRef = firestore().collection('Case').doc(defect.id);
            batch.update(caseRef, {
                title: defect.title,
                description: defect.description,
                creationDate: firestore.FieldValue.serverTimestamp(),
                updateDate: firestore.FieldValue.serverTimestamp(),
                deadline: firestore.FieldValue.serverTimestamp(),
            });
        });
        await batch.commit();
        return 1;
    } catch (error) {
        console.error('An Error occurred in updating allCases', error);
        return -1;
    }
};

export const updateCaseByDeadline = async (id: string, deadline: Date) => {
    try {
        const docRef = firestore().collection('Case').doc(id);
        const doc = await docRef.get();
        if (!doc.exists) {
            console.log('Case has been found with Deadline: ' + deadline);
            return 1;
        }

        await docRef.update({deadline: deadline});
        console.log('System has updated the' + deadline + 'with: ' + deadline);
    } catch (error) {
        console.error('An Error has occurred while updating by Deadline', error);
        return -1;
    }
};

export const updateCaseByTitle = async (id: string, title: string) => {
    try {
        const docRef = firestore().collection('Case').doc(id);
        const doc = await docRef.get();
        if (!doc.exists) {
            console.log('Non Customer has been found with Title: ' + title);
            return 1;
        }

        await docRef.update({title: title});
        console.log('System has updated the' + title + 'with: ' + title);
    } catch (error) {
        console.error('An Error has occurred while updating by Title', error);
        return -1;
    }
};

export const updateCaseByDescription = async (id: string, description: string) => {
    try {
        const docRef = firestore().collection('Case').doc(id);
        const doc = await docRef.get();
        if (!doc.exists) {
            console.log('Non Customer has been found with Description: ' + description);
            return 1;
        }

        await docRef.update({description: description});
        console.log('System has updated the' + description + 'with: ' + description);
    } catch (error) {
        console.error('An Error has occurred while updating by Description', error);
        return -1;
    }
};


