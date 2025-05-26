import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import OptionButton from '../buttons/OptionButton.tsx';
import NormalText from '../textual/NormalText.tsx';
import {electricityIcon, hammerIcon, paintingIcon, waterIcon} from '../../styling/GlobalStyles.tsx';
import ActionButton from '../buttons/ActionButton.tsx';

interface AcuteEmployeeModalProps {
  onHomeNavigation: (technicianType: string) => void;
  onBackPress?: () => void;
}

const AcuteEmployeeModal: React.FC<AcuteEmployeeModalProps> = ({onHomeNavigation, onBackPress}) => {
  const [optionalVisibility1, setOptionalVisibility1] = useState(false);
  const [optionalVisibility2, setOptionalVisibility2] = useState(false);
  const [optionalVisibility3, setOptionalVisibility3] = useState(false);
  const [optionalVisibility4, setOptionalVisibility4] = useState(false);
  const [technicians, setTechnicians] = useState('');

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
      <View style={styles.optionsContainer}>
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
            setTechnicians('VICEVÆRT');
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
            setTechnicians('VVS');
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
            setTechnicians('ELEKTRIKER');
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
            setTechnicians('TØMRER');
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
      <View style={styles.buttonContainer}>
        <ActionButton
          onPress={() => onHomeNavigation(technicians)}
          title={'Ring op'}
          backgroundColor={'#F9F9F4'}
          borderColor={'#CB4F00'}
          textColor={'#CB4F00'}
          height={50}
          width={100}
          disabled={!technicians}
        />
        {onBackPress && (
          <ActionButton
            onPress={onBackPress}
            title={'Tilbage'}
            backgroundColor={'#FFFFFF'}
            borderColor={'#5C6855'}
            textColor={'#5C6855'}
            height={50}
            width={100}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  moduleContent: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9F9F4',
    borderRadius: 10,
    padding: 20,
    width: '100%',
    maxWidth: 400,
  },
  optionsContainer: {
    width: '100%',
    marginVertical: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 15,
  }
});

export default AcuteEmployeeModal;
