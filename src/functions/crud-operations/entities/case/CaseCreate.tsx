import firestore from '@react-native-firebase/firestore';
import {CaseInfo} from './CaseInfo.ts';
import {EnumMessages} from '../../EnumMessages.ts';

/**
 * Creates a new case in the Firestore database based on the provided case information.
 * @param defect - The case information containing title, description, and optional deadline.
 * @returns Promises a result based on Enums, which is either SUCCESS or FAILED during execution.
 */
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

/**
 * Creates a new case during case-filing process and creates in the firestore database.
 * @param title - The title of the case.
 * @param description - The description of the case.
 * @param technicians - The technicians assigned to the case.
 * @returns Promises a result based on Enums, which is either SUCCESS or FAILED during execution.
 */
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
