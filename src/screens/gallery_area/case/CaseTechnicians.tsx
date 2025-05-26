import React, {useCallback} from 'react';
import {ImageBackground, StyleSheet, View, BackHandler} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import GlobalStyles, {alphabetIcon, houseIcon, imageIcon, userIcon, wallpaperBackground} from '../../../styling/GlobalStyles.tsx';
import PropertyProgressIndicator from '../../../components/progress/PropertyProgressIndicator.tsx';
import NormalText from '../../../components/textual/NormalText.tsx';
import OptionButton from '../../../components/buttons/OptionButton.tsx';
import ActionButton from '../../../components/buttons/ActionButton.tsx';
import PopupScreen from '../../../components/menus/PopupScreen.tsx';
import TechnicianValues from '../../../components/menus/TechnicianValues.tsx';
import { useCaseManager } from '../../../hooks/CaseCreationManager.tsx';


const CaseTechnicians = ({navigation, route}: any) => {
  const {selectedTechnician, notificationsEnabled, handleTechnicianSelect, handleHomeNavigation, manageCollectionOfCaseInfo, title} = useCaseManager(navigation, route.params);

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        if (!notificationsEnabled) {
          navigation.navigate('CaseImage');
          return true;
        }
        return false;
      };
      const backHandler = BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () => backHandler.remove();
    }, [notificationsEnabled, navigation])
  );

  return (
    <ImageBackground source={wallpaperBackground} style={GlobalStyles.backgroundImage} resizeMode={'cover'}>
      <View style={styles.bottomSection}>
        <View style={styles.informationPlacement}>
          <NormalText text={'VÆLG TEKNIKER'} fontSize={20} fontWeight={'bold'} />
          <NormalText text={title || 'Ingen titel'} fontSize={18} />
        </View>
        <View>
          {TechnicianValues.map(tech => (
            <OptionButton key={tech.key} value={tech.value} onPress={() => handleTechnicianSelect(tech.value)} title={tech.value} backgroundColor={'#FFFFFF'}
              fieldIconBackground={'#5C6855'} fieldIcon={tech.icon} tickMarkIcon={true} highlight={selectedTechnician === tech.value}
              highlightColor={'#5C6855'} highlightTextColor={'#FFFFFF'} borderRadius={20} borderWidth={1} borderColor={'#5C6855'} />
          ))}
        </View>
        <ActionButton onPress={manageCollectionOfCaseInfo} title={'Næste'} backgroundColor={'transparent'} textColor={'#5C6855'}
          height={50} width={100} borderColor={'#5C6855'} />
        {notificationsEnabled && (
          <View>
            <PopupScreen title={'Oprettet'} description={'Din sag er nu oprettet og en tekniker vil tage sagen og vende tilbage med en dato'}
              height={200} width={200}
              optionText3={'Forstået'} optionTextColor3={'#ffffff'} optionTextBackgroundColor3={'#5C6855'} onOption3={handleHomeNavigation}
              backgroundColor={'#000000'} titleColor={'#ffffff'} descriptionColor={'#ffffff'} />
          </View>
        )}
        <PropertyProgressIndicator step={4} icon1={houseIcon} icon2={alphabetIcon} icon3={imageIcon} icon4={userIcon} progressColor={'#5C6855'} />
      </View>
    </ImageBackground>
  );
};


const styles = StyleSheet.create({
  bottomSection: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    gap: 20,
  },
  informationPlacement: {
    width: '100%',
  },
});


export default CaseTechnicians;
