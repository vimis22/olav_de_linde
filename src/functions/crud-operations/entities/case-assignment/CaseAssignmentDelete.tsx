import firestore from '@react-native-firebase/firestore';
import {CaseAssignmentInfo} from './CaseAssignmentInfo.ts';

export const deleteCaseAssignmentById = async (caseAssignmentInfo: CaseAssignmentInfo) => {
    try {
        const docRef = firestore().collection('CaseAssignment').doc(caseAssignmentInfo.id);
        const doc = await docRef.get();

        if (!doc.exists) {
            console.log('System has successfully deleted the caseAssignment by the email', caseAssignmentInfo.id);
        }

        await docRef.delete();
        return 1;
    } catch (error) {
        console.log('An Error occurred while updating the caseAssignment by ID', error);
        return -1;
    }
};

export const deleteCaseAssignmentByCaseId = async (caseId: string) => {
    try {
        const snapShot = await firestore()
            .collection('CaseAssignment')
            .where('Case_ID','==',caseId)
            .get();
        return snapShot.docs.map((doc: {id: any; data: () => any}) => {
            return {id: doc.id, ...doc.data()};
        });
    } catch (error) {
        console.error('System is not able to fetch caseId', error);
        return {id: -2};
    }
};



