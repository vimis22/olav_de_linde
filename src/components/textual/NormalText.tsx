import React from 'react';
import {StyleSheet, View, Text, TextStyle} from 'react-native';

/**
 * This is a NormalText component, and is mostly used as a normal text instead of <Text>
 * @NormalTextProps - defines the properties of the box.
 * @NormalText - Is the component, that recieves props as parameters and returns a styled box.
 */
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
