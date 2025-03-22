import React from 'react';
import {SafeAreaView, TouchableOpacity} from 'react-native';
import NormalText from '../components/NormalText.tsx';
import GlobalStyles from '../components/GlobalStyles.tsx';

const SplashScreen = ({navigation}: any) => {
    return (
        <SafeAreaView style={GlobalStyles.pageContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                <NormalText text={'Olav De Linde'} textColor={'#ffffff'} fontSize={10} />
            </TouchableOpacity>
        </SafeAreaView>
    );
};


export default SplashScreen;
