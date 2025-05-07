import React, {useState} from 'react';
import {ImageBackground, StyleSheet, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import GlobalStyles, {
  atIcon,
  callIcon,
  houseIcon, locationIcon,
  userIcon,
  wallpaperBackground,
} from '../../../styling/GlobalStyles.tsx';
import InputFieldArea from '../../../components/InputFieldArea.tsx';
import ActionButton from '../../../components/ActionButton.tsx';
import {deleteUser} from '../../../functions/manager_services/AuthenticationManager.tsx';
import ImageManager from '../../../functions/manager_services/ImageManager.tsx';
import PopupScreen from '../../../components/PopupScreen.tsx';
const ProfileScreen = ({navigation}: any) => {
  const [deleteProfile, setDeleteProfile] = useState(false);
  const [visible, _setVisible] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const imageSelection = (imageUri: string) => {
    setProfileImage(imageUri);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  };

  const {addImage} = ImageManager({
    onImageSelected: imageSelection,
  });

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
        </View>

        <View style={styles.bottomSection}>
            <InputFieldArea whenPassword={false} displayIcon={userIcon} fieldIcon={userIcon} value={'Henrik'} />
            <InputFieldArea whenPassword={false} fieldIcon={callIcon} value={'81911310'} />
            <InputFieldArea whenPassword={false} fieldIcon={atIcon} value={'hsg@pentia.dk'} />
            <InputFieldArea whenPassword={false} fieldIcon={houseIcon} value={'Pentia'} />
            <InputFieldArea whenPassword={false} fieldIcon={locationIcon} value={'Edisonsvej 2, 5000 Odense C Danmarj'} />
          <View>
            <ActionButton onPress={() => setDeleteProfile(!deleteProfile)} title={deleteProfile ? 'Gem' : 'Rediger'} backgroundColor={'#5C6855'} textColor={'#ffffff'} height={50} width={250} />
            {deleteProfile && (
              <View>
                <ActionButton onPress={async () => { await deleteUser(); navigation.navigate('CaseImage'); }} title={visible ? 'Fortryd' : 'Slet Profil'} backgroundColor={'transparent'} textColor={'#CB4F00'} borderColor={'#CB4F00'} height={50} width={250} />
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
});


export default ProfileScreen;
