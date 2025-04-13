import firestore from '@react-native-firebase/firestore';

export const readPropertyListById = async (id: string) => {
    try {
        const doc = await firestore().collection('Property_List').doc(id).get();
        if (doc.exists) {
            return {id: doc.id, ...doc.data()};
        } else {
            console.log('Property_List does not exist');
            return {id: -2};
        }
    } catch (error) {
        console.log('System is not able to fetch Property_List by Id', error);
        return {id: -1};
    }
};

export const readPropertyListByCustomerId = async (Customer_Id: string) => {
    try {
        const snapshot = await firestore()
            .collection('Property_List')
            .where('Customer_Id','==',Customer_Id)
            .get();
        return snapshot.docs.map((doc: {id: any; data: () => any}) => ({
            id: doc.id,
            ...doc.data(),
        }));
    } catch (error) {
        console.error('System is not able to fetch Property_List', error);
        return {id: -1};
    }
};

export const readPropertyListByPropertyId = async (Property_Id: string) => {
    try {
        const snapshot = await firestore()
            .collection('Property_List')
            .where('Property_Id','==',Property_Id)
            .get();
        return snapshot.docs.map((doc: {id: any; data: () => any}) => ({
            id: doc.id,
            ...doc.data(),
        }));
    } catch (error) {
        console.error('System is not able to fetch Property_List', error);
        return {id: -2};
    }
};
