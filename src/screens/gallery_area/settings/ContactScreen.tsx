import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import GlobalStyles, {wallpaperBackground} from '../../../Styling/GlobalStyles.tsx';
import CircularBox from '../../../components/single/CircularBox.tsx';
import CaseScreen from '../case/CaseScreen.tsx';

const ContactScreen = ({navigation}: any) => {
  return (
    <ImageBackground source={wallpaperBackground} style={GlobalStyles.backgroundImage} resizeMode={'cover'}>
      <View style={styles.topSection}>
        <CircularBox onPress={CaseScreen} height={200} width={200} borderRadius={'50%'} />
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


export default ContactScreen;
