import React from 'react';
import {ImageBackground, View} from 'react-native';
import GlobalStyles, {wallpaperBackground} from '../../../Styling/GlobalStyles.tsx';
import NormalText from '../../../components/NormalText.tsx';

const CaseScreen = () => {
  return (
    <ImageBackground source={wallpaperBackground} style={GlobalStyles.backgroundImage} resizeMode={'cover'}>
      <View>
        <NormalText text={'CaseScreen'} fontSize={10} fontWeight={'bold'}/>
      </View>
    </ImageBackground>
  );
};

export default CaseScreen;
