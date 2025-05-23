import React from 'react';
import {TouchableOpacity, Text, Image, View, ImageSourcePropType} from 'react-native';
import GlobalStyles from '../../styling/GlobalStyles.tsx';

interface OptionButtonProps{
    value?: any;
    onPress: (value?: any) => void;
    title: string;
    backgroundColor: string;
    textColor?: string;
    height?: any;
    width?: any;
    fontSize?: number;
    borderRadius?: number;
    borderColor?: string;
    borderWidth?: number;
    fieldIconSize?: number;
    fieldIconBackground?: string;
    fieldIcon: ImageSourcePropType;
    tickMarkIcon: boolean;
    highlight?: boolean;
    highlightOnPress?: boolean;
    highlightColor?: string;
    highlightTextColor?: string;
    selected?: boolean;
}

const OptionButton: React.FC<OptionButtonProps> = ({value, onPress, title, backgroundColor = '#ffec00', textColor = '#000000', height = 60, width = '100%',
                                                       fieldIconSize = 40, fontSize, fieldIconBackground = '#4CAF50', fieldIcon, tickMarkIcon = false,
                                                     borderRadius, borderWidth, borderColor, highlight = false, highlightOnPress = false, highlightColor = '#FFEE99' , highlightTextColor = '#222222', selected}) => {
  const [isHighlighted, setIsHighlighted] = React.useState(false);
  const highlightPress = () => {
    if (highlightOnPress) {
      setIsHighlighted(prev => !prev);
    }
    onPress(value);
  };

  const currentTextColor = highlight || isHighlighted ? highlightTextColor : textColor;
  const currentBackgroundColor = highlight || isHighlighted ? highlightColor : backgroundColor;
  return (
        <TouchableOpacity style={[GlobalStyles.circleContainer, { backgroundColor: currentBackgroundColor,
          height, width, borderRadius, borderWidth, borderColor }]} onPress={highlightPress}>
          <View style={[GlobalStyles.iconCircle, {width: fieldIconSize, height: fieldIconSize,
            borderRadius: fieldIconSize / 2, backgroundColor: tickMarkIcon ? fieldIconBackground : '#D3D3D3',
          }]}>
            {tickMarkIcon && (
              <Image source={fieldIcon} style={GlobalStyles.icon} resizeMode={'contain'} />
            )}
          </View>
            <Text style={[GlobalStyles.textInput, selected && { color: currentTextColor, fontSize: fontSize }]}>{title}</Text>
        </TouchableOpacity>
    );
};

export default OptionButton;
