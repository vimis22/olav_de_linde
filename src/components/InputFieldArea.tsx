import React, {useState} from 'react';
import {Image, ImageSourcePropType, TextInput, TouchableOpacity, View} from 'react-native';
import GlobalStyles from '../styling/GlobalStyles.tsx';


interface InputFieldAreaProps {
    value?: string;
    onChangeText?: (text: string) => void;
    placeholder?: string;
    fieldIconBackground?: string;
    whenPassword: boolean;
    fieldIcon: ImageSourcePropType;
    displayIcon?: ImageSourcePropType;
    hideIcon?: ImageSourcePropType;
    visiblePasswordIcon?: string;
    containerHeight?: number;
    containerRadius?: number;
    fieldIconSize?: number;
    backgroundColor?: string;
    textColor?: string;
}

const InputFieldArea: React.FC<InputFieldAreaProps> = ({
    value, onChangeText, placeholder = 'TEXT', fieldIcon, fieldIconBackground = '#5C6855', whenPassword = false,
    displayIcon, hideIcon, visiblePasswordIcon = '#000000', containerHeight = 60, containerRadius = 30,
    fieldIconSize = 40, backgroundColor  = '#ffffff', textColor = '#000000'}) => {
    const [whenPasswordIsVisible, setWhenPasswordIsVisible] = useState(false);

    const makePasswordVisible = () => {
        setWhenPasswordIsVisible(prev => !prev);
    };

    return(
        <View style={[GlobalStyles.circleContainer, {height: containerHeight, borderRadius: containerRadius, backgroundColor}]}>
            <View style={[GlobalStyles.iconCircle, {width: fieldIconSize, height: fieldIconSize,
                borderRadius: fieldIconSize / 2, backgroundColor: fieldIconBackground,
            }]}>
                <Image source={fieldIcon} style={GlobalStyles.icon} resizeMode={'contain'} />
            </View>
            <TextInput value={value} onChangeText={onChangeText} placeholder={placeholder} style={[GlobalStyles.textInput, {color: textColor}]} secureTextEntry={whenPassword && !whenPasswordIsVisible} />
            {whenPassword ? (
                <TouchableOpacity onPress={makePasswordVisible} style={[GlobalStyles.iconCircle, {width: fieldIconSize, height: fieldIconSize,
                    borderRadius: fieldIconSize / 2, backgroundColor: visiblePasswordIcon}]}>
                    <Image source={whenPassword ? hideIcon! : displayIcon!} style={GlobalStyles.icon} resizeMode={"contain"}/>
                    <View style={{width: fieldIconSize, height: fieldIconSize}} />
                </TouchableOpacity>
            ) : (
                <View style={{width: fieldIconSize, height: fieldIconSize}} />
            )}
        </View>
    );
};
export default InputFieldArea;
