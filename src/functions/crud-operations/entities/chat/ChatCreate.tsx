import firestore from '@react-native-firebase/firestore';
import {ChatInfo} from './ChatInfo.ts';

export const createChat = async (allChatInfo: ChatInfo[]): Promise<number> => {
    try {
        if (!allChatInfo || allChatInfo.length === 0) {
            return -2;
        }

        const batch = firestore().batch();

        allChatInfo.forEach(chat => {
            const caseRef = firestore().collection('Chat').doc(chat.id);
            batch.set(caseRef, {
                id: chat.id,
                caseId: chat.caseId,
            });
        });
        await batch.commit();
        return 1;
    } catch (error) {
        console.error('An Error occurred in createCase', error);
        return -1;
    }
};
