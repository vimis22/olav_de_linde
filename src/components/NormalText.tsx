import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

interface NormalTextProps {
    text: string;
    textColor?: string;
    fontSize?: number;
}

const NormalText: React.FC<NormalTextProps> = ({text, textColor = '#000000', fontSize = 10}) => {
    return (
        <View>
            <Text style={[styles.text, {color: textColor, fontSize: fontSize}]}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        padding: 20,
    },
});

export default NormalText;
