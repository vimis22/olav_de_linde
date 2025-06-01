import React, {useState} from 'react';
import {ImageBackground, View, StyleSheet, Image, Linking, ActivityIndicator} from 'react-native';
import GlobalStyles, {callIcon, documentIcon, lockIcon, logIcon, protectionIcon, userIcon, wallpaperBackground} from '../../../styling/GlobalStyles.tsx';
import NormalText from '../../../components/textual/NormalText.tsx';
import MenuOptions from '../../../components/menus/MenuOptions.tsx';
import {useProfileImage} from '../../../functions/providers/ProfileImageProvider.tsx';
import PopupScreen from '../../../components/menus/PopupScreen.tsx';
import {GetProfileInformation} from '../../../functions/hooks/ProfileSettingsManager.tsx';
import {handleLogout} from '../../../functions/hooks/AuthenticationManager.tsx';

/**
 * SettingsScreen is where the user is able to navigate to other options regarding user-information and privacy.
 * @param navigation - navigation object from react-navigation.
 * @constructor - creates a new SettingsScreen.
 * @returns - SettingsScreen with styled elements..
 */
const SettingsScreen = ({navigation}: any) => {
  const [logout, setLogout] = useState(false);
  const {profileImage} = useProfileImage();
  const {userInfoData, isLoading} = GetProfileInformation();

  return (
    <ImageBackground source={wallpaperBackground} style={GlobalStyles.backgroundImage} resizeMode={'cover'}>
      <View style={styles.topSection}>
        <View style={styles.topInterNameSection}>
          {isLoading ? (
            <ActivityIndicator size="large" color="#5C6855" />
          ) : (
            <NormalText text={`Hej ${userInfoData?.name || 'bruger'}`} fontSize={18} fontWeight={'bold'} />
          )}
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
        <MenuOptions icon={callIcon} onPress={() => Linking.openURL('https://www.olavdelinde.dk/kontakt/')} title={'KONTAKT'}
          iconBackground={'#5C6855'} backgroundColor={'transparent'} textColor={'black'}
          height={'11%'} width={'110%'} borderRadius={10} borderWidth={3} />
        <MenuOptions icon={documentIcon} onPress={() => Linking.openURL('https://www.olavdelinde.dk')} title={'VILKÅR OG BETINGELSER'}
          iconBackground={'#5C6855'} backgroundColor={'transparent'} textColor={'black'} height={'11%'}
          width={'110%'} borderRadius={10} borderWidth={3} />
        <MenuOptions icon={protectionIcon} onPress={() => Linking.openURL('https://www.olavdelinde.dk')} title={'DATAHÅNDTERING'}
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
              onEnable={() => handleLogout(navigation)} onDisable={() => setLogout(false)}
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
