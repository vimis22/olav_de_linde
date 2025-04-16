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

export const updateCaseByCreationCase = async (id: string, creationDate: Date) => {
    try {
        const docRef = firestore().collection('Case').doc(id);
        const doc = await docRef.get();
        if (!doc.exists) {
            console.log('Non Customer has been found with ID: ' + id);
            return 1;
        }

        await docRef.update({creationDate: creationDate});
        console.log('System has updated the' + id + 'with: ' + creationDate);
    } catch (error) {
        console.error('An Error has occurred while updating by ID', error);
        return -1;
    }
};

export const updateCaseByUpdatedCase = async (id: string, updateDate: Date) => {
    try {
        const docRef = firestore().collection('Case').doc(id);
        const doc = await docRef.get();
        if (!doc.exists) {
            console.log('Non Customer has been found with ID: ' + id);
            return 1;
        }

        await docRef.update({creationDate: updateDate});
        console.log('System has updated the' + id + 'with: ' + updateDate);
    } catch (error) {
        console.error('An Error has occurred while updating by ID', error);
        return -1;
    }
};

export const updateCaseByDeadline = async (id: string, deadline: Date) => {
    try {
        const docRef = firestore().collection('Case').doc(id);
        const doc = await docRef.get();
        if (!doc.exists) {
            console.log('Non Customer has been found with ID: ' + id);
            return 1;
        }

        await docRef.update({deadline: deadline});
        console.log('System has updated the' + id + 'with: ' + deadline);
    } catch (error) {
        console.error('An Error has occurred while updating by ID', error);
        return -1;
    }
};

export const updateCaseByTitle = async (id: string, title: string) => {
    try {
        const docRef = firestore().collection('Case').doc(id);
        const doc = await docRef.get();
        if (!doc.exists) {
            console.log('Non Customer has been found with ID: ' + id);
            return 1;
        }

        await docRef.update({title: title});
        console.log('System has updated the' + id + 'with: ' + title);
    } catch (error) {
        console.error('An Error has occurred while updating by ID', error);
        return -1;
    }
};

export const updateCaseByDescription = async (id: string, description: string) => {
    try {
        const docRef = firestore().collection('Case').doc(id);
        const doc = await docRef.get();
        if (!doc.exists) {
            console.log('Non Customer has been found with ID: ' + id);
            return 1;
        }

        await docRef.update({description: description});
        console.log('System has updated the' + id + 'with: ' + description);
    } catch (error) {
        console.error('An Error has occurred while updating by ID', error);
        return -1;
    }
};


