import firestore from '@react-native-firebase/firestore';
import {ChatInfo} from './ChatInfo.ts';

export const updateChat = async (chatInfo: ChatInfo) => {
    try {
        const {id, ...updatedData} = chatInfo;
        const docRef = firestore().collection('Chat').doc(id);
        const doc = await docRef.get();

        if (!doc.exists) {
            console.log('System cannot recognize chat information');
            await docRef.update(updatedData);
            return updatedData;
        }
    } catch (error) {
        console.log('An Error occurred while updating the chat', error);
        return -1;
    }
};

export const updateChatByCaseId = async (chatInfo: ChatInfo) => {
    try {
        const docRef = firestore().collection('Chat').doc(chatInfo.id);
        const doc = await docRef.get();

        if (!doc.exists) {
            return 1;
        }

        await docRef.update({
            caseId: chatInfo.caseId,
        });

        return chatInfo.id;
    } catch (error) {
        console.log('An Error occurred while updating the chat', error);
        return -1;
    }
};

export const updateIdForChatById = async (oldId: string, newId: string) => {
    try {
        const snapshot = await firestore()
            .collection('CaseAssignment')
            .where('Id','==', oldId)
            .get();

        if (snapshot.empty) {
            console.log('No CaseAssignment has been found with the id: ' + newId);
            return -2;
        }

        const docRef = snapshot.docs[0].ref;
        await docRef.update({Id: newId});
        console.log('System has updated name from: :' + oldId + ' to' + newId);
        return 1;
    } catch (error) {
        console.log('An Error occurred while updating the id by an old id ', error);
        return -1;
    }
};

export const updateCaseIdForChatById = async (caseId: string, id: string) => {
    try {
        const snapshot = await firestore()
            .collection('Chat')
            .where('Id','==',id)
            .get();

        if (snapshot.empty) {
            console.log('No Chat has been found with the name: ' + id);
            return -2;
        }

        const docRef = snapshot.docs[0].ref;
        await docRef.update({Chat_ID: caseId});
        console.log('System has updated caseId');
        return 1;
    } catch (error) {
        console.log('An Error occurred while updating the CaseId by an id ', error);
        return -1;
    }
};


