import {View} from 'react-native';
import NormalText from '../../components/textual/NormalText.tsx';
import ActionButton from '../../components/buttons/ActionButton.tsx';
import globalStyles from '../../styling/GlobalStyles.tsx';
import LoginScreen from '../authentication_area/login/LoginScreen.tsx';


/*
@link https://blog.logrocket.com/creating-a-pop-up-modal-in-react-native/
*/
const Popup = ({navigation}:any) => {
    return (
        <View style={globalStyles.popupContainer}>
            <NormalText text={'Popup'} fontSize={18} fontWeight={'bold'}/>
            <NormalText text={'Vi har sendt en mail til dig med et link til gendannelse af dit kodeord.'} />
            <ActionButton onPress={()=>navigation.navigate(LoginScreen)} title={'Ok'} backgroundColor={'#5C6855'} textColor={'#ffffff'} height={50}/>
        </View>
    );
};




export default Popup;
