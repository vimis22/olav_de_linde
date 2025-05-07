import React, {useState} from 'react';
import {Image, ImageBackground, ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import GlobalStyles, {lockIcon, wallpaperBackground} from '../../../styling/GlobalStyles.tsx';
import NormalText from '../../../components/NormalText.tsx';
import InputFieldArea from '../../../components/InputFieldArea.tsx';
import PopupScreen from '../../../components/PopupScreen.tsx';
import ImageManager from '../../../functions/manager_services/ImageManager.tsx';

const PasswordScreen = ({navigation}: any) => {
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
      <ScrollView>
        <View style={styles.topSection}>
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
          <NormalText text={'Skift dit kodeord til din Olav De Linde konto'} fontSize={20} />
          <NormalText text={'Du skal skrive din nuværende konto for at lave et nyt kodeord'} fontSize={14}/>
          <View style={styles.bottomSection}>
            <NormalText text={'Nuværende kodeord'} fontSize={12} />
            <InputFieldArea whenPassword={true} fieldIcon={lockIcon} value={'KODEORD'} />
            <NormalText text={'Nyt kodeord'} fontSize={12} />
            <InputFieldArea whenPassword={true} fieldIcon={lockIcon} value={'NYT KODEORD'} />
            <InputFieldArea whenPassword={true} fieldIcon={lockIcon} value={'GENTAG KODEORD'} />
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


export default PasswordScreen;
