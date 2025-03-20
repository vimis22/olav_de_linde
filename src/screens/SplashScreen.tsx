import React from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import NormalText from '../components/NormalText.tsx';

const SplashScreen = ({navigation}: any) => {
    return (
        <SafeAreaView style={styles.pageContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                <NormalText text={'Olav De Linde'} textColor={'#ffffff'} fontSize={10} />
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#330099',
    },
});

export default SplashScreen;
