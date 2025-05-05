import firestore from '@react-native-firebase/firestore';

export const createCase = async (title: string, description: string) => {
  console.log('The System is currently processing the following information ' +
    ':', title, description);
  try {
    const docRef = await firestore().collection('Case').add({
      title,
      description,
      createdAt: firestore.FieldValue.serverTimestamp(),
    });
    console.log('The Document has the following ID: ', docRef.id);
  } catch (error) {
    console.log('An Error occured while adding the following ID: ', error);
  }
};
