import firestore from '@react-native-firebase/firestore';

export const updatePropertyListCustomerId= async (OldCustomer_Id: string, NewCustomer_Id: string) => {
    try {
        const snapShot = await firestore()
            .collection('Property_List')
            .where('Customer_Id','==',OldCustomer_Id)
            .get();

        if (snapShot.empty) {
            console.log('System is not able to recognize property_list information');
            return -1;
        }

        const batch = firestore().batch();

        snapShot.docs.forEach((doc) => {
            const docRef = firestore().collection('Property_List').doc(doc.id);
            batch.update(docRef, {Customer_Id: NewCustomer_Id});
        });

        await batch.commit();
        console.log('System has updated the ' + OldCustomer_Id + 'with ' + NewCustomer_Id);
        return 1;
    } catch (error) {
        console.error('An Error ocurred while updating the Property_List by New Vaiue', error);
        return -1;
    }
};

export const updatePropertyByListPropertyId = async (OldProperty_Id: string, NewProperty_Id: string) => {
    try {
        const snapShot = await firestore()
            .collection('Property_List')
            .where('Customer_Id','==',OldProperty_Id)
            .get();

        if (snapShot.empty) {
            console.log('System is not able to recognize property_list information');
            return -1;
        }

        const batch = firestore().batch();

        snapShot.docs.forEach((doc) => {
            const docRef = firestore().collection('Property_List').doc(doc.id);
            batch.update(docRef, {Customer_Id: NewProperty_Id});
        });

        await batch.commit();
        console.log('System has updated the ' + OldProperty_Id + 'with ' + NewProperty_Id);
        return 1;
    } catch (error) {
        console.error('An Error ocurred while updating the Property_List by New Vaiue', error);
        return -1;
    }
};


