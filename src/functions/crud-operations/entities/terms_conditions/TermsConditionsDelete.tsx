import firestore from '@react-native-firebase/firestore';

export const deleteTermsConditionsById = async (id: string) => {
    try {
        const doc = await firestore().collection('TermsConditions').doc(id).get();
        if (doc.exists) {
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
