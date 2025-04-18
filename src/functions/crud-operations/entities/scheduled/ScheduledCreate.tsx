import firestore from '@react-native-firebase/firestore';
import {ScheduledInfo} from './ScheduledInfo.ts';

export const createScheduled = async (scheduled: ScheduledInfo): Promise<number> => {
    try {
        const batch = firestore().batch();

        const scheduledRef = firestore().collection('Scheduled').doc(scheduled.id);
        batch.set(scheduledRef, {
            id: scheduled.id,
            name: scheduled.name,
            timestamp: scheduled.timestamp,
            case_id: scheduled.case_Id,
        });
        await batch.commit();
        return 1;
    } catch (error) {
        console.error('An Error occurred in createScheduled', error);
        return -1;
    }
};

