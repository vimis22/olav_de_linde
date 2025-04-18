import firestore from '@react-native-firebase/firestore';
import {CaseAssignmentInfo} from './CaseAssignmentInfo.ts';

export const createCaseAssignment = async (caseAssignment: CaseAssignmentInfo) => {
    try {
        const batch = firestore().batch();

        const caseAssignmentRef = firestore().collection('CaseAssignment').doc(caseAssignment.id);
        batch.set(caseAssignmentRef, {
            id: caseAssignment.id,
            name: '',
            caseId: caseAssignment.caseId,
            employeeId: caseAssignment.employeeId,
        });
        await batch.commit();
        return 1;
    } catch (error) {
        console.error('An Error occurred in createCaseAssignment', error);
        return -1;
    }
};
