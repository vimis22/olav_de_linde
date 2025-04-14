import firestore from '@react-native-firebase/firestore';

export const updateEmployeeLogByCustomerId = async (OldEmployee_Id: string, NewEmployee_Id: string) => {
    try {
        const snapshot = await firestore()
            .collection('EmployeeLog')
            .where('Employee_Id','==',OldEmployee_Id)
            .get();

        if (snapshot.empty) {
            console.log('System is not able to recognize employeelog information');
            return -2;
        }

        const batch = firestore().batch();

        snapshot.docs.forEach((doc) => {
            const docRef = firestore().collection('EmployeeLog').doc(doc.id);
            batch.update(docRef, {Employee_Id: NewEmployee_Id});
        });

        await batch.commit();
        console.log('System has updated ' + OldEmployee_Id + 'with: ' + NewEmployee_Id);
        return 1;
    } catch (error) {
        console.error('An Error occurred while updating the EmployeeLog by New Value', error);
        return -1;
    }
};

export const updateEmployeeLogByLogId = async (OldLog_Id: string, NewLog_Id: string) => {
    try {
        const snapshot = await firestore()
            .collection('EmployeeLog')
            .where('Log_Id','==',OldLog_Id)
            .get();

        if (snapshot.empty) {
            console.log('System is not able to recognize employeelog information');
            return -2;
        }

        const batch = firestore().batch();

        snapshot.docs.forEach((doc) => {
            const docRef = firestore().collection('EmployeeLog').doc(doc.id);
            batch.update(docRef, {Log_Id: NewLog_Id});
        });

        await batch.commit();
        console.log('System has updated ' + OldLog_Id + 'with: ' + NewLog_Id);
        return 1;
    } catch (error) {
        console.error('An Error occurred while updating the EmployeeLog by New Value', error);
        return -1;
    }
};
