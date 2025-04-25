import React from 'react';
import {View, Text} from 'react-native';
import {alphabetIcon, houseIcon, imageIcon, userIcon} from '../../../Styling/GlobalStyles.tsx';
import PropertyProgressIndicator from '../../../components/PropertyProgressIndicator.tsx';

const CaseImage = () => {
  return (
    <View>
      <Text>TEST1234</Text>
      <PropertyProgressIndicator step={3} icon1={houseIcon} icon2={alphabetIcon} icon3={imageIcon} icon4={userIcon} progressColor={'#5C6855'}/>
    </View>
  )
};

export default CaseImage
