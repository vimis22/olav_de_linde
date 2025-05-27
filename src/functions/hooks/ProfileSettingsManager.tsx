import {useState} from 'react';
import ImageManager from '../manager_services/ImageManager.tsx';
import auth from '@react-native-firebase/auth';
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

  const imageSelection = (imageUri: string) => {
    setProfileImage(imageUri);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  };

  const {addImage} = ImageManager({
    onImageSelected: imageSelection,
  });

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

  const editProfileInformation = (
    name: string,
    phone: string,
    email: string,
    companyName: string,
    address: string,
    houseNumber: string
  ) => {
    if (editMode) {
      saveProfileChanges(name, phone, email, companyName, address, houseNumber);
    } else {
      setEditMode(true);
    }
  };

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
