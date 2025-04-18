import firestore from '@react-native-firebase/firestore';

export const deleteChatById = async (id: string) => {
    try {
        const docRef = firestore().collection('Cases').doc(id);
        const doc = await docRef.get();

        if (!doc.exists) {
            console.log('System has successfully deleted the cases', id);
        }

        await docRef.delete();
        return 1;
    } catch (error) {
        console.log('An Error occurred while deleting the chats by ID', error);
        return -1;
    }
};

export const deleteChatByCaseId = async (caseId: string) => {
    try {
        const snapshot = await firestore()
            .collection('Chat')
            .where('Case_ID','==',caseId)
            .get();
        return snapshot.docs.map((doc: {id: any, data: () => any}) => {
            return {id: doc.id, ...doc.data()};
        });
    } catch (error) {
        console.error('System is not able to fetch Chat by caseId', error);
        return {id: -2};
    }
};
