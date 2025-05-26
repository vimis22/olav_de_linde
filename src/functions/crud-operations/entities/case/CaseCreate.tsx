import firestore from '@react-native-firebase/firestore';
import {CaseInfo} from './CaseInfo.ts';
import {EnumMessages} from '../../EnumMessages.ts';

export const createCaseFromInfo = async (defect: CaseInfo): Promise<string> => {
    try {
        const docRef = await firestore().collection('Case').add({
            title: defect.title,
            description: defect.description,
            createdAt: firestore.FieldValue.serverTimestamp(),
            updateDate: firestore.FieldValue.serverTimestamp(),
            deadline: defect.deadline || firestore.FieldValue.serverTimestamp(),
        });
        console.log('Case created with ID: ', docRef.id);
        return EnumMessages(1);
    } catch (error) {
        console.error('An Error occurred in createCase', error);
        return EnumMessages(-1);
    }
};

export const createCase = async (title: string, description: string, technicians: string): Promise<string> => {
  console.log('The System is currently processing the following information ' +
    ':', title, description);
  try {
    const docRef = await firestore().collection('Case').add({
      title,
      description,
      technicians,
      createdAt: firestore.FieldValue.serverTimestamp(),
    });
    console.log('Case created with ID: ', docRef.id);
    return EnumMessages(1);
  } catch (error) {
    console.log('An Error occurred while adding the following ID: ', error);
    return EnumMessages(-1);
  }
};
