import firestore from '@react-native-firebase/firestore';
import {CaseInfo} from '../case/CaseInfo.ts';

export const updateScheduled = async (caseInfo: CaseInfo) => {
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

export const updateNameForScheduled = async (scheduledId: string, name: string) => {
    try {
        const docRef = firestore().collection('Scheduled').doc(scheduledId);
        const doc = await docRef.get();

        if (!doc.exists) {
            console.log('Non Customer has been found with Name: ' + scheduledId);
            return 1;
        }
        await docRef.update({name: name});
        console.log('System has updated the ' + scheduledId + ' with: ' + name);
    } catch (error) {
        console.error('An Error has occurred while updating by ID', error);
        return -1;
    }
};

export const updateTimestampForScheduled = async (scheduledId: string, timestamp: Date) => {
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

export const updateCaseIdForScheduled = async (scheduledId: string, case_id: string) => {
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

export const updateNameForScheduledByName = async (oldName: string, newName: string) => {
    try {
        const snapShot = await firestore()
            .collection('Scheduled')
            .where('Name','==', oldName)
            .get();

        if (snapShot.empty) {
            console.log('No Customer has been found with the name: ' + newName);
            return -2;
        }

        const docRef = snapShot.docs[0].ref;
        await docRef.update({Name: newName});
        console.log('System has updated email from: :' + oldName + ' to' + newName);
    } catch (error) {
        console.log('An Error occurred while updating the email by an old name ', error);
        return -1;
    }
};

export const updateTimestampForScheduledByName = async (timestamp: Date, name: string) => {
    try {
        //Husk, at de områder hvor der står byEmail skal kopiere følgende sætning.
        const snapShot = await firestore()
            .collection('Scheduled')
            .where('Name','==',name)
            .get();

        if (snapShot.empty) {
            console.log('No Customer has been found with the name: ' + name);
            return -2;
        }
        const docRef = snapShot.docs[0].ref;
        //Husk, at denne sætning fortæller hvad vi ønsker at opdatere og ændre.
        await docRef.update({Timestamp: timestamp});

        return console.log('Sucesss has been made in updating their Timestamp by Name');
    } catch (error) {
        console.error('An Error has occured while updating the Timestamp', error);
        return -1;
    }
};

export const updateCaseIdForScheduledByName = async (caseId: string, name: string) => {
    try {
        //Husk, at de områder hvor der står byEmail skal kopiere følgende sætning.
        const snapShot = await firestore()
            .collection('Scheduled')
            .where('Name','==',name)
            .get();

        if (snapShot.empty) {
            console.log('No Customer has been found with the name: ' + name);
            return -2;
        }
        const docRef = snapShot.docs[0].ref;
        //Husk, at denne sætning fortæller hvad vi ønsker at opdatere og ændre.
        await docRef.update({CaseId: caseId});

        return console.log('Sucesss has been made in updating their CaseId by Name');
    } catch (error) {
        console.error('An Error has occured while updating the CaseId', error);
        return -1;
    }
};
