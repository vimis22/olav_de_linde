import React from 'react';
import {TouchableOpacity, Text, Image, View, ImageSourcePropType} from 'react-native';
import GlobalStyles from '../Styling/GlobalStyles.tsx';

interface OptionButtonProps{
    onPress: () => void;
    title: string;
    backgroundColor: string;
    textColor?: string;
    height?: number;
    width?: number;
    fontSize?: number;
    fieldIconSize?: number;
    fieldIconBackground?: string;
    fieldIcon: ImageSourcePropType;
    tickMarkIcon: boolean;
}

const OptionButton: React.FC<OptionButtonProps> = ({onPress, title, backgroundColor = '#ffec00', textColor = '#000000', height = 60, width,
                                                       fieldIconSize = 40, fontSize, fieldIconBackground = '#4CAF50', fieldIcon, tickMarkIcon = false}) => {
    return (
        <TouchableOpacity style={[GlobalStyles.circleContainer, { backgroundColor, height, width }]} onPress={onPress}>
            {tickMarkIcon && (
                <View style={[GlobalStyles.iconCircle, {width: fieldIconSize, height: fieldIconSize,
                    borderRadius: fieldIconSize / 2, backgroundColor: fieldIconBackground,
                }]}>
                    <Image source={fieldIcon} style={GlobalStyles.icon} resizeMode={'contain'} />
                </View>
            )}
            <Text style={[GlobalStyles.textInput, { color: textColor, fontSize: fontSize }]}>{title}</Text>
        </TouchableOpacity>
    );
};

export default OptionButton;
