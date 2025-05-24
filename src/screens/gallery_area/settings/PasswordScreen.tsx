import React, {useState} from 'react';
import {Image, ImageBackground, ScrollView, StyleSheet, TouchableOpacity, View, ActivityIndicator, Text} from 'react-native';
import GlobalStyles, {lockIcon, wallpaperBackground} from '../../../styling/GlobalStyles.tsx';
import NormalText from '../../../components/textual/NormalText.tsx';
import InputFieldArea from '../../../components/textual/InputFieldArea.tsx';
import PopupScreen from '../../../components/menus/PopupScreen.tsx';
import ImageManager from '../../../functions/manager_services/ImageManager.tsx';
import {GetProfileInformation} from '../../../functions/manager_services/ProfileManager.tsx';
import ActionButton from '../../../components/buttons/ActionButton.tsx';
import {updateLoginWithCredentials, resetPasswordWithEmail} from '../../../functions/manager_services/AuthenticationManager.tsx';
import auth from '@react-native-firebase/auth';
import { EmailAuthProvider } from '@react-native-firebase/auth';

const PasswordScreen = ({_navigation}: any) => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [resetSuccess, setResetSuccess] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const {isLoading} = GetProfileInformation();

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

      await updateLoginWithCredentials(newPassword);
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

      await resetPasswordWithEmail(currentUser.email);
      setResetSuccess(true);
      setTimeout(() => setResetSuccess(false), 2000);
    } catch (error) {
      console.error('Error sending password reset email:', error);
    }
  };

  const toggleEditMode = () => {
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

  return (
    <ImageBackground source={wallpaperBackground} style={GlobalStyles.backgroundImage} resizeMode={'cover'}>
      <ScrollView contentContainerStyle={{ alignItems: 'center', justifyContent: 'center', marginTop: 50 }}>
        <View>
          <TouchableOpacity onPress={() => addImage()}>
            <View style={styles.profileImageCircle}>
              {profileImage ? (
                <Image source={{uri: profileImage}} style={styles.profileImage} />
              ) : null}
            </View>
          </TouchableOpacity>

          <PopupScreen visible={success} title={'TILFØJET!!'} onRequestClose={() => setSuccess(false)} />
          <PopupScreen visible={saveSuccess} title={'ADGANGSKODE OPDATERET!'} onRequestClose={() => setSaveSuccess(false)} />
          <PopupScreen visible={resetSuccess} title={'NULSTILLINGSLINK SENDT!'} onRequestClose={() => setResetSuccess(false)} />
        </View>

        <View style={styles.bottomSection}>
          <NormalText text={'Skift dit kodeord til din Olav De Linde konto'} fontSize={20} />
          {!editMode && (
            <NormalText text={'Tryk på "Rediger" for at ændre din adgangskode'} fontSize={14}/>
          )}

          {isLoading ? (
            <ActivityIndicator size="large" color="#5C6855" />
          ) : (
            <>
              {editMode && (
                <View style={styles.passwordInputs}>
                  <NormalText text={'Nuværende kodeord'} fontSize={12} />
                  <InputFieldArea
                    whenPassword={true}
                    displayIcon={lockIcon}
                    fieldIcon={lockIcon}
                    value={currentPassword}
                    onChangeText={handleCurrentPasswordChange}
                    placeholder="Nuværende kodeord"
                    editable={true}
                  />
                  <NormalText text={'Nyt kodeord'} fontSize={12} />
                  <InputFieldArea
                    whenPassword={true}
                    displayIcon={lockIcon}
                    fieldIcon={lockIcon}
                    value={newPassword}
                    onChangeText={handleNewPasswordChange}
                    placeholder="Nyt kodeord"
                    editable={true}
                  />
                  <NormalText text={'Gentag nyt kodeord'} fontSize={12} />
                  <InputFieldArea
                    whenPassword={true}
                    displayIcon={lockIcon}
                    fieldIcon={lockIcon}
                    value={confirmPassword}
                    onChangeText={handleConfirmPasswordChange}
                    placeholder="Gentag nyt kodeord"
                    editable={true}
                  />
                  {passwordError ? (
                    <Text style={styles.errorText}>{passwordError}</Text>
                  ) : null}
                </View>
              )}

              <View style={styles.buttonContainer}>
                <ActionButton
                  onPress={toggleEditMode}
                  title={editMode ? 'Gem' : 'Rediger'}
                  backgroundColor={'#5C6855'}
                  textColor={'#ffffff'}
                  height={50}
                  width={250}
                />

                {editMode && (
                  <ActionButton
                    onPress={handleForgotPassword}
                    title={'Glemt Adgangskode'}
                    backgroundColor={'transparent'}
                    textColor={'#CB4F00'}
                    borderColor={'#CB4F00'}
                    height={50}
                    width={250}
                  />
                )}
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  topSection: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomSection: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  profileImageCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#bbb',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 60,
    resizeMode: 'cover',
  },
  passwordInputs: {
    width: '100%',
    marginVertical: 20,
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  errorText: {
    color: '#CB4F00',
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
});


export default PasswordScreen;
