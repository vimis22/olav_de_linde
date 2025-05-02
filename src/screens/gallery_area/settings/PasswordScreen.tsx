import React from 'react';
import {ImageBackground, ScrollView, StyleSheet, View} from 'react-native';
import GlobalStyles, {lockIcon, wallpaperBackground} from '../../../Styling/GlobalStyles.tsx';
import CircularBox from '../../../components/single/CircularBox.tsx';
import CaseScreen from '../case/CaseScreen.tsx';
import NormalText from '../../../components/single/NormalText.tsx';
import InputFieldArea from '../../../components/single/InputFieldArea.tsx';

const PasswordScreen = ({navigation}: any) => {
  return (
    <ImageBackground source={wallpaperBackground} style={GlobalStyles.backgroundImage} resizeMode={'cover'}>
      <ScrollView>
        <View style={styles.topSection}>
          <CircularBox onPress={CaseScreen} height={200} width={200} borderRadius={'50%'} />
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
});


export default PasswordScreen;
