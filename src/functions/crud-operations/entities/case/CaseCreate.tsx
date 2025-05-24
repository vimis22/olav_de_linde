import firestore from '@react-native-firebase/firestore';
import {CaseInfo} from './CaseInfo.ts';

export const createCaseFromInfo = async (defect: CaseInfo): Promise<string | number> => {
    try {
        const docRef = await firestore().collection('Case').add({
            title: defect.title,
            description: defect.description,
            createdAt: firestore.FieldValue.serverTimestamp(),
            updateDate: firestore.FieldValue.serverTimestamp(),
            deadline: defect.deadline || firestore.FieldValue.serverTimestamp(),
        });
        console.log('Case created with ID: ', docRef.id);
        return docRef.id;
    } catch (error) {
        console.error('An Error occurred in createCase', error);
        return -1;
    }
};

export const createCase = async (title: string, description: string, technicians: string) => {
  console.log('The System is currently processing the following information ' +
    ':', title, description);
  try {
    const docRef = await firestore().collection('Case').add({
      title,
      description,
      technicians,
      createdAt: firestore.FieldValue.serverTimestamp(),
    });
    return docRef.id;
  } catch (error) {
    console.log('An Error occurred while adding the following ID: ', error);
    return -1;
  }
};
