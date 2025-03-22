import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

interface InputFieldAreaProps{
    textColor?: string;
    backgroundColor?: string;
    secureTextEntry?: boolean;
    height?: number;
    width?: number;
    placeholder?: string;
    value: string;
    onChangeText: (text: string) => void;
}

const InputFieldArea: React.FC<InputFieldAreaProps> = ({
    textColor = '#000000', backgroundColor = '#ffffff',
    secureTextEntry = false, height = 20, width = 250,
    placeholder, value, onChangeText,
}) => {
    return (
        <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            style={[styles.inputField,
                {color: textColor, backgroundColor, height, width},
            ]}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    inputField: {
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        fontSize: 16,
    },
});

export default InputFieldArea;
