import React, {useEffect, useRef} from 'react';
import {Animated, ViewStyle} from 'react-native';

interface RotationsLoadingProps{
    children: React.ReactNode;
    duration?: number;
    style?: ViewStyle;
};

const RotationsLoading: React.FC<RotationsLoadingProps> = ({children, duration = 2000, style}) => {
    const loadSpinValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.timing(loadSpinValue, {
                toValue: 1,
                duration: 2000,
                useNativeDriver: true,
            })
        ).start();
    }, [loadSpinValue, duration]);

    const rotate = loadSpinValue.interpolate({
        inputRange: [0,1],
        outputRange: ['0deg','360deg'],
    });

    return (
        <Animated.View style={[style, {transform: [{rotate}]}]}>
            {children}
        </Animated.View>
    );
};

export default RotationsLoading;
