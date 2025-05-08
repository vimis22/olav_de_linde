import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {launchImageLibrary} from 'react-native-image-picker';

export const createCase = async (title: string, description: string, _imageUr: string) => {
  console.log('The System is currently processing the following information ' +
    ':', title, description);
  try {
    const imageLibrary = await launchImageLibrary({mediaType: 'photo', quality: 0.9});
    if (imageLibrary.didCancel || imageLibrary.errorCode || !imageLibrary.assets?.length) {return;}
    const imageUri = imageLibrary.assets[0]?.uri;
    let imageUrl = '';
    if (imageUri) {
      const filename = imageUri.substring(imageUri.lastIndexOf('/') + 1);
      await storage().ref(`Case/${filename}`).putFile(imageUri);
      imageUrl = await storage().ref(`Case/${filename}`).getDownloadURL();
      // imageUrl = await storage().ref(filename).getDownloadURL();
    }
    const docRef = await firestore().collection('Case').add({
      title,
      description,
      imageUrl,
      createdAt: firestore.FieldValue.serverTimestamp(),
    });
    return docRef.id;
  } catch (error) {
    console.log('An Error occured while adding the following ID: ', error);
  }
};
