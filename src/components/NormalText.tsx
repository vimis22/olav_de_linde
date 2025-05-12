import React from 'react';
import {StyleSheet, View, Text, TextStyle} from 'react-native';

interface NormalTextProps {
    text: string;
    textColor?: string;
    fontSize?: number;
    fontWeight?: TextStyle['fontWeight'];
    backgroundColor?: string;
    borderRadius?: any;
    marginTop?: any;
    marginBottom?: any;
    marginLeft?: any;
    marginRight?: any;
}

const NormalText: React.FC<NormalTextProps> = ({text, backgroundColor, textColor = '#000000', borderRadius, fontSize = 10, fontWeight = 'normal', marginTop, marginBottom, marginLeft, marginRight}) => {
    return (
        <View style={[{backgroundColor, borderRadius, marginTop, marginBottom, marginLeft, marginRight}]}>
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
