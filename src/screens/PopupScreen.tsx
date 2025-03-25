import React from 'react';
import {View} from 'react-native';
import NormalText from '../components/NormalText.tsx';
import ActionButton from '../components/ActionButton.tsx';
import LoginScreen from './LoginScreen.tsx';
import globalStyles from '../Styling/GlobalStyles.tsx';

/*
@link https://blog.logrocket.com/creating-a-pop-up-modal-in-react-native/
 */
const PopupScreen = ({navigation}:any) => {
    return (
        <View style={globalStyles.popupContainer}>
            <NormalText text={'Popup'} fontSize={18} fontWeight={'bold'}/>
            <NormalText text={'Vi har sendt en mail til dig med et link til gendannelse af dit kodeord.'} />
            <ActionButton onPress={()=>navigation.navigate(LoginScreen)} title={'Ok'} backgroundColor={'#5C6855'} textColor={'#ffffff'} height={50}/>
        </View>
    );
};


export default PopupScreen;
