import firestore from '@react-native-firebase/firestore';

export const handleCase = async (title: string, description: string) => {
  console.log('Running handleCase with:', title, description);
  try {
    const docRef = await firestore().collection('Case').add({
      title,
      description,
      createdAt: firestore.FieldValue.serverTimestamp(),
    });
    console.log('✅ Document written with ID: ', docRef.id);
  } catch (error) {
    console.log('❌ Error adding document: ', error);
  }
};
