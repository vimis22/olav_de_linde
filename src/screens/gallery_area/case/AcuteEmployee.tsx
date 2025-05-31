import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import OptionButton from '../../../components/buttons/OptionButton.tsx';
import NormalText from '../../../components/textual/NormalText.tsx';
import {electricityIcon, hammerIcon, paintingIcon, waterIcon} from '../../../styling/GlobalStyles.tsx';
import ActionButton from '../../../components/buttons/ActionButton.tsx';

/**
 * AcuteEmployee is a component that is used to select the employees in emergency cases.
 * @param navigation - Is a function that is used to navigate to other screens.
 * @constructor - Is a function that returns a styled box.
 * @returns - A styled box that shows options of employees where a buttons leads to calling them and to HomeScreen.
 */
const AcuteEmployee = ({navigation}: any) => {
  const [optionalVisibility1, setOptionalVisibility1] = useState(false);
  const [optionalVisibility2, setOptionalVisibility2] = useState(false);
  const [optionalVisibility3, setOptionalVisibility3] = useState(false);
  const [optionalVisibility4, setOptionalVisibility4] = useState(false);
  const [technicians, _setTechnicians] = useState('');
  return (
    <View style={styles.moduleContent}>
      <View>
        <NormalText
          text={'Hvem har du brug for?'}
          fontSize={20}
          fontWeight={'bold'}
        />
        <NormalText
          text={'Vælg den service, der kan hjælpe med den akutte situation.'}
          fontSize={18}
        />
      </View>
      <View>
        <OptionButton
          value={technicians === 'VICEVÆRT'}
          selected={technicians === 'VICEVÆRT'}
          fieldIcon={paintingIcon}
          fieldIconBackground={'#5C6855'}
          fieldIconSize={28}
          title={'VICEVÆRT'}
          backgroundColor={'#FFFFFF'}
          height={50}
          width={'100%'}
          fontSize={16}
          borderRadius={20}
          borderWidth={1}
          borderColor={'#5C6855'}
          onPress={() => {
            _setTechnicians('VICEVÆRT');
            setOptionalVisibility1(!optionalVisibility1);
          }}
          tickMarkIcon={true}
          highlightOnPress={true}
          highlightColor={'#5C6855'}
          highlightTextColor={'#FFFFFF'}
        />
        {optionalVisibility1 && (
          <NormalText
            text={
              'Opgaver: Simple opgaver som skift af pærer, rengøring og skift af inventar'
            }
          />
        )}
        <OptionButton
          value={technicians === 'VVS'}
          selected={technicians === 'VVS'}
          fieldIcon={waterIcon}
          fieldIconBackground={'#5C6855'}
          fieldIconSize={28}
          title={'VVS'}
          backgroundColor={'#FFFFFF'}
          height={50}
          width={'100%'}
          fontSize={16}
          borderRadius={20}
          borderWidth={1}
          borderColor={'#5C6855'}
          onPress={() => {
            _setTechnicians('VVS');
            setOptionalVisibility2(!optionalVisibility2);
          }}
          tickMarkIcon={true}
          highlightOnPress={true}
          highlightColor={'#5C6855'}
          highlightTextColor={'#FFFFFF'}
        />
        {optionalVisibility2 && (
          <NormalText
            text={
              'Opgaver: Alt relateret til vand ind og ud af bygning toiletter, vaske, rør m.m'
            }
          />
        )}
        <OptionButton
          value={technicians === 'ELEKTRIKER'}
          selected={technicians === 'ELEKTRIKER'}
          fieldIcon={electricityIcon}
          fieldIconBackground={'#5C6855'}
          fieldIconSize={28}
          title={'ELEKTRIKER'}
          backgroundColor={'#FFFFFF'}
          height={50}
          width={'100%'}
          fontSize={16}
          borderRadius={20}
          borderWidth={1}
          borderColor={'#5C6855'}
          onPress={() => {
            _setTechnicians('ELEKTRIKER');
            setOptionalVisibility3(!optionalVisibility3);
          }}
          tickMarkIcon={true}
          highlightOnPress={true}
          highlightColor={'#5C6855'}
          highlightTextColor={'#FFFFFF'}
        />
        {optionalVisibility3 && (
          <NormalText
            text={
              'Opgaver: Alt der har med strøm og elektronik at gøre, pånær inventar.'
            }
          />
        )}
        <OptionButton
          value={technicians === 'TØMRER'}
          selected={technicians === 'TØMRER'}
          fieldIcon={hammerIcon}
          fieldIconBackground={'#5C6855'}
          fieldIconSize={28}
          title={'TØMRER'}
          backgroundColor={'#FFFFFF'}
          height={50}
          width={'100%'}
          fontSize={16}
          borderRadius={20}
          borderWidth={1}
          borderColor={'#5C6855'}
          onPress={() => {
            _setTechnicians('TØMRER');
            setOptionalVisibility4(!optionalVisibility4);
          }}
          tickMarkIcon={true}
          highlightOnPress={true}
          highlightColor={'#5C6855'}
          highlightTextColor={'#FFFFFF'}
        />
        {optionalVisibility4 && (
          <NormalText
            text={'Opgaver: Opgaver der relaterer til bygningens stand.'}
          />
        )}
      </View>
      <ActionButton
        onPress={() => navigation.navigate('HomeTab')}
        title={'Gå til Hjem'}
        backgroundColor={'#F9F9F4'}
        borderColor={'#CB4F00'}
        textColor={'#CB4F00'}
        height={50}
        width={100}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  moduleContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9F9F4',
    borderRadius: 10,
    padding: 20,
    paddingTop: 30,
    paddingBottom: 30,
  },
});

export default AcuteEmployee;
