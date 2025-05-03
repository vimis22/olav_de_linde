import React from 'react';
import {TouchableOpacity, Text, Image, View, ImageSourcePropType} from 'react-native';
import GlobalStyles from '../Styling/GlobalStyles.tsx';

interface OptionButtonProps{
    onPress: () => void;
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
}
const OptionButton: React.FC<OptionButtonProps> = ({onPress, title, backgroundColor = '#ffec00', textColor = '#000000', height = 60, width = '100%',
                                                       fieldIconSize = 40, fontSize, fieldIconBackground = '#4CAF50', fieldIcon, tickMarkIcon = false,
                                                     borderRadius, borderWidth, borderColor, highlight = false, highlightOnPress = false, highlightColor = '#FFEE99' , highlightTextColor = '#222222'}) => {
  const [isHighlighted, setIsHighlighted] = React.useState(false);
  const highlightPress = () => {
    if (highlightOnPress) {
      setIsHighlighted(prev => !prev);
    }
    onPress();
  };

  const currentTextColor = highlight || isHighlighted ? highlightTextColor : textColor;

  return (
        <TouchableOpacity style={[GlobalStyles.circleContainer, { backgroundColor: highlight || isHighlighted ? highlightColor : backgroundColor,
          height, width, borderRadius, borderWidth, borderColor }]} onPress={highlightPress}>
            {tickMarkIcon && (
                <View style={[GlobalStyles.iconCircle, {width: fieldIconSize, height: fieldIconSize,
                    borderRadius: fieldIconSize / 2, backgroundColor: fieldIconBackground,
                }]}>
                  {tickMarkIcon && (
                    <Image source={fieldIcon} style={GlobalStyles.icon} resizeMode={'contain'} />
                  )}
                </View>
            )}
            <Text style={[GlobalStyles.textInput, { color: currentTextColor, fontSize: fontSize }]}>{title}</Text>
        </TouchableOpacity>
    );
};

export default OptionButton;
