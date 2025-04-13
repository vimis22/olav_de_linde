import firestore from '@react-native-firebase/firestore';

export const readRoleListById = async (id: string) => {
    try {
        const doc = await firestore().collection('Role_List').doc(id).get();
        if (doc.exists) {
            return {id: doc.id, ...doc.data()};
        } else {
            console.log('Role_List does not exist');
            return {id: -2};
        }
    } catch (error) {
        console.log('System is not able to fetch Role_List by Id', error);
        return {id: -1};
    }
};

export const readRoleListByEmployeeId = async (Employee_Id: string) => {
    try {
        const snapShot = await firestore()
            .collection('Role_List')
            .where('Employee_Id','==',Employee_Id)
            .get();
        return snapShot.docs.map((doc: {id: any; data: () => any}) => ({
            id: doc.id,
            ...doc.data(),
        }));
    } catch (error) {
        console.error('System is not able to fetch Role_List', error);
        return {id: -1};
    }
};

export const readRoleListByRoleId = async (Role_Id: string) => {
    try {
        const snapShot = await firestore()
            .collection('Role_List')
            .where('Role_Id','==',Role_Id)
            .get();
        return snapShot.docs.map((doc: {id: any; data: () => any}) => ({
            id: doc.id,
            ...doc.data(),
        }));
    } catch (error) {
        console.error('System is not able to fetch Role_List', error);
        return {id: -1};
    }
};
