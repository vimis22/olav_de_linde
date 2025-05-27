import React from 'react';
import {Image, ImageBackground, ScrollView, StyleSheet, TouchableOpacity, View, ActivityIndicator, Text} from 'react-native';
import GlobalStyles, {lockIcon, wallpaperBackground} from '../../../styling/GlobalStyles.tsx';
import NormalText from '../../../components/textual/NormalText.tsx';
import InputFieldArea from '../../../components/textual/InputFieldArea.tsx';
import PopupScreen from '../../../components/menus/PopupScreen.tsx';
import {GetProfileInformation} from '../../../functions/manager_services/ProfileManager.tsx';
import ActionButton from '../../../components/buttons/ActionButton.tsx';
import {usePasswordSettingsManager} from '../../../hooks/PasswordSettingsManager.tsx';

const PasswordScreen = ({navigation, route}: any) => {
  const {profileImage, editMode, success, setSuccess, saveSuccess, setSaveSuccess, resetSuccess, setResetSuccess, passwordError, currentPassword, newPassword, confirmPassword,
    addImage, handleCurrentPasswordChange, handleNewPasswordChange, handleConfirmPasswordChange, editPasswordInformation, handleForgotPassword} = usePasswordSettingsManager(navigation, route?.params);
  const {isLoading} = GetProfileInformation();

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
                  <InputFieldArea whenPassword={true} displayIcon={lockIcon} fieldIcon={lockIcon} value={currentPassword} onChangeText={handleCurrentPasswordChange} placeholder="Nuværende kodeord" editable={true} />
                  <NormalText text={'Nyt kodeord'} fontSize={12} />
                  <InputFieldArea whenPassword={true} displayIcon={lockIcon} fieldIcon={lockIcon} value={newPassword} onChangeText={handleNewPasswordChange} placeholder="Nyt kodeord" editable={true} />
                  <NormalText text={'Gentag nyt kodeord'} fontSize={12} />
                  <InputFieldArea whenPassword={true} displayIcon={lockIcon} fieldIcon={lockIcon} value={confirmPassword} onChangeText={handleConfirmPasswordChange} placeholder="Gentag nyt kodeord" editable={true} />
                  {passwordError ? (
                    <Text style={styles.errorText}>{passwordError}</Text>
                  ) : null}
                </View>
              )}

              <View style={styles.buttonContainer}>
                <ActionButton onPress={editPasswordInformation} title={editMode ? 'Gem' : 'Rediger'} backgroundColor={'#5C6855'} textColor={'#ffffff'} height={50} width={250} />

                {editMode && (
                  <ActionButton onPress={handleForgotPassword} title={'Glemt Adgangskode'} backgroundColor={'transparent'} textColor={'#CB4F00'} borderColor={'#CB4F00'} height={50} width={250} />
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
