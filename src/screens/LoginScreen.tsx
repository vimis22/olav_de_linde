import React from 'react';
import {SafeAreaView} from 'react-native';
import GlobalStyles from '../components/GlobalStyles.tsx';
import InputFieldArea from '../components/InputFieldArea.tsx';

const LoginScreen = ({navigation}: any) => {
    return (
        <SafeAreaView style={GlobalStyles.pageContainer}>
            <InputFieldArea value={'value'} onChangeText={changeMethodInsertHere} backgroundColor={'#330099'} textColor={'#ffffff'}/>
        </SafeAreaView>
    );
};

export default LoginScreen;
