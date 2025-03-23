import React from 'react';
import {StyleSheet, View, Text, TextStyle} from 'react-native';

interface NormalTextProps {
    text: string;
    textColor?: string;
    fontSize?: number;
    fontWeight?: TextStyle['fontWeight'];
}

const NormalText: React.FC<NormalTextProps> = ({text, textColor = '#000000', fontSize = 10, fontWeight = 'normal'}) => {
    return (
        <View>
            <Text style={[styles.text, {color: textColor, fontSize: fontSize, fontWeight: fontWeight}]}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        padding: 20,
    },
});

export default NormalText;
