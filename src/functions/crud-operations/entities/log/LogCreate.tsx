import firestore from '@react-native-firebase/firestore';
import {LogInfo} from './LogInfo.ts';

export const createLog = async (allLogInfo: LogInfo[]) => {
    try {
        if (!allLogInfo || allLogInfo.length === 0) {
            return -2;
        }

        const batch = firestore().batch();

        allLogInfo.forEach(log => {
            const logRef = firestore().collection('Log').doc(log.id);
            batch.set(logRef, {
                id: log.id,
                address: '',
                housenumber: '',
                timestamp: firestore.FieldValue.serverTimestamp(),
                message: '',
            });
        });
        await batch.commit();
        return 1;
    } catch (error) {
        console.error('An Error occurred in createLog', error);
        return -1;
    }
};


