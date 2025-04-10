import firestore from '@react-native-firebase/firestore';


export const deleteRoleById = async (id: string) => {
    try {
        const docRef = firestore().collection('Role').doc(id);
        const doc = await docRef.get();

        if (!doc.exists) {
            console.log('System has successfully deleted the role', id);
        }

        await docRef.delete();
        return 1;
    } catch (error) {
        console.log('An Error occured while updating the role by ID', error);
        return -1;
    }
};

export const deleteRoleByName = async (name: string) => {
    try {
        const snapShot = await firestore()
            .collection('Role')
            .where('Name','==',name)
            .get();
        return snapShot.docs.map((doc: {id: any; data: () => any}) => {
            return {id: doc.id, ...doc.data()};
        });
    } catch (error) {
        console.error('System is not able to fetch Roles', error);
        return {id: -2};
    }
};
