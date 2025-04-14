import firestore from '@react-native-firebase/firestore';

export const updateCasePropertyByPropertyId = async (OldProperty_Id: string, NewProperty_Id: string) => {
    try {
        const snapshot = await firestore()
            .collection('CaseProperty')
            .where('Property_Id','==',OldProperty_Id)
            .get();

        if (snapshot.empty) {
            console.log('System is not able to recognize caseproperty information');
            return -2;
        }

        const batch = firestore().batch();

        snapshot.docs.forEach((doc) => {
            const docRef = firestore().collection('CaseProperty').doc(doc.id);
            batch.update(docRef, {Propeerty_Id: NewProperty_Id});
        });

        await batch.commit();
        console.log('System has updated ' + OldProperty_Id + 'with: ' + NewProperty_Id);
        return 1;
    } catch (error) {
        console.error('An Error occurred while updating the CaseProperty by New Value', error);
        return -1;
    }
};

export const CasePropertyByCaseId = async (OldCase_Id: string, NewCase_Id: string) => {
    try {
        const snapshot = await firestore()
            .collection('CaseProperty')
            .where('Case_Id','==',OldCase_Id)
            .get();

        if (snapshot.empty) {
            console.log('System is not able to recognize caseproperty information');
            return -2;
        }

        const batch = firestore().batch();

        snapshot.docs.forEach((doc) => {
            const docRef = firestore().collection('CaseProperty').doc(doc.id);
            batch.update(docRef, {Case_Id: NewCase_Id});
        });

        await batch.commit();
        console.log('System has updated the ' + OldCase_Id + 'with: ' + NewCase_Id);
        return 1;
    } catch (error) {
        console.error('An Error occurred while updating the CaseProperty by New Value', error);
        return -1;
    }
};
