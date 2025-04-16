import firestore from '@react-native-firebase/firestore';
import {ScheduledInfo} from './ScheduledInfo.ts';

export const createScheduled = async (allScheduledInfo: ScheduledInfo[]): Promise<number> => {
    try {
        if (!allScheduledInfo || allScheduledInfo.length === 0) {
            return -2;
        }

        const batch = firestore().batch();

        allScheduledInfo.forEach(scheduled => {
            const scheduledRef = firestore().collection('Case').doc(scheduled.id);
            batch.set(scheduledRef, {
                id: scheduled.id,
                name: scheduled.name,
                timestamp: scheduled.timestamp,
                case_id: scheduled.case_Id,
            });
        });
        await batch.commit();
        return 1;
    } catch (error) {
        console.error('An Error occurred in createScheduled', error);
        return -1;
    }
};

