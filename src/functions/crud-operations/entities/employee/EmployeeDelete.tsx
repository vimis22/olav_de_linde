import firestore from '@react-native-firebase/firestore';
import {UserInfo} from '../../UserInfo.ts';

export const deleteEmployeeById = async (employeeId: UserInfo) => {
    try {
        const docRef = firestore().collection('Employee').doc(employeeId.id);
        const doc = await docRef.get();

        if (!doc.exists) {
            console.log('System has successfully deleted the employee by the email', employeeId.id);
        }

        await docRef.delete();
        return 1;
    } catch (error) {
        console.log('An Error occurred while updating the employee by ID', error);
        return -1;
    }
};

export const deleteEmployeeByEmail = async (email: string) => {
    try {
        const snapShot = await firestore()
            .collection('Employee')
            .where('Email','==',email)
            .get();

        if (snapShot.empty){
            console.log('System is not able to find employee in the system');
        }

        const docRef = snapShot.docs[0].ref;
        const docId = snapShot.docs[0].id;

        await docRef.delete();
        return console.log('System has successfully deleted the employee by id: ', docId);
    } catch (error) {
        console.log('An Error occured while deleting the Employee by email', error);
        return -1;
    }
};

export const deleteEmployeeByRole = async (role: string) => {
    try {
        //Du skal tage Employee_Id og Role_Id og sammenligne dem og derefter slette brugeren.
        const snapShot = await firestore()
            .collection('Employee')
            .where('Role','==',role)
            .get();

        if (snapShot.empty){
            console.log('System as not able to find Employee by Role');
        }

        const batch = firestore().batch();
        snapShot.docs.forEach((doc: { ref: any; }) => {
            batch.delete(doc.ref);
        });

        await batch.commit;
        return console.log('System has successfully deleted the Employee Role');
    } catch (error) {
        console.log('An Error occurred while deleting the Employee Role ', error);
    }
};


