import {Image, StyleSheet, View} from 'react-native';
import {userIcon} from '../../styling/GlobalStyles.tsx';
import NormalText from '../textual/NormalText.tsx';
import React from 'react';

interface AssignedEmployeeSectionProps {
  resident?: string,
  caretaker?: string,
  landlord?: string
}
const AssignedEmployeeSection: React.FC<AssignedEmployeeSectionProps> = ({resident, caretaker, landlord}) => (
  <View style={styles.peopleContainer}>
    {resident && (
      <View style={styles.personRow}>
        <Image source={userIcon} style={styles.personIcon} />
        <NormalText text={`Beboer: ${resident}`} fontSize={14} />
      </View>
    )}

    {caretaker && (
      <View style={styles.personRow}>
        <Image source={userIcon} style={styles.personIcon} />
        <NormalText text={`Vicevært: ${caretaker}`} fontSize={14} />
      </View>
    )}

    {landlord && (
      <View style={styles.personRow}>
        <Image source={userIcon} style={styles.personIcon} />
        <NormalText text={`Udlejer: ${landlord}`} fontSize={14} />
      </View>
    )}
  </View>
);

const styles = StyleSheet.create({
  peopleContainer: {
    width: '100%',
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
  },
  personRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  personIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});

export default AssignedEmployeeSection;
