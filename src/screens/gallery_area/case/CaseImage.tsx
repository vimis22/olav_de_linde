import React, {useState} from 'react';
import {View, ImageBackground, StyleSheet, ScrollView} from 'react-native';
import GlobalStyles, {alphabetIcon, houseIcon, imageIcon, pentiaHouseBackground, userIcon, wallpaperBackground} from '../../../styling/GlobalStyles.tsx';
import PropertyProgressIndicator from '../../../components/progress/PropertyProgressIndicator.tsx';
import ActionButton from '../../../components/buttons/ActionButton.tsx';
import CaseBox from '../../../components/box/CaseBox.tsx';
import {launchImageLibrary} from 'react-native-image-picker';
import NormalText from '../../../components/textual/NormalText.tsx';

const CaseImage = ({navigation, route}: any) => {
  const [imageLink, setImageLink] = useState<string | null>(null);
  const [_selectedValue, _setSelectedValue] = useState('');
  const {title = '', description = ''} = route.params || {};

  const handleSelectImage = async () => {
    const imageDisplay = await launchImageLibrary({mediaType: 'photo'});
    if (imageDisplay.assets && imageDisplay.assets.length > 0) {
      setImageLink(imageDisplay.assets[0].uri ?? null);
    }
  };

  return (
    <ImageBackground source={wallpaperBackground} style={GlobalStyles.backgroundImage} resizeMode={'cover'}>
        <ScrollView style={styles.topSection}>
          <ImageBackground source={pentiaHouseBackground} style={styles.houseImage}/>
          <View style={styles.bottomSection}>
            <View style={styles.caseDescriptionContainer}>
              <NormalText text={'Manglende Dørhåndtag'} fontSize={20} fontWeight={'bold'}/>
              <NormalText text={'På anden sal, for enden af trappen, mangler et dørhåndtag til mødelokalet indefra. Det er derfor muligt at lukke sig selv inde i lokalet. Vi har indtil nu sat...'} fontSize={12}/>
            </View>
            <View>
              <CaseBox
                title={''}
                onPress={handleSelectImage} backgroundColor={'#ffffff'} textColor={'#D8D8CE'}
                fieldIcon={imageIcon} caseContainerHeight={80} caseContainerWidth={80} caseContainerBorderRadius={20}
                imageContainerBorderColor={'#D8D8CE'} imageContainerBorderWidth={3} imageContainerHeight={50} imageContainerWidth={50}
                imageContainerBackgroundColor={'#ffffff'} textContainerHeight={0} textContainerWidth={0}
              />
              {imageLink && (
                <ImageBackground
                  source={{ uri: imageLink }}
                  style={{ width: 100, height: 100, marginTop: 10, borderRadius: 12, overflow: 'hidden' }}
                  resizeMode="cover"
                />
              )}
            </View>

            <ActionButton onPress={() => navigation.navigate('CaseTechnicians', {title, description})} title={'Næste'} backgroundColor={'transparent'}
              textColor={'#5C6855'} height={50} width={100} borderColor={'#5C6855'} />

            <PropertyProgressIndicator step={3} icon1={houseIcon} icon2={alphabetIcon} icon3={imageIcon} icon4={userIcon} progressColor={'#5C6855'} />
          </View>
        </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  topSection: {
    height: 420,
    position: 'relative',
    zIndex: 1,
  },
  houseImage: {
    height: 350,
    width: '99%',
    marginTop: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  dropdownContainer: {
    marginTop: '75%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    zIndex: 10,
  },
  dropdownRoot: {
    flex: 1,
    zIndex: 20,
  },
  dropdownStyles: {
    backgroundColor: '#868595',
    color: '#ffffff',
  },
  iconRoot: {
    justifyContent: 'flex-start',
    height: 40,
    width: 50,
    alignItems: 'center',
  },
  bottomSection: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    gap: 20,
  },
  caseDescriptionContainer: {
    backgroundColor: '#FFFFFF',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    width: '75%',
    marginRight: '25%',
  },
});

export default CaseImage;
