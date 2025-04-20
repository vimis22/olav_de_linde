import React from 'react';
import {Image, ImageBackground, View, StyleSheet, Text} from 'react-native';
import GlobalStyles, {pentiaHouseBackground, plusIcon, wallpaperBackground} from '../../../Styling/GlobalStyles.tsx';
import CaseBox from '../../../components/CaseBox.tsx';
import LoginScreen from '../login/LoginScreen.tsx';

const HomeScreen = () => {
  return (
    <ImageBackground source={wallpaperBackground} style={GlobalStyles.backgroundImage} resizeMode={'cover'}>
      <View style={styles.mainContainer}>
        <View style={styles.topSection}>
          <Image source={pentiaHouseBackground} style={styles.houseImage}/>
        </View>

        <View style={styles.bottomSection}>
          <Text style={styles.title}>Aktive sager</Text>
          <Text style={styles.description}>
            Overblik over dine aktive sager. Tryk på sagen for at se flere informationer.
          </Text>
          <CaseBox onPress={LoginScreen} title={'Opret Sag'} backgroundColor={'#330099'} fieldIcon={plusIcon} height={'50%'} width={'100%'} />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  topSection: {
    height: 420,
    position: 'relative',
    zIndex: 1,
  },
  houseImage: {
    height: 350,
    width: '95%',
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  bottomSection: {
    paddingHorizontal: 20,
    paddingTop: 20,
    zIndex: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  description: {
    fontSize: 16,
    color: '#000',
    marginTop: 10,
  },
});

export default HomeScreen;
