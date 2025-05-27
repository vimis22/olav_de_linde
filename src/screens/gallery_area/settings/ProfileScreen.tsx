import React, {useState, useEffect} from 'react';
import {ImageBackground, StyleSheet, View, ScrollView, Image, TouchableOpacity, ActivityIndicator, Text} from 'react-native';
import GlobalStyles, {atIcon, callIcon, houseIcon, locationIcon, userIcon, wallpaperBackground,} from '../../../styling/GlobalStyles.tsx';
import InputFieldArea from '../../../components/textual/InputFieldArea.tsx';
import ActionButton from '../../../components/buttons/ActionButton.tsx';
import PopupScreen from '../../../components/menus/PopupScreen.tsx';
import {GetProfileInformation} from '../../../functions/manager_services/ProfileManager.tsx';
import {useProfileSettingsManager} from '../../../functions/hooks/ProfileSettingsManager.tsx';
const ProfileScreen = ({navigation, route}: any) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [address, setAddress] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const {deleteProfile, setDeleteProfile, profileImage, success, setSuccess, editMode, saveSuccess, setSaveSuccess, editProfileInformation, addImage, handleDeleteAccount} = useProfileSettingsManager(navigation, route.params);

  const {userInfoData, isLoading} = GetProfileInformation();

  useEffect(() => {
    if (userInfoData) {
      setName(userInfoData.name || '');
      setPhone(userInfoData.phone || '');
      setEmail(userInfoData.email || '');
      setCompanyName(userInfoData.companyName || '');
      setAddress(userInfoData.address || '');
      setHouseNumber(userInfoData.housenumber || '');
    }
  }, [userInfoData]);

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
          <PopupScreen visible={deleteSuccess} title={'PROFIL SLETTET!'} onRequestClose={() => setDeleteSuccess(false)} />
        </View>

        <View style={styles.bottomSection}>
          {isLoading ? (
            <ActivityIndicator size="large" color="#5C6855" />
          ) : userInfoData ? (
            <View style={styles.profileInputs}>
                <InputFieldArea whenPassword={false} displayIcon={userIcon} fieldIcon={userIcon}
                  value={name} onChangeText={setName} placeholder="Navn" editable={editMode} />
                <InputFieldArea whenPassword={false} fieldIcon={callIcon} value={phone}
                  onChangeText={setPhone} placeholder="Telefonnummer" editable={editMode} />
                <InputFieldArea whenPassword={false} fieldIcon={atIcon} value={email}
                  onChangeText={setEmail} placeholder="Email" editable={editMode} />
                <InputFieldArea whenPassword={false} fieldIcon={houseIcon} value={companyName}
                  onChangeText={setCompanyName} placeholder="Virksomhedsnavn" editable={editMode} />
                <InputFieldArea whenPassword={false} fieldIcon={locationIcon} value={address}
                  onChangeText={setAddress} placeholder="Adresse" editable={editMode} />
                <InputFieldArea whenPassword={false} fieldIcon={locationIcon} value={houseNumber}
                  onChangeText={setHouseNumber} placeholder="Husnummer" editable={editMode} />
              <PopupScreen visible={saveSuccess} title={'GEMT!'} onRequestClose={() => setSaveSuccess(false)} />
            </View>
          ) : (
            <Text style={styles.errorText}>Kunne ikke indlæse brugerdata</Text>
          )}
          <View>
            <ActionButton onPress={() => editProfileInformation(name, phone, email, companyName, address, houseNumber)} title={editMode ? 'Gem' : 'Rediger'} backgroundColor={'#5C6855'} textColor={'#ffffff'} height={50} width={250} />
            {!editMode && (
              <View>
                <ActionButton onPress={() => setDeleteProfile(!deleteProfile)} title={deleteProfile ? 'Fortryd' : 'Slet Profil'} backgroundColor={'transparent'} textColor={'#CB4F00'} borderColor={'#CB4F00'} height={50} width={250} />
                {deleteProfile && (
                  <ActionButton onPress={() => handleDeleteAccount} title={'Bekræft Sletning'} backgroundColor={'#CB4F00'} textColor={'#ffffff'} height={50} width={250}
                  />
                )}
              </View>
            )}
          </View>
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
  profileInputs: {
    width: '100%',
    marginVertical: 20,
    alignItems: 'center',
  },
  errorText: {
    color: '#CB4F00',
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
});


export default ProfileScreen;
