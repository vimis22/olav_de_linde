import firestore from '@react-native-firebase/firestore';

/*
@link https://cloud.google.com/firestore/docs/samples/firestore-data-reference-subcollection?hl=en
 */
export const readRoleById = async (id: string) => {
    try {
        const doc = await firestore().collection('Role').doc(id).get();
        if (doc.exists) {
            return {id: doc.id, ...doc.data}
        } else {
            console.log('The Role does not exist');
            return {id: -1};
        }
    } catch (error) {
        console.log('System is not able to fetch Role by Id', error);
        return {id: -2};
    }
};


export const getAllRoles = async () => {
    try{
        const snapshot = await firestore().collection('Role').get();
        return snapshot.docs.map((doc: {id: any; data: () => any}) => {
            return {id: doc.id, ...doc.data()};
        });
    } catch (error) {
        console.log('System is not able fetch all Roles', error);
        return {id: -2};
    }
};
