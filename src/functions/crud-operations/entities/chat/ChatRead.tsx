import firestore from '@react-native-firebase/firestore';

export const readChatBy = async (id: string) => {
    try {
        const doc = await firestore().collection('Chat').doc(id).get();
        if (doc.exists) {
            return {id: doc.id, ...doc.data()};
        } else {
            console.log('Case does not exists');
            return {id: -1};
        }
    } catch (error) {
        console.log('System is not able to fetch Chat by Id', error);
        return {id: -2};
    }
};

export const readAllChat = async () => {
    try {
        const snapShot = await firestore().collection('Chat').get();
        return snapShot.docs.map((doc: {id: any; data: () => any}) => {
            return {id: doc.id, ...doc.data()};
        });
    } catch (error) {
        console.log('System is not able to fetch all Chats', error);
        return {id: -2};
    }
};

export const readAllChatByCaseId = async (caseId: string) => {
    try {
        const snapshot = await firestore()
            .collection('Chat')
            .where('Case_ID','==',caseId)
            .get();

        return snapshot.docs.map((doc: {id: any; data: () => any}) => {
            return {id: doc.id, ...doc.data()};
        });
    } catch (error) {
        console.error('System is not able to fetch by CaseId', error);
        return -1;
    }
};


