import firestore from '@react-native-firebase/firestore';

export const updateRolelistByEmployeeId = async (OldEmployee_Id: string, NewEmployee_Id: string) => {
    try {
        const snapShot = await firestore()
            .collection('Role_List')
            .where('Employee_Id','==',OldEmployee_Id)
            .get();

        if (snapShot.empty) {
            console.log('System is not able to recognize role_list information');
            return -1;
        }

        const batch = firestore().batch();

        snapShot.docs.forEach((doc) => {
            const docRef = firestore().collection('Role_List').doc(doc.id);
            batch.update(docRef, {Employee_Id: NewEmployee_Id});
        });

        await batch.commit();
        console.log('System has updated the ' + OldEmployee_Id + 'with: ' + NewEmployee_Id);
        return 1;
    } catch (error) {
        console.error('An Error occured while updating the Role_List by New Value', error);
        return -1;
    }
};

export const updateRolelistByRoleId = async (OldRole_Id: string, NewRole_Id: string) => {
    try {
        const snapShot = await firestore()
            .collection('Role_List')
            .where('Role_Id','==',OldRole_Id)
            .get();

        if (snapShot.empty) {
            console.log('System is not able to recognize role_list information');
            return -1;
        }

        const batch = firestore().batch();

        snapShot.docs.forEach((doc) => {
            const docRef = firestore().collection('Role_List').doc(doc.id);
            batch.update(docRef, {Role_Id: NewRole_Id});
        });

        await batch.commit();
        console.log('System has updated the ' + OldRole_Id + 'with: ' + NewRole_Id);
        return 1;
    } catch (error) {
        console.error('An Error occured while updating the Role_List by New Value', error);
        return -1;
    }
};
