import firestore from '@react-native-firebase/firestore';

export const deleteRoleListById = async (id: string) => {
    try {
        const docRef = firestore().collection('Role_List').doc(id);
        const doc = await docRef.get();

        if (!doc.exists) {
            console.log('System has successfully deleted a relation in Role_List by Id', id);
        }

        await docRef.delete();
        return 1;
    } catch (error) {
        console.log('An Error occurred while deleting the role_list by id', error);
        return -1;
    }
};

export const deleteRolelistByEmployee = async (Employee_Id: string) => {
    try {
        const snapShot = await firestore()
            .collection('Role_List')
            .where('Employee_Id','==',Employee_Id)
            .get();

        if (snapShot.empty) {
            console.log('System is not able to find employee_id in the system');
        }

        const docRef = snapShot.docs[0].ref;
        const docId = snapShot.docs[0].id;

        await docRef.delete();
        return console.log('System has successfully deleted the property_list by employee_id: ', docId);
    }
};

export const deleteRolelistByRole = async (Role_Id: string) => {
    try {
        const snapShot = await firestore()
            .collection('Role_List')
            .where('Role_Id','==',Role_Id)
            .get();

        if (snapShot.empty) {
            console.log('System is not able to find role_id in the system');
        }

        const docRef = snapShot.docs[0].ref;
        const docId = snapShot.docs[0].id;

        await docRef.delete();
        return console.log('System has successfully deleted the property_list by role_id: ', docId);
    }
};

export const deleteRolelistByEmployeeRole = async (Employee_Id: string, Role_Id: string) => {
    try {
        const snapShot = await firestore()
            .collection('Role_List')
            .where('Employee_Id','==',Employee_Id)
            .where('Role_Id','==',Role_Id)
            .get();

        if (snapShot.empty) {
            console.log('System is not able to find employee_id and role_id in the system');
        }

        const docRef = snapShot.docs[0].ref;
        const docId = snapShot.docs[0].id;

        await docRef.delete();
        return console.log('System has successfully deleted the property_list by both the employee_id and role_id: ', docId);
    }
};
