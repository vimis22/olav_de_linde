import React, {useEffect, useRef} from 'react';
import {Animated, Easing, ViewStyle} from 'react-native';
/**
 * This is a RotationsLoading component, which has been used for experiments regarding the SplashScreen.
 *     The inspiration for this code has been taken from the link, standing below in @link.
 * @RotationsLoadingProps - defines the properties of the box.
 * @RotationsLoading - Is the component, that recieves props as parameters and returns a styled box.
 * @link https://reactnative.dev/docs/animated
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
