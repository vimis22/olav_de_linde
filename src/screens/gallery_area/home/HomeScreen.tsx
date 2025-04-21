import React from 'react';
import {Image, ImageBackground, View, StyleSheet, Text, ScrollView} from 'react-native';
import GlobalStyles, {pentiaHouseBackground, plusIcon, wallpaperBackground} from '../../../Styling/GlobalStyles.tsx';
import CaseBox from '../../../components/CaseBox.tsx';
const HomeScreen = () => {
  return (
    <ImageBackground source={wallpaperBackground} style={GlobalStyles.backgroundImage} resizeMode={'cover'}>
      <ScrollView style={styles.mainContainer}>
        <View style={styles.topSection}>
          <Image source={pentiaHouseBackground} style={styles.houseImage}/>
        </View>

        <View style={styles.bottomSection}>
          <Text style={styles.title}>Aktive sager</Text>
          <Text style={styles.description}>
            Overblik over dine aktive sager. Tryk på sagen for at se flere informationer.
          </Text>
          <CaseBox onPress={'LoginScreen'} title={'Opret Sag'} backgroundColor={'#ffffff'} textColor={'#D8D8CE'} fieldIcon={plusIcon} caseContainerHeight={200} caseContainerWidth={'100%'}
                   caseContainerBorderRadius={10} imageContainerHeight={60} imageContainerWidth={60} imageContainerBorderRadius={30} imageContainerBackgroundColor={'transparent'}
                   imageContainerBorderColor={'#D8D8CE'} imageContainerBorderWidth={3} textContainerHeight={40} textContainerWidth={'80%'} textContainerBorderRadius={5} textContainerBackgroundColor={'transparent'}
          />
        </View>

        <View style={styles.bottomSection}>
          <Text style={styles.title}>Afsluttede sager</Text>
          <Text style={styles.description}>
            Overblik over dine afsluttede sager. Tryk på sagen for at se flere informationer.
          </Text>
          <CaseBox onPress={'LoginScreen'} title={'Opret Sag'} backgroundColor={'#ffffff'} textColor={'#D8D8CE'} fieldIcon={plusIcon} caseContainerHeight={200} caseContainerWidth={'100%'}
                   caseContainerBorderRadius={10} imageContainerHeight={60} imageContainerWidth={60} imageContainerBorderRadius={30} imageContainerBackgroundColor={'transparent'}
                   imageContainerBorderColor={'#D8D8CE'} imageContainerBorderWidth={3} textContainerHeight={40} textContainerWidth={'80%'} textContainerBorderRadius={5} textContainerBackgroundColor={'transparent'}
          />
        </View>
      </ScrollView>
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
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  bottomSection: {
    paddingHorizontal: 20,
    paddingTop: 10,
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
