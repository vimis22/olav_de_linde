import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import GlobalStyles, {alphabetIcon, electricityIcon, hammerIcon, houseIcon, imageIcon, paintingIcon, userIcon, wallpaperBackground, waterIcon} from '../../../Styling/GlobalStyles.tsx';
import PropertyProgressIndicator from '../../../components/single/PropertyProgressIndicator.tsx';
import NormalText from '../../../components/single/NormalText.tsx';
import OptionButton from '../../../components/single/OptionButton.tsx';
import ActionButton from '../../../components/single/ActionButton.tsx';

const CaseTechnicians = ({navigation}: any) => {
  return (
      <ImageBackground source={wallpaperBackground} style={GlobalStyles.backgroundImage} resizeMode={'cover'}>
          <View style={styles.bottomSection}>
              <View style={styles.informationPlacement}>
                  <NormalText text={'VÆLG TEKNIKER'} fontSize={20} fontWeight={'bold'} />
                  <NormalText text={'Manglende Dørhåndtag'} fontSize={18} />
              </View>
              <View>
                  <OptionButton fieldIcon={paintingIcon} fieldIconBackground={'#5C6855'} fieldIconSize={28} title={'VICEVÆRT'} backgroundColor={'#FFFFFF'} height={50} width={'100%'} fontSize={16} borderRadius={20} borderWidth={1} borderColor={'#5C6855'} onPress={() => {}} tickMarkIcon={true} highlightOnPress={true} highlightColor={'#5C6855'} highlightTextColor={'#FFFFFF'}/>
                  <OptionButton fieldIcon={waterIcon} fieldIconBackground={'#5C6855'} fieldIconSize={28} title={'VVS'} backgroundColor={'#FFFFFF'} height={50} width={'100%'} fontSize={16} borderRadius={20} borderWidth={1} borderColor={'#5C6855'} onPress={() => {}} tickMarkIcon={true} highlightOnPress={true} highlightColor={'#5C6855'} highlightTextColor={'#FFFFFF'}/>
                  <OptionButton fieldIcon={electricityIcon} fieldIconBackground={'#5C6855'} fieldIconSize={28} title={'ELEKTRIKER'} backgroundColor={'#FFFFFF'} height={50} width={'100%'} fontSize={16} borderRadius={20} borderWidth={1} borderColor={'#5C6855'} onPress={() => {}} tickMarkIcon={true} highlightOnPress={true} highlightColor={'#5C6855'} highlightTextColor={'#FFFFFF'}/>
                  <OptionButton fieldIcon={hammerIcon} fieldIconBackground={'#5C6855'} fieldIconSize={28} title={'TØMRER'} backgroundColor={'#FFFFFF'} height={50} width={'100%'} fontSize={16} borderRadius={20} borderWidth={1} borderColor={'#5C6855'} onPress={() => {}} tickMarkIcon={true} highlightOnPress={true} highlightColor={'#5C6855'} highlightTextColor={'#FFFFFF'}/>
              </View>
              <ActionButton onPress={() => navigation.navigate('HomeTab')} title={'Næste'} backgroundColor={'transparent'}
                            textColor={'#5C6855'} height={50} width={100} borderColor={'#5C6855'} />

              <PropertyProgressIndicator step={4} icon1={houseIcon} icon2={alphabetIcon} icon3={imageIcon} icon4={userIcon} progressColor={'#5C6855'}/>
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
