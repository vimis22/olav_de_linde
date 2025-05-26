import React, {useState, useEffect} from 'react';
import {View, ImageBackground, StyleSheet, ScrollView, Alert} from 'react-native';
import PopupScreen from '../../../components/menus/PopupScreen.tsx';
import GlobalStyles, {alphabetIcon, houseIcon, imageIcon, pentiaHouseBackground, userIcon, wallpaperBackground} from '../../../styling/GlobalStyles.tsx';
import PropertyProgressIndicator from '../../../components/progress/PropertyProgressIndicator.tsx';
import ActionButton from '../../../components/buttons/ActionButton.tsx';
import CaseBox from '../../../components/box/CaseBox.tsx';
import {launchImageLibrary} from 'react-native-image-picker';
import NormalText from '../../../components/textual/NormalText.tsx';
import {createCaseFromInfo} from '../../../functions/crud-operations/entities/case/CaseCreate.tsx';
import {CaseInfo} from '../../../functions/crud-operations/entities/case/CaseInfo.ts';
import {updateCaseByDescription} from '../../../functions/crud-operations/entities/case/CaseUpdate.tsx';
import { useCaseManager } from '../../../hooks/CaseCreationManager.tsx';
const CaseImage = ({navigation, route}: any) => {
  const [imageLink, setImageLink] = useState<string | null>(null);
  const [_selectedValue, _setSelectedValue] = useState('');
  const {title = '', description = ''} = route.params || {};
  const [caseId, setCaseId] = useState<string | null>(null);
  const [_loading, setLoading] = useState(false);
  const {handleNavigation, confirmNavigation, cancelNavigation, showExitConfirmation} = useCaseManager(navigation, route.params);


  useEffect(() => {
    const createNewCase = async () => {
      if (!title || !description) return;

      try {
        setLoading(true);
        const caseInfo: Omit<CaseInfo, 'id'> = {
          title,
          description,
        };
        const result = await createCaseFromInfo(caseInfo as CaseInfo);

        if (typeof result === 'string') {
          setCaseId(result);
          console.log('Case created with ID:', result);
        } else {
          console.error('Failed to create case');
        }
      } catch (error) {
        console.error('Error creating case:', error);
        Alert.alert('Error', 'Failed to create case');
      } finally {
        setLoading(false);
      }
    };

    createNewCase();
  }, [title, description]);

  const handleSelectImage = async () => {
    const imageDisplay = await launchImageLibrary({mediaType: 'photo'});
    if (imageDisplay.assets && imageDisplay.assets.length > 0) {
      const imageUri = imageDisplay.assets[0].uri ?? null;
      setImageLink(imageUri);

      if (caseId && imageUri) {
        try {
          const updatedDescription = `${description}\n\nImage attached: ${new Date().toLocaleString()}`;
          await updateCaseByDescription(caseId, updatedDescription);

          console.log('Case updated with image info');
        } catch (error) {
          console.error('Error updating case with image:', error);
          Alert.alert('Error', 'Failed to update case with image');
        }
      }
    }
  };

  return (
    <ImageBackground source={wallpaperBackground} style={GlobalStyles.backgroundImage} resizeMode={'cover'}>
      {showExitConfirmation && (
        <PopupScreen
          title={'Er du sikker?'}
          description={'Vil du forlade denne side? Dine ændringer vil ikke blive gemt.'}
          height={200}
          width={300}
          optionText1={'Ja'}
          optionText2={'Nej'}
          optionTextColor1={'#FFFFFF'}
          optionTextBackgroundColor1={'#CB4F00'}
          optionTextBorderRadiusColor1={'#CB4F00'}
          optionTextBorderWidth1={0}
          optionTextColor2={'#FFFFFF'}
          optionTextBackgroundColor2={'#5C6855'}
          optionTextBorderRadiusColor2={'#5C6855'}
          optionTextBorderWidth2={0}
          onEnable={confirmNavigation}
          onDisable={cancelNavigation}
          backgroundColor={'#F9F9F4'}
          titleColor={'#333333'}
          descriptionColor={'#555555'}
          visible={true}
        />
      )}
        <ScrollView style={styles.topSection}>
          <ImageBackground source={pentiaHouseBackground} style={styles.houseImage}/>
          <View style={styles.bottomSection}>
            <View style={styles.caseDescriptionContainer}>
              <NormalText text={title || 'Ingen titel'} fontSize={20} fontWeight={'bold'}/>
              <NormalText text={description || 'Ingen beskrivelse'} fontSize={12}/>
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

            <ActionButton
              onPress={() => handleNavigation('CaseTechnicians', {
                title,
                description,
                caseId,
                imageUrl: imageLink
              })}
              title={'Næste'}
              backgroundColor={'transparent'}
              textColor={'#5C6855'}
              height={50}
              width={100}
              borderColor={'#5C6855'}
            />

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
