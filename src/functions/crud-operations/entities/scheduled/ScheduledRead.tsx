import firestore from '@react-native-firebase/firestore';

export const updateScheduleById = async (id: string) => {
    try {
        const doc = await firestore().collection('Scheduled').doc(id).get();
        if (doc.exists) {
            return {id: doc.id, ...doc.data()};
        } else {
            console.log('Scheduled does not exists');
            return {id: -1};
        }
    } catch (error) {
        console.log('System is not able to fetch Scheduled by Id', error);
        return {id: -2};
    }
};

export const readAllScheduled = async () => {
    try {
        const snapShot = await firestore().collection('Scheduled').get();
        return snapShot.docs.map((doc: {id: any; data: () => any}) => {
            return {id: doc.id, ...doc.data()};
        });
    } catch (error) {
        console.log('System is not able to fetch all Scheduled', error);
        return {id: -2};
    }
};

export const readScheduledByName = async (name: string) => {
    try {
        const snapShot = await firestore()
            .collection('Scheduled')
            .where('Name','==',name)
            .get();
        return snapShot.docs.map((doc: {id: any; data: () => any}) => {
            return {id: doc.id, ...doc.data()};
        });
    } catch (error) {
        console.error('System is not able to fetch Scheduled by Name', error);
        return -1;
    }
};

export const readScheduledByTimestamp = async (timestamp: Date) => {
    try {
        const snapShot = await firestore()
            .collection('Scheduled')
            .where('Timestamp','==',timestamp)
            .get();
        return snapShot.docs.map((doc: {id: any; data: () => any}) => {
            return {id: doc.id, ...doc.data()};
        });
    } catch (error) {
        console.error('System is not able to fetch Scheduled by Timestamp', error);
        return -1;
    }
};

export const readScheduledByCaseId = async (case_id: string) => {
    try {
        const snapShot = await firestore()
            .collection('Scheduled')
            .where('Case_Id','==',case_id)
            .get();
        return snapShot.docs.map((doc: {id: any; data: () => any}) => {
            return {id: doc.id, ...doc.data()};
        });
    } catch (error) {
        console.error('System is not able to fetch Scheduled by Case_Id', error);
        return -1;
    }
};

