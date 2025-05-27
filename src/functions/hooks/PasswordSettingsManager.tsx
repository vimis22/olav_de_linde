import {useState} from 'react';
import ImageManager from '../manager_services/ImageManager.tsx';
import auth, {EmailAuthProvider} from '@react-native-firebase/auth';
import {resetCustomerPassword, updateCustomerPassword,} from '../crud-operations/entities/customer/CustomerUpdate.tsx';

export const usePasswordSettingsManager = (_navigation: any, _initialParams: any) => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [resetSuccess, setResetSuccess] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  const imageSelection = (imageUri: string) => {
    setProfileImage(imageUri);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  };

  const {addImage} = ImageManager({
    onImageSelected: imageSelection,
  });

  const handleCurrentPasswordChange = (text: string) => {
    setCurrentPassword(text);
    if (passwordError) {
      setPasswordError('');
    }
  };

  const handleNewPasswordChange = (text: string) => {
    setNewPassword(text);
    if (passwordError) {
      setPasswordError('');
    }
  };

  const handleConfirmPasswordChange = (text: string) => {
    setConfirmPassword(text);
    if (passwordError) {
      setPasswordError('');
    }
  };

  const savePasswordChanges = async () => {
    try {
      setPasswordError('');

      if (!currentPassword) {
        setPasswordError('Indtast venligst dit nuværende kodeord.');
        return;
      }

      if (!newPassword) {
        setPasswordError('Indtast venligst et nyt kodeord.');
        return;
      }

      if (newPassword !== confirmPassword) {
        console.error('Passwords do not match');
        setPasswordError('Adgangskoderne matcher ikke. Prøv igen.');
        return;
      }

      const user = auth().currentUser;
      if (!user || !user.email) {
        setPasswordError('Bruger ikke fundet. Log ind igen.');
        return;
      }

      try {
        const credential = EmailAuthProvider.credential(user.email, currentPassword);
        await user.reauthenticateWithCredential(credential);
      } catch (error) {
        console.error('Re-authentication failed:', error);
        setPasswordError('Nuværende kodeord er forkert. Prøv igen.');
        return;
      }

      await updateCustomerPassword(newPassword);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 2000);
      setEditMode(false);

      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (error) {
      console.error('Error updating password:', error);
      setPasswordError('Der opstod en fejl ved opdatering af adgangskoden.');
    }
  };

  const handleForgotPassword = async () => {
    try {
      const currentUser = auth().currentUser;
      if (!currentUser || !currentUser.email) {
        console.error('No user is currently logged in or email is not available');
        return;
      }

      await resetCustomerPassword(currentUser.email);
      setResetSuccess(true);
      setTimeout(() => setResetSuccess(false), 2000);
    } catch (error) {
      console.error('Error sending password reset email:', error);
    }
  };

  const editPasswordInformation = () => {
    if (editMode) {
      savePasswordChanges();
    } else {
      setEditMode(true);
      setPasswordError('');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    }
  };

  return {
    profileImage, setProfileImage, success,
    setSuccess, editMode, setEditMode, saveSuccess, setSaveSuccess, resetSuccess, setResetSuccess, passwordError, setPasswordError,
    currentPassword, newPassword, confirmPassword, addImage,
    handleCurrentPasswordChange, handleNewPasswordChange, handleConfirmPasswordChange, editPasswordInformation, savePasswordChanges, handleForgotPassword,
  };
};
