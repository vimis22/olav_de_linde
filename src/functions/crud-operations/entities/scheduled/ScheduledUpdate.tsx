import firestore from '@react-native-firebase/firestore';
import {CaseInfo} from '../case/CaseInfo.ts';
import {ScheduledInfo} from "./ScheduledInfo.ts";

export const updateScheduled = async (caseInfo: ScheduledInfo) => {
    try {
        const {id, ...updatedData} = caseInfo;
        const docRef = firestore().collection('Scheduled').doc(id);
        const doc = await docRef.get();

        if (!doc.exists){
            console.log('System cannot recognize customer information');
            await docRef.update(updatedData);
            return updatedData;
        }
    } catch (error) {
        console.error('An Error occurred while updating the scheduled', error);
        return -1;
    }
};

export const updateAllScheduled = async (allScheduled: ScheduledInfo[]): Promise<number> => {
    try {
        if (!allScheduled || allScheduled.length === 0) {
            return -2;
        }

        const batch = firestore().batch();

        allScheduled.forEach(scheduled => {
            const scheduledRef = firestore().collection('Case').doc(scheduled.id);
            batch.update(scheduledRef, {
                name: scheduled.name,
                timestamp: firestore.FieldValue.serverTimestamp(),
                caseId: scheduled.caseId,
            });
        });
        await batch.commit();
        return 1;
    } catch (error) {
        console.error('An Error occurred in updating allCases', error);
        return -1;
    }
};

export const updateNameForScheduledById = async (id: string, name: string) => {
    try {
        const docRef = firestore().collection('Scheduled').doc(id);
        const doc = await docRef.get();

        if (!doc.exists) {
            console.log('Non Customer has been found with Name: ' + id);
            return 1;
        }
        await docRef.update({name: name});
        console.log('System has updated the ' + id + ' with: ' + name);
    } catch (error) {
        console.error('An Error has occurred while updating by ID', error);
        return -1;
    }
};

export const updateTimestampForScheduledById = async (scheduledId: string, timestamp: Date) => {
    try {
        const docRef = firestore().collection('Scheduled').doc(scheduledId);
        const doc = await docRef.get();

        if (!doc.exists) {
            console.log('Non Customer has been found with Name: ' + scheduledId);
            return 1;
        }
        await docRef.update({Timestamp: timestamp});
        console.log('System has updated the ' + scheduledId + ' with: ' + timestamp);
    } catch (error) {
        console.error('An Error has occurred while updating by ID', error);
        return -1;
    }
};

export const updateCaseIdForScheduledById = async (scheduledId: string, case_id: string) => {
    try {
        const docRef = firestore().collection('Scheduled').doc(scheduledId);
        const doc = await docRef.get();

        if (!doc.exists) {
            console.log('Non Customer has been found with Name: ' + scheduledId);
            return 1;
        }
        await docRef.update({case_id: case_id});
        console.log('System has updated the ' + scheduledId + ' with: ' + case_id);
    } catch (error) {
        console.error('An Error has occurred while updating by ID', error);
        return -1;
    }
};
