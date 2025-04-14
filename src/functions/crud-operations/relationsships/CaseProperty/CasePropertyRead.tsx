import firestore from '@react-native-firebase/firestore';

export const readCasePropertyById = async (id: string) => {
    try {
        const doc = await firestore().collection('CaseProperty').doc(id).get();
        if (doc.exists) {
            return {id: doc.id, ...doc.data()};
        } else {
            console.log('CaseProperty does not exist');
            return {id: -2};
        }
    } catch (error) {
        console.log('System is not able to fetch CaseProperty by Id', error);
        return {id: -1};
    }
};

export const readCasePropertyByPropertyId = async (Property_Id: string) => {
    try {
        const snapshot = await firestore()
            .collection('CaseProperty')
            .where('Property_Id','==',Property_Id)
            .get();
        return snapshot.docs.map((doc: {id: any; data: () => any}) => ({
            id: doc.id,
            ...doc.data(),
        }));
    } catch (error) {
        console.error('System is not able to fetch PropertyList', error);
        return {id: -2};
    }
};

export const readCasePropertyByCaseId = async (Case_Id: string) => {
    try {
        const snapshot = await firestore()
            .collection('CaseProperty')
            .where('Case_Id','==',Case_Id)
            .get();
        return snapshot.docs.map((doc: {id: any; data: () => any}) => ({
            id: doc.id,
            ...doc.data(),
        }));
    } catch (error) {
        console.error('System is not able to fetch CaseProperty', error);
        return {id: -1};
    }
};


