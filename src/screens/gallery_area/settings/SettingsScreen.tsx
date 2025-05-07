import React, {useState} from 'react';
import {ImageBackground, View, StyleSheet, Image} from 'react-native';
import GlobalStyles, {callIcon, documentIcon, lockIcon, logIcon, protectionIcon, userIcon, wallpaperBackground} from '../../../styling/GlobalStyles.tsx';
import NormalText from '../../../components/NormalText.tsx';
import MenuOptions from '../../../components/MenuOptions.tsx';
import {useProfileImage} from '../../../functions/providers/ProfileImageProvider.tsx';
import PopupScreen from '../../../components/PopupScreen.tsx';

const SettingsScreen = ({navigation}: any) => {
  const [logout, setLogout] = useState(false);
  const {profileImage} = useProfileImage();

  return (
    <ImageBackground source={wallpaperBackground} style={GlobalStyles.backgroundImage} resizeMode={'cover'}>
      <View style={styles.topSection}>
        <View style={styles.topInterNameSection}>
          <NormalText text={'HEJ, HENRIK!'} fontSize={18} fontWeight={'bold'} />
          <NormalText text={'Du har 2 lejemål'} fontSize={13} fontWeight={'bold'} />
        </View>

        <View>
          {profileImage ? (
            <Image source={{uri: profileImage}} style={styles.imageCircle} />
          ) : (
            <View style={styles.imageCircle} />
          )}
        </View>
      </View>

      <View style={styles.bottomSection}>
        <MenuOptions icon={userIcon} onPress={() => navigation.navigate('ProfileScreen')} title={'MIN PROFIL'}
          iconBackground={'#5C6855'} backgroundColor={'transparent'} textColor={'black'}
          height={'11%'} width={'110%'} borderRadius={50} borderColor={'black'} borderWidth={3} />
        <MenuOptions icon={lockIcon} onPress={() => navigation.navigate('PasswordScreen')} title={'KODEORD'}
          iconBackground={'#5C6855'} backgroundColor={'transparent'} textColor={'black'}
          height={'11%'} width={'110%'} borderRadius={10} borderWidth={3} />
        <MenuOptions icon={callIcon} onPress={() => navigation.navigate('ContactScreen')} title={'KONTAKT'}
          iconBackground={'#5C6855'} backgroundColor={'transparent'} textColor={'black'}
          height={'11%'} width={'110%'} borderRadius={10} borderWidth={3} />
        <MenuOptions icon={documentIcon} onPress={() => navigation.navigate('HomeScreen')} title={'VILKÅR OG BETINGELSER'}
          iconBackground={'#5C6855'} backgroundColor={'transparent'} textColor={'black'} height={'11%'}
          width={'110%'} borderRadius={10} borderWidth={3} />
        <MenuOptions icon={protectionIcon} onPress={() => navigation.navigate('HomeScreen')} title={'DATAHÅNDTERING'}
          iconBackground={'#5C6855'} backgroundColor={'transparent'} textColor={'black'}
          height={'11%'} width={'110%'} borderRadius={10} borderWidth={3} />
        <MenuOptions icon={logIcon} onPress={() => setLogout(true)} title={'LOGOUT'}
          iconBackground={'#5C6855'} backgroundColor={'transparent'} textColor={'black'}
          height={'11%'} width={'110%'} borderRadius={10} borderWidth={3} />
        {
          logout && (
            <PopupScreen title={'Log ud?'} description={'Du kan se dine sager så snart du logger ind igen.'}
              height={200} width={300} optionText1={'Ja'} optionText2={'Nej'}
              optionTextColor1={'#CB4F00'} optionTextBackgroundColor1={'#FFFFFF'} optionTextBorderRadiusColor1={'#CB4F00'} optionTextBorderWidth1={1}
              optionTextColor2={'#FFFFFF'} optionTextBackgroundColor2={'#5C6855'} optionTextBorderRadiusColor2={'#5C6855'} optionTextBorderWidth2={1}
              onEnable={() => {setLogout(false);navigation.navigate('LoginScreen');}} onDisable={() => setLogout(false)}
              backgroundColor={'#FFFFFF'} titleColor={'#000000'} descriptionColor={'#000000'} visible={true}
            />
          )
        }
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    marginLeft: 20,
  },
  topInterNameSection: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  bottomSection: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    gap: 10,
  },
  imageCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#bbb',
    overflow: 'hidden',
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SettingsScreen;
