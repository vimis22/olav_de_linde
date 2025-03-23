import React, {useEffect, useRef} from 'react';
import {Animated, Easing, ViewStyle} from 'react-native';

/*
    @link https://reactnative.dev/docs/animated
    The inspiration for this code has been taken from the link, standing above.
 */
interface RotationsLoadingProps{
    children: React.ReactNode;
    duration?: number;
    style?: ViewStyle;
    whenFinished?: () => void;
};

const RotationsLoading: React.FC<RotationsLoadingProps> = ({children, duration = 30, style, whenFinished}) => {
    const loadSpinValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(loadSpinValue, {
            toValue: 1,
            easing: Easing.linear,
            duration: 2000,
            useNativeDriver: true,
        }).start(() => {
            if (whenFinished) {
                whenFinished();
            }
        });
    }, [loadSpinValue, duration, whenFinished]);

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
