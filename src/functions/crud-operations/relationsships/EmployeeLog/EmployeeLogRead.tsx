import firestore from '@react-native-firebase/firestore';

export const readEmployeeLogById = async (id: string) => {
    try {
        const doc = await firestore().collection('EmployeeLog').doc(id).get();
        if (doc.exists) {
            return {id: doc.id, ...doc.data()};
        } else {
            console.log('EmployeeLog does not exist');
            return {id: -2};
        }
    } catch (error) {
        console.log('System is not able to fetch EmployeeLog by Id', error);
        return {id: -1};
    }
};

export const readEmployeeLogByEmployeeId = async (Employee_Id: string) => {
    try {
        const snapshot = await firestore()
            .collection('EmployeeLog')
            .where('Employee_Id','==',Employee_Id)
            .get();
        return snapshot.docs.map((doc: {id: any; data: () => any}) => ({
            id: doc.id,
            ...doc.data(),
        }));
    } catch (error) {
        console.error('System is not able to fetch EmployeeLog', error);
        return {id: -2};
    }
};

export const readEmployeeLogByLogId = async (Log_Id: string) => {
    try {
        const snapshot = await firestore()
            .collection('EmployeeLog')
            .where('Log_Id','==',Log_Id)
            .get();
        return snapshot.docs.map((doc: {id: any; data: () => any}) => ({
            id: doc.id,
            ...doc.data(),
        }));
    } catch (error) {
        console.error('System is not able to fetch EmployeeLog', error);
        return {id: -1};
    }
};
