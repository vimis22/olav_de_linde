import firestore from '@react-native-firebase/firestore';

export const deleteEmployeeLogById = async (id: string) => {
    try {
        const docRef = firestore().collection('EmployeeLog').doc(id);
        const doc = await docRef.get();

        if (!doc.exists) {
            console.log('System has successfully deleted a relation in EmployeeLog by Id', id);
            return 1;
        }

        await docRef.delete();
        return 1;
    } catch (error) {
        console.log('An Error occurred while deleting the EmployeeLog by id', error);
        return -1;
    }
};

export const deleteEmployeeLogByEmployee = async (Employee_Id: string) => {
    try {
        const snapshot = await firestore()
            .collection('EmployeeLog')
            .where('Employee_Id','==',Employee_Id)
            .get();

        if (snapshot.empty) {
            console.log('System is not able to find employee_id in the system');
            return -2;
        }

        const docRef = snapshot.docs[0].ref;

        await docRef.delete();
        console.log('System has successfully deleted the EmployeeLog by employee_id');
        return 1;
    } catch (error) {
        console.log('An Error occurred while deleting the EmployeeLog by employee_id', error);
        return -1;
    }
};

export const deleteEmployeeLogByLog = async (Log_Id: string) => {
    try {
        const snapshot = await firestore()
            .collection('EmployeeLog')
            .where('Log_Id','==',Log_Id)
            .get();

        if (snapshot.empty) {
            console.log('System is not able to find log_id in the system');
            return -2;
        }

        const docRef = snapshot.docs[0].ref;

        await docRef.delete();
        console.log('System has successfully deleted the CustomerLog by log_id');
        return 1;
    } catch (error) {
        console.log('An Error occurred while deleting the CustomerLog by log_id', error);
        return -1;
    }
};

export const deleteEmployeeLogByEmployeeLog = async (Employee_Id: string, Log_Id: string) => {
    try {
        const snapshot = await firestore()
            .collection('EmployeeLog')
            .where('Employee_Id','==',Employee_Id)
            .where('Log_Id','==',Log_Id)
            .get();

        if (snapshot.empty) {
            console.log('System is not able to find both employee_id and log_id in the system');
            return -2;
        }

        const docRef = snapshot.docs[0].ref;

        await docRef.delete();
        console.log('System has successfully deleted the EmployeeLog by both the employee_id and log_id');
        return 1;
    } catch (error) {
        console.log('An Error occurred while deleting the EmployeeLog by both employee_id and log_id', error);
        return -1;
    }
};

