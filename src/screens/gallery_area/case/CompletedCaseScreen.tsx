import React, { useState } from 'react';
import { Image, StyleSheet, View, ScrollView } from 'react-native';
import NormalText from '../../../components/NormalText.tsx';
import CaseProgressIndicator from '../../../components/CaseProgressIndicator.tsx';
import {calenderIcon, locationIcon, pentiaHouseBackground, screwDriverIcon, tickMarkIcon, userIcon} from '../../../styling/GlobalStyles.tsx';
import InputFieldArea from '../../../components/InputFieldArea.tsx';
import TextBox from '../../../components/TextBox.tsx';
import ActionButton from '../../../components/ActionButton.tsx';

const CompletedCaseScreen = ({ navigation }: any) => {
  const [password, setPassword] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.modal}>
        <NormalText text="Manglende Dørhåndtag" fontSize={22} fontWeight="bold" />
        <CaseProgressIndicator step={5} icon1={locationIcon} icon2={userIcon} icon3={calenderIcon} icon4={screwDriverIcon} icon5={tickMarkIcon} />
        <NormalText text="Done! Sagen er afsluttet!" fontSize={15} fontWeight="600" />

        <InputFieldArea fieldIcon={calenderIcon} fieldIconBackground="#D8D8CE" fieldIconSize={28}
          textColor="#000000" placeholder="Tirsdag d. 31. Maj 2025" value={password} onChangeText={setPassword}
          containerHeight={48} containerRadius={18} whenPassword={false} />

        <TextBox title={
            'På anden sal, for enden af trappen, mangler et dørhåndtag til mødelokalet indefra. Det er derfor muligt, at lukke sig selv inde i lokalet. Vi har indtil nu sat en stol for døren for at undgå at det sker.'
          }
          backgroundColor="#ffffff" textColor="black" textSize={12}
          caseContainerHeight={140} caseContainerWidth="100%" caseContainerBorderRadius={10}
          textContainerHeight={100} textContainerWidth="90%" textContainerBorderRadius={5} textContainerBackgroundColor="transparent" />

        <View style={styles.imageBackgroundContainer}>
          <Image source={pentiaHouseBackground} style={styles.backgroundImage} resizeMode="cover" />
          <View style={styles.overlay}>
            <ActionButton backgroundColor="#ff008b" onPress={() => navigation.navigate('HomeScreen')} title="Chat" textColor="#ffffff" height={48} width={220} />
          </View>
        </View>

        <View style={styles.actionButtonsRow}>
          <ActionButton backgroundColor={'#BDC8B9'} onPress={() => {/* Har ikke defineret funktionen endnu*/}}
            title={'Rediger'} textColor={'#ffffff'} height={44} width={120}
          />
          <ActionButton backgroundColor={'#F9F9F4'} onPress={() => {/* Har ikke defineret funktionen endnu */}} title="Slet" textColor={"#5C6855"} height={44} width={120} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#f4f4f4',
    paddingVertical: 16,
  },
  modal: {
    backgroundColor: 'white',
    borderRadius: 14,
    padding: 22,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6, // Til Android
    alignItems: 'center',
  },
  headerText: {
    marginBottom: 8,
  },
  statusText: {
    marginVertical: 6,
    color: '#04AA6D',
    fontWeight: '600',
    fontSize: 15,
  },
  imageBackgroundContainer: {
    width: '100%',
    height: 170,
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 18,
    marginBottom: 18,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    //Found from w3schools and react documentation
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 18,
    width: '100%',
  },
  actionButtonsRow: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 8,
    marginBottom: 4,
    gap: 10,
  },
});

export default CompletedCaseScreen;
