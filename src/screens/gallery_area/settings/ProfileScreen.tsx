import React, {useState, useEffect} from 'react';
import {ImageBackground, StyleSheet, View, ScrollView, Image, TouchableOpacity, ActivityIndicator, Text} from 'react-native';
import GlobalStyles, {
  atIcon,
  callIcon,
  houseIcon, locationIcon,
  userIcon,
  wallpaperBackground,
} from '../../../styling/GlobalStyles.tsx';
import InputFieldArea from '../../../components/textual/InputFieldArea.tsx';
import ActionButton from '../../../components/buttons/ActionButton.tsx';
import {deleteUser} from '../../../functions/manager_services/AuthenticationManager.tsx';
import ImageManager from '../../../functions/manager_services/ImageManager.tsx';
import PopupScreen from '../../../components/menus/PopupScreen.tsx';
import {GetProfileInformation} from '../../../functions/manager_services/ProfileManager.tsx';
import {updateCustomer} from '../../../functions/crud-operations/entities/customer/CustomerUpdate.tsx';
import {deleteCustomerById} from '../../../functions/crud-operations/entities/customer/CustomerDelete.tsx';
import auth from '@react-native-firebase/auth';
const ProfileScreen = ({navigation}: any) => {
  const [deleteProfile, setDeleteProfile] = useState(false);
  const [_visible, _setVisible] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [address, setAddress] = useState('');
  const [houseNumber, setHouseNumber] = useState('');

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

  const imageSelection = (imageUri: string) => {
    setProfileImage(imageUri);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  };

  const {addImage} = ImageManager({
    onImageSelected: imageSelection,
  });

  const saveProfileChanges = async () => {
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

  const toggleEditMode = () => {
    if (editMode) {
      // If currently in edit mode, save changes
      saveProfileChanges();
    } else {
      // Enter edit mode
      setEditMode(true);
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
          <PopupScreen visible={deleteSuccess} title={'PROFIL SLETTET!'} onRequestClose={() => setDeleteSuccess(false)} />
        </View>

        <View style={styles.bottomSection}>
          {isLoading ? (
            <ActivityIndicator size="large" color="#5C6855" />
          ) : userInfoData ? (
            <>
              <InputFieldArea
                whenPassword={false}
                displayIcon={userIcon}
                fieldIcon={userIcon}
                value={name}
                onChangeText={setName}
                placeholder="Navn"
                editable={editMode}
              />
              <InputFieldArea
                whenPassword={false}
                fieldIcon={callIcon}
                value={phone}
                onChangeText={setPhone}
                placeholder="Telefonnummer"
                editable={editMode}
              />
              <InputFieldArea
                whenPassword={false}
                fieldIcon={atIcon}
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
                editable={editMode}
              />
              <InputFieldArea
                whenPassword={false}
                fieldIcon={houseIcon}
                value={companyName}
                onChangeText={setCompanyName}
                placeholder="Virksomhedsnavn"
                editable={editMode}
              />
              <InputFieldArea
                whenPassword={false}
                fieldIcon={locationIcon}
                value={address}
                onChangeText={setAddress}
                placeholder="Adresse"
                editable={editMode}
              />
              <InputFieldArea
                whenPassword={false}
                fieldIcon={locationIcon}
                value={houseNumber}
                onChangeText={setHouseNumber}
                placeholder="Husnummer"
                editable={editMode}
              />
              <PopupScreen visible={saveSuccess} title={'GEMT!'} onRequestClose={() => setSaveSuccess(false)} />
            </>
          ) : (
            <Text style={styles.errorText}>Kunne ikke indlæse brugerdata</Text>
          )}
          <View>
            <ActionButton onPress={toggleEditMode} title={editMode ? 'Gem' : 'Rediger'} backgroundColor={'#5C6855'} textColor={'#ffffff'} height={50} width={250} />
            {!editMode && (
              <View>
                <ActionButton onPress={() => setDeleteProfile(!deleteProfile)} title={deleteProfile ? 'Fortryd' : 'Slet Profil'} backgroundColor={'transparent'} textColor={'#CB4F00'} borderColor={'#CB4F00'} height={50} width={250} />
                {deleteProfile && (
                  <ActionButton
                    onPress={async () => {
                      try {
                        const currentUser = auth().currentUser;
                        if (currentUser) {
                          // First delete customer data from Firestore
                          await deleteCustomerById({ id: currentUser.uid });
                          // Then delete the authentication account
                          await deleteUser();
                          // Show success message
                          setDeleteSuccess(true);
                          // Navigate after a short delay
                          setTimeout(() => {
                            setDeleteSuccess(false);
                            navigation.navigate('CaseImage');
                          }, 2000);
                        }
                      } catch (error) {
                        console.error('Error deleting profile:', error);
                      }
                    }}
                    title={'Bekræft Sletning'}
                    backgroundColor={'#CB4F00'}
                    textColor={'#ffffff'}
                    height={50}
                    width={250}
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
  errorText: {
    color: '#CB4F00',
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
});


export default ProfileScreen;
