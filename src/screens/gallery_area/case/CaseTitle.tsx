import React, {useState} from 'react';
import {ImageBackground, ScrollView, StyleSheet, View} from 'react-native';
import PopupScreen from '../../../components/menus/PopupScreen.tsx';
import GlobalStyles, {alphabetIcon, houseIcon, imageIcon, pentiaHouseBackground, userIcon, wallpaperBackground} from '../../../styling/GlobalStyles.tsx';
import ActionButton from '../../../components/buttons/ActionButton.tsx';
import PropertyProgressIndicator from '../../../components/progress/PropertyProgressIndicator.tsx';
import TextFieldArea from '../../../components/textual/TextFieldArea.tsx';
import {useStackNavigation} from '../../../functions/hooks/useStackNavigation.tsx';
const CaseTitle = ({navigation}: any) => {
  const [, _setSelectedValue] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const {handleNavigation, confirmNavigation, cancelNavigation, showExitConfirmation} = useStackNavigation(navigation);

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
            <TextFieldArea placeholder={'Titel'} onChangeText={setTitle} value={title} />

            <TextFieldArea placeholder={'Beskriv din sag'} onChangeText={setDescription} value={description} />

            <ActionButton onPress={() => handleNavigation('CaseImage', {title, description})} title={'Næste'} backgroundColor={'transparent'} textColor={'#5C6855'} height={50} width={100} borderColor={'#5C6855'} />

            <PropertyProgressIndicator step={2} icon1={houseIcon} icon2={alphabetIcon} icon3={imageIcon} icon4={userIcon} progressColor={'#5C6855'}/>
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
});

export default CaseTitle;
