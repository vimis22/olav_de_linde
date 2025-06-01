import {useState, useEffect} from 'react';
import ImageManager from './ImageManager.tsx';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {updateCustomer} from '../crud-operations/entities/customer/CustomerUpdate.tsx';
import {deleteCustomerAccount} from '../crud-operations/entities/customer/CustomerDelete.tsx';

export const useProfileSettingsManager = (_navigation: any, _initialParams: any) => {
  const [deleteProfile, setDeleteProfile] = useState(false);
  const [_visible, _setVisible] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [, setDeleteSuccess] = useState(false);

  /**
   * The purpose with this method is to handle the image selection.
   * @param imageUri - The image uri.
   */
  const imageSelection = (imageUri: string) => {
    setProfileImage(imageUri);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  };

  /**
   * The purpose with this method is to save the imageSelection inside the addImage constant.
   * @param imageUri - The image uri.
   */
  const {addImage} = ImageManager({
    onImageSelected: imageSelection,
  });

  /**
   * The purpose with this method is to save the profile changes.
   * @param name - The name of the user.
   * @param phone - The phone number of the user.
   * @param email - The email of the user.
   * @param companyName - The company name of the user.
   * @param address - The address of the user.
   * @param houseNumber - The house number of the user.
   */
  const saveProfileChanges = async (name: string, phone: string, email: string, companyName: string, address: string, houseNumber: string) => {
    try {
      const currentUser = auth().currentUser;
      if (!currentUser) {
        console.log('No user is currently logged in');
        return;
      }

      const updatedUserInfo = {
        id: currentUser.uid,
        name: name,
        phone: phone,
        email: email,
        companyName: companyName,
        address: address,
        housenumber: houseNumber,
      };

      await updateCustomer(updatedUserInfo);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 2000);
      setEditMode(false);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  /**
   * The purpose with this method is to edit the profile information.
   * @param name - The name of the user.
   * @param phone - The phone number of the user.
   * @param email - The email of the user.
   * @param companyName - The company name of the user.
   * @param address - The address of the user.
   * @param houseNumber - The house number of the user.
   */
  const editProfileInformation = (name: string, phone: string, email: string, companyName: string, address: string, houseNumber: string) => {
    if (editMode) {
      saveProfileChanges(name, phone, email, companyName, address, houseNumber);
    } else {
      setEditMode(true);
    }
  };

  /**
   * The purpose with this method is to delete the profile.
   * @returns - Returns an error if deletion fails for the account.
   */
  const handleDeleteAccount = async () => {
    try {
      await deleteCustomerAccount();
      setDeleteSuccess(true);
      setTimeout(() => {
        setDeleteSuccess(false);
        _navigation.navigate('LoginScreen');
      }, 2000);
    } catch (error) {
      console.error('Error deleting profile:', error);
    }
  };

  return {
    deleteProfile, setDeleteProfile, _visible, _setVisible, profileImage, setProfileImage, success,
    setSuccess, editMode, setEditMode, saveSuccess, setSaveSuccess, editProfileInformation, addImage,
    handleDeleteAccount,
  };
};

/**
 * This method is used to get the user information from the database.
 * @constructor - This method is used to get the user information from the database.
 * @returns - Returns the user information.
 */
export const GetProfileInformation = () => {
  const [userInfoData, setUserInfoData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUserInfo = async () => {
      const currentUser = auth().currentUser;
      if (!currentUser) {
        setIsLoading(false);
        return;
      }
      try {
        const userInfoDoc = await firestore()
          .collection('Customer')
          .doc(currentUser.uid)
          .get();
        if (userInfoDoc.exists) {
          setUserInfoData(userInfoDoc.data());
        }
      } catch (error) {
        console.log(
          'An Error occurred while fetching the user information',
          error,
        );
        throw error;
      } finally {
        setIsLoading(false);
      }
    };
    getUserInfo();
  }, []);
  return {userInfoData, isLoading};
};
