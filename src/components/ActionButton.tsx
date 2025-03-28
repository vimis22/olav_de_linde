import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import GlobalStyles from '../Styling/GlobalStyles.tsx';

interface ActionButtonProps{
    onPress: () => void;
    title: string;
    backgroundColor: string;
    textColor?: string;
    height?: number;
    width?: number;
}

const ActionButton: React.FC<ActionButtonProps> = ({onPress, title, backgroundColor = '#ffec00', textColor = '#000000', height = 250, width = 150}) => {
    return (
        <TouchableOpacity style={[GlobalStyles.button, { backgroundColor, height, width }]} onPress={onPress}>
            <Text style={[GlobalStyles.buttonText, { color: textColor }]}>{title}</Text>
        </TouchableOpacity>
    );
};

export default ActionButton;
