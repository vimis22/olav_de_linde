import React from 'react';
import {ImageBackground, View, StyleSheet} from 'react-native';
import GlobalStyles, {
  callIcon,
  documentIcon,
  lockIcon, logIcon, protectionIcon,
  userIcon,
  wallpaperBackground,
} from '../../../Styling/GlobalStyles.tsx';
import NormalText from '../../../components/NormalText.tsx';
import CircularBox from '../../../components/CircularBox.tsx';
import CaseScreen from '../case/CaseScreen.tsx';
import MenuOptions from '../../../components/MenuOptions.tsx';
import HomeScreen from '../home/HomeScreen.tsx';
import ProfileScreen from './ProfileScreen.tsx';

const SettingsScreen = ({navigation}: any) => {
  return (
    <ImageBackground source={wallpaperBackground} style={GlobalStyles.backgroundImage} resizeMode={'cover'}>
      <View style={styles.topSection}>
        <View style={styles.topInterNameSection}>
          <NormalText text={'HEJ, HENRIK!'} fontSize={18} fontWeight={'bold'}/>
          <NormalText text={'Du har 2 lejemål'} fontSize={18} fontWeight={'bold'}/>
        </View>
        <CircularBox onPress={CaseScreen} height={200} width={200} borderRadius={'50%'}/>
      </View>

      <View style={styles.bottomSection}>
        <MenuOptions icon={userIcon} onPress={ProfileScreen} title={'MIN PROFIL'} iconBackground={'#5C6855'} backgroundColor={'transparent'} textColor={'black'} height={'11%'} width={'110%'} borderRadius={10} borderColor={'black'} borderWidth={3}/>
        <MenuOptions icon={lockIcon} onPress={HomeScreen} title={'KODEORD'} iconBackground={'#5C6855'} backgroundColor={'transparent'} textColor={'black'} height={'11%'} width={'110%'} borderRadius={10} borderWidth={3}/>
        <MenuOptions icon={callIcon} onPress={HomeScreen} title={'KONTAKT'} iconBackground={'#5C6855'} backgroundColor={'transparent'} textColor={'black'} height={'11%'} width={'110%'} borderRadius={10} borderWidth={3}/>
        <MenuOptions icon={documentIcon} onPress={HomeScreen} title={'VILKÅR OG BETINGELSER'} iconBackground={'#5C6855'} backgroundColor={'transparent'} textColor={'black'} height={'11%'} width={'110%'} borderRadius={10} borderWidth={3}/>
        <MenuOptions icon={protectionIcon} onPress={HomeScreen} title={'DATAHÅNDTERING'} iconBackground={'#5C6855'} backgroundColor={'transparent'} textColor={'black'} height={'11%'} width={'110%'} borderRadius={10} borderWidth={3}/>
        <MenuOptions icon={logIcon} onPress={HomeScreen} title={'LOGOUT'} iconBackground={'#5C6855'} backgroundColor={'transparent'} textColor={'black'} height={'11%'} width={'110%'} borderRadius={10} borderWidth={3}/>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topInterNameSection: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomSection: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    gap: 10,
  },
});

export default SettingsScreen;
