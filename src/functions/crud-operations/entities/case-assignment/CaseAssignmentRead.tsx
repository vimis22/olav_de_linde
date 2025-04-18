import firestore from '@react-native-firebase/firestore';

export const getCustomerById = async (id: string) => {
    try {
        const doc = await firestore().collection('CaseAssignment').doc(id).get();
        if (doc.exists) {
            //Dette her return er default.
            return {id: doc.id, ...doc.data()};
        } else {
            console.log('CaseAssignment does not exist');
            return {id: -1};
        }
    } catch (error) {
        console.log('System is not able to fetch CaseAssignment by Id', error);
        return {id: -2};
    }
};

export const getAllCaseAssignment = async () => {
    try {
        const snapshot = await firestore().collection('CaseAssignment').get();
        return snapshot.docs.map((doc: {id: any; data: () => any}) => {
            return {id: doc.id, ...doc.data()};
        });
    } catch (error) {
        console.log('System is not able fetch all CaseAssignment', error);
        return {id: -2};
    }
};

export const getAllCaseAssignmentByName = async (name: string) => {
    try {
        const snapshot = await firestore()
            .collection('CaseAssignment')
            .where('Name','==',name)
            .get();
        return snapshot.docs.map((doc: {id: any; data: () => any}) => ({
            id: doc.id,
            ...doc.data(),
        }));
    } catch (error) {
        console.error('System is not able fetch CaseAssignment by Name', error);
        return {id: -2};
    }
};


export const getAllCaseAssignmentByCaseId = async (caseId: string) => {
    try {
        const snapshot = await firestore()
            .collection('CaseAssignment')
            .where('Case_ID','==', caseId)
            .get();
        return snapshot.docs.map((doc: {id: any; data: () => any}) => ({
            id: doc.id,
            ...doc.data(),
        }));
    } catch (error) {
        console.error('System is not able fetch CaseAssignment by caseId', error);
        return {id: -2};
    }
};

export const getAllCaseAssignmentByEmployeeId = async (employeeId: string) => {
    try {
        const snapshot = await firestore()
            .collection('CaseAssignment')
            .where('Employee_ID','==', employeeId)
            .get();
        return snapshot.docs.map((doc: {id: any; data: () => any}) => ({
            id: doc.id,
            ...doc.data(),
        }));
    } catch (error) {
        console.error('System is not able fetch CaseAssignment by employeeId', error);
        return {id: -2};
    }
};
