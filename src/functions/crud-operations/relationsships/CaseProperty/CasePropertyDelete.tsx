import firestore from '@react-native-firebase/firestore';

export const deleteCasePropertyById = async (id: string) => {
    try {
        const docRef = firestore().collection('CaseProperty').doc(id);
        const doc = await docRef.get();

        if (!doc.exists) {
            console.log('System has successfully deleted a relation in CaseProperty by Id', id);
            return 1;
        }

        await docRef.delete();
        return 1;
    } catch (error) {
        console.log('An Error occurred while deleting the caseproperty by id', error);
        return -1;
    }
};

export const deleteCasePropertyByProperty = async (Property_Id: string) => {
    try {
        const snapshot = await firestore()
            .collection('CaseProperty')
            .where('Property_Id','==',Property_Id)
            .get();

        if (snapshot.empty) {
            console.log('System is not able to find property_id in the system');
            return -2;
        }

        const docRef = snapshot.docs[0].ref;

        await docRef.delete();
        console.log('System has successfully deleted the caseproperty by property_id');
        return 1;
    } catch (error) {
        console.log('An Error occurred while deleting the caseproperty by property_id', error);
        return -1;
    }
};

export const deleteCasePropertyByCase = async (Case_Id: string) => {
    try {
        const snapshot = await firestore()
            .collection('CaseProperty')
            .where('Case_Id','==',Case_Id)
            .get();

        if (snapshot.empty) {
            console.log('System is not able to find case_id in the system');
            return -2;
        }

        const docRef = snapshot.docs[0].ref;

        await docRef.delete();
        console.log('System has successfully delete the caseproperty by case_id');
        return 1;
    } catch (error) {
        console.log('An Error occurred while deleting the caseproperty by case_id', error);
        return -1;
    }
};

export const deleteCasePropertyByPropertyCase = async (Property_Id: string, Case_Id: string) => {
    try {
        const snapshot = await firestore()
            .collection('CaseProperty')
            .where('Property_Id','==',Property_Id)
            .where('Case_Id','==',Case_Id)
            .get();

        if (snapshot.empty) {
            console.log('System is not able to find both property_id and case_id in the system');
            return -2;
        }

        const docRef = snapshot.docs[0].ref;

        await docRef.delete();
        console.log('System has successfully deleted the caseproperty by both the property_id and case_id');
        return 1;
    } catch (error) {
        console.log('An Error occurred while deleting the caseproperty by id', error);
        return -1;
    }
};
