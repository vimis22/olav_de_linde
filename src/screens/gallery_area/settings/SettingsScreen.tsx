import React from 'react';
import {ImageBackground, View, StyleSheet} from 'react-native';
import GlobalStyles, {wallpaperBackground} from '../../../Styling/GlobalStyles.tsx';
import NormalText from '../../../components/NormalText.tsx';
import CircularBox from '../../../components/CircularBox.tsx';
import CaseScreen from '../case/CaseScreen.tsx';

const SettingsScreen = () => {
  return (
    <ImageBackground source={wallpaperBackground} style={GlobalStyles.backgroundImage} resizeMode={'cover'}>
      <View style={styles.topSection}>
        <View style={styles.topInterNameSection}>
          <NormalText text={'HEJ, HENRIK!'} fontSize={10} fontWeight={'bold'}/>
          <NormalText text={'Du har 2 lejemål'} fontSize={9} fontWeight={'bold'}/>
        </View>
        <CircularBox onPress={CaseScreen} height={200} width={200} borderRadius={'50%'}/>
      </View>
    </ImageBackground>
  )
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
    marginLeft: 20,
  },
});

export default SettingsScreen;
