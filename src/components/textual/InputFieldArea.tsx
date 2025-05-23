import React, {useState} from 'react';
import {
  Image,
  ImageSourcePropType,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import GlobalStyles from '../../styling/GlobalStyles.tsx';

interface InputFieldAreaProps {
  value?: any;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  fieldIconBackground?: string;
  whenPassword: boolean;
  fieldIcon: ImageSourcePropType;
  displayIcon?: ImageSourcePropType;
  hideIcon?: ImageSourcePropType;
  passwordBackgroundColor?: string;
  containerHeight?: any;
  containerWidth?: any;
  containerRadius?: number;
  marginLeft?: any;
  marginRight?: any;
  marginTop?: any;
  marginBottom?: any;
  fieldIconSize?: number;
  backgroundColor?: string;
  textColor?: string;
  onSubmitEditing?: () => void;
  returnKeyType?: 'next' | 'done' | 'go' | 'search' | 'send' | 'none';
  blurOnSubmit?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  autoCorrect?: boolean;
  autoFocus?: boolean;
  contextMenuHidden?: boolean;
  editable?: boolean;
  enablesReturnKeyAutomatically?: boolean;
  keyboardAppearance?: 'default' | 'light' | 'dark';
}

const InputFieldArea: React.FC<InputFieldAreaProps> = ({value, onChangeText, placeholder = 'TEXT', fieldIcon, fieldIconBackground = '#5C6855', whenPassword = false,
  displayIcon, hideIcon, passwordBackgroundColor = '#000000', containerHeight = 60, containerWidth, containerRadius = 30, fieldIconSize = 40, backgroundColor = '#ffffff', textColor = '#000000', marginTop, marginRight, marginLeft, marginBottom, onSubmitEditing, returnKeyType, blurOnSubmit, autoCapitalize, autoCorrect, autoFocus, contextMenuHidden, editable, enablesReturnKeyAutomatically, keyboardAppearance}) => {
  const [whenPasswordIsVisible, setWhenPasswordIsVisible] = useState(false);

  const makePasswordVisible = () => {
    setWhenPasswordIsVisible(prev => !prev);
  };

  return (
    <View style={[GlobalStyles.circleContainer, {height: containerHeight, width: containerWidth, borderRadius: containerRadius, backgroundColor, marginLeft: marginLeft, marginRight: marginRight, marginTop: marginTop, marginBottom: marginBottom}]}>
      <View style={[GlobalStyles.iconCircle, {width: fieldIconSize, height: fieldIconSize, borderRadius: fieldIconSize / 2, backgroundColor: fieldIconBackground}]}>
        <Image source={fieldIcon} style={GlobalStyles.icon} resizeMode={'contain'} />
      </View>
      <TextInput value={value} onChangeText={onChangeText} placeholder={placeholder} style={[GlobalStyles.textInput, {color: textColor}]} secureTextEntry={whenPassword && !whenPasswordIsVisible} onSubmitEditing={onSubmitEditing} returnKeyType={returnKeyType} blurOnSubmit={blurOnSubmit}
      autoCapitalize={autoCapitalize} autoCorrect={autoCorrect} autoFocus={autoFocus} contextMenuHidden={contextMenuHidden} editable={editable} enablesReturnKeyAutomatically={enablesReturnKeyAutomatically} keyboardAppearance={keyboardAppearance}/>
      {whenPassword ? (
        <TouchableOpacity onPress={makePasswordVisible} style={[GlobalStyles.iconCircle, {width: fieldIconSize, height: fieldIconSize, borderRadius: fieldIconSize / 2, backgroundColor: passwordBackgroundColor}]}>
          <Image source={whenPasswordIsVisible ? hideIcon : displayIcon} style={GlobalStyles.icon} resizeMode={'contain'} />
        </TouchableOpacity>
      ) : (
        <View style={{width: fieldIconSize, height: fieldIconSize}} />
      )}
    </View>
  );
};
export default InputFieldArea;
