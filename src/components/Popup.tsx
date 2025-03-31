import React from 'react';
import {ImageBackground, Modal, StyleSheet, Text, View} from 'react-native';
import globalStyles, {wallpaperBackground} from '../Styling/GlobalStyles.tsx';
import NormalText from './NormalText.tsx';
import ActionButton from './ActionButton.tsx';
import LoginScreen from '../screens/LoginScreen.tsx';

/*
@link https://blog.logrocket.com/creating-a-pop-up-modal-in-react-native/
 */

const Popup = ({makeVisible, closeVisibility}) => {
    return (
        <ImageBackground source={wallpaperBackground} style={globalStyles.popupImage} resizeMode={'cover'}>
            <View style={styles.popup}>
                <NormalText text={'Check din Mail'} fontWeight={'bold'} fontSize={20}/>
                <NormalText text={'Vi har sendt en mail til dig med et link til gendannelse af dit kodeord.'} fontWeight={'normal'} fontSize={15}/>
                <ActionButton onPress={LoginScreen} title={'Ok'}
                              backgroundColor={'#5C6855'} textColor={'#ffffff'}
                              height={50} width={250}/>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    popup: {
        padding: 20,
        borderRadius: 10,
        borderColor: 'black',
        borderStyle: 'solid',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Popup;
