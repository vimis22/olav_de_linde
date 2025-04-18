import firestore from '@react-native-firebase/firestore';
import {CaseAssignmentInfo} from './CaseAssignmentInfo.ts';
import {CaseInfo} from "../case/CaseInfo.ts";

export const updateCaseAssignmentById = async (caseAssignment: CaseAssignmentInfo) => {
    try {
        const {id, ...updatedData} = caseAssignment;
        const docRef = firestore().collection('CaseAssignment').doc(id);
        const doc = await docRef.get();

        if (!doc.exists) {
            console.log('System cannot recognize case assignment information');
            await docRef.update(updatedData);
            return updatedData;
        }
    } catch (error) {
        console.log('An Error occured while updating the case', error);
        return -1;
    }
};

export const updateAllCaseAssignments = async (allCaseAssignments: CaseAssignmentInfo[]): Promise<number> => {
    try {
        if (!allCaseAssignments || allCaseAssignments.length === 0) {
            return -2;
        }

        const batch = firestore().batch();

        allCaseAssignments.forEach(caseassignment => {
            const caseAssignmentRef = firestore().collection('Case').doc(caseassignment.id);
            batch.update(caseAssignmentRef, {
                name: caseassignment.name,
                caseId: caseassignment.caseId,
                employeeId: caseassignment.employeeId,
            });
        });
        await batch.commit();
        return 1;
    } catch (error) {
        console.error('An Error occured in updating allCaseAssignments', error);
        return -1;
    }
};

export const updateNameForCaseAssignmentById = async (id: string, name: string) => {
    try {
        const snapshot = await firestore()
            .collection('CaseAssignment')
            .where('id','==',id)
            .get();

        if (snapshot.empty) {
            console.log('No CaseAssignment has been found with the name: ' + name);
            return -2;
        }

        const docRef = snapshot.docs[0].ref;
        await docRef.update({Name: name});
        console.log('System has updated name from: :' + name + ' to' + name);
        return 1;
    } catch (error) {
        console.log('An Error occurred while updating the name by an old name ', error);
        return -1;
    }
};

export const updateCaseIdForCaseAssignmentById = async (id: string, caseId: string) => {
    try {
        const snapshot = await firestore()
            .collection('CaseAssignment')
            .where('Id','==',id)
            .get();

        if (snapshot.empty) {
            console.log('No CaseAssignment has been found with the id: ' + id);
            return -2;
        }

        const docRef = snapshot.docs[0].ref;
        await docRef.update({Case_ID: caseId});
        console.log('System has updated name from: :' + caseId + ' to' + caseId);
        return 1;
    } catch (error) {
        console.log('An Error occurred while updating the CaseId by an Id ', error);
        return -1;
    }
};

export const updateEmployeeIdForCaseAssignmentById = async (id: string, employeeId: string) => {
    try {
        const snapshot = await firestore()
            .collection('CaseAssignment')
            .where('Id','==',id)
            .get();

        if (snapshot.empty) {
            console.log('No CaseAssignment has been found with the name: ' + employeeId);
            return -2;
        }

        const docRef = snapshot.docs[0].ref;
        await docRef.update({Employee_ID: employeeId});
        console.log('System has updated name from: :' + employeeId + ' to' + employeeId);
        return 1;
    } catch (error) {
        console.log('An Error occurred while updating the EmployeeId by an Id ', error);
        return -1;
    }
};
