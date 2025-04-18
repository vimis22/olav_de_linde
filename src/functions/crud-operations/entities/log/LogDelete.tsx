import firestore from '@react-native-firebase/firestore';

export const deleteLogById = async (id: string) => {
    try {
        const doc = await firestore().collection('Log').doc(id).get();
        if (doc.exists) {
            return {id: doc.id, ...doc.data()};
        } else {
            console.log('Log does not exist');
            return {id: -1};
        }
    } catch (error) {
        console.log('System is not able to fetch Log by Id', error);
        return {id: -2};
    }
};
