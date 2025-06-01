import {useState} from 'react';
import ImageManager from './ImageManager.tsx';
import auth, {EmailAuthProvider} from '@react-native-firebase/auth';
import {resetCustomerPassword, updateCustomerPassword} from '../crud-operations/entities/customer/CustomerUpdate.tsx';

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
   */
  const {addImage} = ImageManager({
    onImageSelected: imageSelection,
  });

  /**
   * The purpose with the handleCurrentPasswordChange method is to handle the current password change.
   * @param text - The text of the current password.
   */
  const handleCurrentPasswordChange = (text: string) => {
    setCurrentPassword(text);
    if (passwordError) {
      setPasswordError('');
    }
  };

  /**
   * The purpose with the handleNewPasswordChange method is to handle the new password change.
   * @param text - The text of the new password.
   */
  const handleNewPasswordChange = (text: string) => {
    setNewPassword(text);
    if (passwordError) {
      setPasswordError('');
    }
  };

  /**
   * The purpose with the handleConfirmPasswordChange method is to handle the confirm password change.
   * @param text - The text of the confirm password.
   */
  const handleConfirmPasswordChange = (text: string) => {
    setConfirmPassword(text);
    if (passwordError) {
      setPasswordError('');
    }
  };

  /**
   * The purpose with this method is to save the password changes.
   * @returns - Returns an error if the login fails.
   */
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

  /**
   * The purpose with this method is to handle the forgot password process.
   * @returns - Returns an error if the login fails.
   */
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

  /**
   * The purpose with this method is to edit the password information.
   * @param text - The text of the current password.
   */
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

  return {profileImage, setProfileImage, success, setSuccess, editMode, setEditMode, saveSuccess, setSaveSuccess, resetSuccess, setResetSuccess, passwordError, setPasswordError,
    currentPassword, newPassword, confirmPassword, addImage, handleCurrentPasswordChange, handleNewPasswordChange, handleConfirmPasswordChange, editPasswordInformation, savePasswordChanges, handleForgotPassword,
  };
};
