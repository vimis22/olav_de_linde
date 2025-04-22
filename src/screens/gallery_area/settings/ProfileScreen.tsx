import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import GlobalStyles, {
  atIcon,
  callIcon,
  houseIcon, locationIcon,
  userIcon,
  wallpaperBackground,
} from '../../../Styling/GlobalStyles.tsx';
import CircularBox from '../../../components/CircularBox.tsx';
import CaseScreen from '../case/CaseScreen.tsx';
import InputFieldArea from '../../../components/InputFieldArea.tsx';
import ActionButton from '../../../components/ActionButton.tsx';
import SettingsScreen from './SettingsScreen.tsx';

const ProfileScreen = ({navigation}: any) => {
  return (
    <ImageBackground source={wallpaperBackground} style={GlobalStyles.backgroundImage} resizeMode={'cover'}>
      <View style={styles.topSection}>
        <CircularBox onPress={() => CaseScreen} height={200} width={200} borderRadius={'50%'} />
        <View style={styles.bottomSection}>
          <InputFieldArea whenPassword={false} fieldIcon={userIcon} value={'Henrik Grove'} />
          <InputFieldArea whenPassword={false} fieldIcon={callIcon} value={'+45 70 12 14 16'} />
          <InputFieldArea whenPassword={false} fieldIcon={atIcon} value={'hsg@pentia.dk'} />
          <InputFieldArea whenPassword={false} fieldIcon={houseIcon} value={'Pentia'} />
          <InputFieldArea whenPassword={false} fieldIcon={locationIcon} value={'Edisonsvej 2, 5000 Odense'} />
          <View>
            <ActionButton onPress={() => SettingsScreen} title={'Rediger'} backgroundColor={'#5C6855'} textColor={'#ffffff'} height={50} width={250} />
          </View>
        </View>
      </View>
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

});


export default ProfileScreen;
