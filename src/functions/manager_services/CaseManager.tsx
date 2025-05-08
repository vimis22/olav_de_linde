import firestore from '@react-native-firebase/firestore';

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
  }
};
