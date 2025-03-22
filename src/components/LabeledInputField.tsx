import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import NormalText from './NormalText.tsx';

interface LabeledInputFieldProps {
    label: string;
    labelColor?: string;
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    textColor?: string;
    backgroundColor?: string;
    secureTextEntry?: boolean;
    height?: number;
    width?: number;
}

const LabeledInputField: React.FC<LabeledInputFieldProps> = ({
label, labelColor = '#ffffff', placeholder, value, onChangeText,
textColor = '#000000', backgroundColor = '#ffffff', secureTextEntry = false,
height = 20, width = 250,
}) => {
    return (
        <View style={styles.container}>
            <NormalText text={label} textColor={labelColor} />
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                style={[styles.inputField,
                    {color: textColor, backgroundColor, height, width},
                ]}
            />
        </View>
    );
};

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

export default LabeledInputField;
