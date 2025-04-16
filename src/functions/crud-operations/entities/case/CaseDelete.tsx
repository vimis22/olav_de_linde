import firestore, {doc} from '@react-native-firebase/firestore';

export const deleteCasesById = async (id: string) => {
    try {
        const docRef = firestore().collection('Cases').doc(id);
        const doc = await docRef.get();

        if (!doc.exists) {
            console.log('System has successfully deleted the cases', id);
        }

        await docRef.delete();
        return 1;
    } catch (error) {
        console.log('An Error occurred while deleting the cases by ID', error);
        return -1;
    }
};

export const deleteCaseByCreationDate = async (creationDate: Date) => {
    try {
        const snapShot = await firestore()
            .collection('Case')
            .where('CreationDate','==',creationDate)
            .get();
        return snapShot.docs.map((doc: {id: any, data: () => any}) => {
            return {id: doc.id, ...doc.data()};
        });
    } catch (error) {
        console.error('System is not able to fetch Case by creationDate', error);
        return {id: -2};
    }
};

export const deleteCaseByUpdateDate = async (updateDate: Date) => {
    try {
        const snapShot = await firestore()
            .collection('Case')
            .where('UpdateCreate','==', updateDate)
            .get();
        return snapShot.docs.map((doc: {id: any, data: () => any}) => {
            return {id: doc.id, ...doc.data()};
        });
    } catch (error) {
        console.error('System is not able to fetch Case by UpdateDate', error);
        return {id: -2};
    }
};

export const deleteCaseByDeadline = async (deadline: Date) => {
    try {
        const snapShot = await firestore()
            .collection('Case')
            .where('Deadline','==', deadline)
            .get();
        return snapShot.docs.map((doc: {id: any, data: () => any}) => {
            return {id: doc.id, ...doc.data()};
        });
    } catch (error) {
        console.error('System is not able to fetch Case by Deadline', error);
        return {id: -2};
    }
};

export const deleteCaseByTitle = async (title: string) => {
    try {
        const snapShot = await firestore()
            .collection('Case')
            .where('Title','==',title)
            .get();
        return snapShot.docs.map((doc: {id: any, data: () => any}) => {
            return {id: doc.id, ...doc.data()};
        });
    } catch (error) {
        console.error('System is not able to fetch Case by Title', error);
        return {id: -2};
    }
};

export const deleteCaseByDescription = async (description: string) => {
    try {
        const snapShot = await firestore()
            .collection('Case')
            .where('Description','==',description)
            .get();
        return snapShot.docs.map((doc: {id: any, data: () => any}) => {
            return {id: doc.id, ...doc.data()};
        });
    } catch (error) {
        console.error('System is not able to fetch Case by Description', error);
        return {id: -2};
    }
};
