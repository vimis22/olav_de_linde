import firestore from '@react-native-firebase/firestore';
import {CaseInfo} from './CaseInfo.ts';
import {EnumMessages} from '../../EnumMessages.ts';

/**
 * Updates a case in the Firestore database based on the provided case information.
 * @param caseInfo - The case information containing title, description, and optional deadline.
 * @returns Promises a result based on Enums, which is either SUCCESS or FAILED during execution.
 */
export const updateCase = async (caseInfo: CaseInfo): Promise<CaseInfo | string> => {
    try {
        const {id, ...updatedData} = caseInfo;
        const docRef = firestore().collection('Case').doc(id);
        const doc = await docRef.get();

        if (doc.exists) {
            await docRef.update(updatedData);
            console.log('Case updated successfully');
            return updatedData as CaseInfo;
        } else {
            console.log('System cannot recognize case information');
            return EnumMessages(-2);
        }
    } catch (error) {
        console.log('An Error occurred while updating the case', error);
        return EnumMessages(-1);
    }
};

/**
 * Updates all Users related to cases in the Firestore database based on the provided case information.
 * @param allCases
 * @returns Promises a result based on Enums, which is either SUCCESS or FAILED during execution.
 */
export const updateAllUsers = async (allCases: CaseInfo[]): Promise<string> => {
    try {
        if (!allCases || allCases.length === 0) {
            return EnumMessages(-2);
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
        return EnumMessages(1);
    } catch (error) {
        console.error('An Error occurred in updating allCases', error);
        return EnumMessages(-1);
    }
};

/**
 * Updates all Cases by Deadline in the Firestore database based on the provided case information.
 * @param id
 * @param deadline
 * @returns Promises a result based on Enums, which is either SUCCESS or FAILED during execution.
 */
export const updateCaseByDeadline = async (id: string, deadline: Date): Promise<string> => {
    try {
        const docRef = firestore().collection('Case').doc(id);
        const doc = await docRef.get();
        if (doc.exists) {
            await docRef.update({deadline: deadline});
            console.log('System has updated the case with deadline: ' + deadline);
            return EnumMessages(1);
        } else {
            console.log('No case found with ID: ' + id);
            return EnumMessages(-2);
        }
    } catch (error) {
        console.error('An Error has occurred while updating by Deadline', error);
        return EnumMessages(-1);
    }
};
/**
 * Updates all Cases by Title in the Firestore database based on the provided case information.
 * @param id
 * @param title
 * @returns Promises a result based on Enums, which is either SUCCESS or FAILED during execution.
 */
export const updateCaseByTitle = async (id: string, title: string): Promise<string> => {
    try {
        const docRef = firestore().collection('Case').doc(id);
        const doc = await docRef.get();
        if (doc.exists) {
            await docRef.update({title: title});
            console.log('System has updated the case with title: ' + title);
            return EnumMessages(1);
        } else {
            console.log('No case found with ID: ' + id);
            return EnumMessages(-2);
        }
    } catch (error) {
        console.error('An Error has occurred while updating by Title', error);
        return EnumMessages(-1);
    }
};

/**
 * Updates all Cases by Description in the Firestore database based on the provided case information.
 * @param id
 * @param description
 * @returns Promises a result based on Enums, which is either SUCCESS or FAILED during execution.
 */
export const updateCaseByDescription = async (id: string, description: string): Promise<string> => {
    try {
        const docRef = firestore().collection('Case').doc(id);
        const doc = await docRef.get();
        if (doc.exists) {
            await docRef.update({description: description});
            console.log('System has updated the case with description: ' + description);
            return EnumMessages(1);
        } else {
            console.log('No case found with ID: ' + id);
            return EnumMessages(-2);
        }
    } catch (error) {
        console.error('An Error has occurred while updating by Description', error);
        return EnumMessages(-1);
    }
};
