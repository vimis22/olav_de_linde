import firestore from '@react-native-firebase/firestore';

export const deletePropertyListById = async (id: string) => {
    try {
        const docRef = firestore().collection('Property_List').doc(id);
        const doc = await docRef.get();

        if (!doc.exists) {
            console.log('System has successfully deleted a relation in PropertyList by Id', id);
        }

        await docRef.delete();
        return 1;
    } catch (error) {
        console.log('An Error occurred while deleting the property_list by id', error);
        return -1;
    }
};

export const deletePropertyByCustomer = async (Customer_Id: string) => {
    try {
        const snapShot = await firestore()
            .collection('Property_List')
            .where('Customer_Id','==',Customer_Id)
            .get();

        if (snapShot.empty){
            console.log('System is not able to find customer_id in the system');
            return -2;
        }

        const docRef = snapShot.docs[0].ref;

        await docRef.delete();
        console.log('System has successfully deleted the property_list by customer_id');
        return 1;
    }
};

export const deletePropertyByProperty = async (Property_Id: string) => {
    try {
        const snapShot = await firestore()
            .collection('Property_List')
            .where('Property_Id','==',Property_Id)
            .get();

        if (snapShot.empty) {
            console.log('System is not able to find property_id in the system');
            return -2;
        }

        const docRef = snapShot.docs[0].ref;

        await docRef.delete();
        console.log('System has successfully deleted the property_list by property_id');
        return 1;
    }
};

export const deletePropertyByListByCustomerProperty = async (Customer_Id: string, Property_Id: string) => {
    try {
        const snapShot = await firestore()
            .collection('Property_List')
            .where('Customer_Id','==',Customer_Id)
            .where('Property_Id','==',Property_Id)
            .get();

        if (snapShot.empty) {
            console.log('System is not able to find property_id in the system');
            return -2;
        }

        const docRef = snapShot.docs[0].ref;
        const docId = snapShot.docs[0].id;

        await docRef.delete();
        console.log('System has successfully deleted the property_list by both the customer_id and property_id ', docId);
        return 1;
    }
};


