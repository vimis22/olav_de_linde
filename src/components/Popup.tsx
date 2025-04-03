import {View} from 'react-native';
import NormalText from '../components/NormalText.tsx';
import ActionButton from '../components/ActionButton.tsx';
import globalStyles from '../Styling/GlobalStyles.tsx';
import LoginScreen from '../screens/LoginScreen.tsx';


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
