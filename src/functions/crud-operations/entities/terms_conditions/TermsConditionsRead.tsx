import firestore from '@react-native-firebase/firestore';

export const getTermsConditionsById = async (id: string) => {
    try{
        const doc = await firestore().collection('TermsConditions').doc(id).get();
        if (doc.exists) {
            //Dette her return er default.
            return {id: doc.id, ...doc.data()};
        } else {
            console.log('TermsConditions does not exist');
            return {id: -1};
        }
    } catch (error) {
        console.log('System is not able to fetch TermsConditions by Id', error);
        return {id: -2};
    }
};

export const getAllTermsConditions = async () => {
    try {
        const snapshot = await firestore().collection('TermsConditions').get();
        return snapshot.docs.map((doc: {id: any; data: () => any}) => {
            return {id: doc.id, ...doc.data}
        });
    } catch (error) {
        console.log('System is not able to fetch all TermsConditions', error);
        return {id: -2};
    }
};

export const getAllTermsConditionsByContent = async (content: string) => {
    try {
        const snapshot = await firestore()
            .collection('TermsConditions')
            .where('Content','==',content)
            .get();
        return snapshot.docs.map((doc: {id: any; data: () => any}) => ({
            id: doc.id,
            ...doc.data(),
        }));
    } catch (error) {
        console.error('System is not able fetch by TermsConditions', error);
        return {id: -2};
    }
};

export const getAllTermsConditionsByTimestamp = async (implementedDate: Date) => {
    try {
        const snapshot = await firestore()
            .collection('TermsConditions')
            .where('ImplementedDate','==',implementedDate)
            .get();
        return snapshot.docs.map((doc: {id: any; data: () => any}) => ({
            id: doc.id,
            ...doc.data(),
        }));
    } catch (error) {
        console.error('System is not able fetch by TermsConditions', error);
        return {id: -2};
    }
};
