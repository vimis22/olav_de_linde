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
        const enableRotation = () => {
            Animated.sequence([
                Animated.timing(loadSpinValue, {
                    toValue: 1,
                    easing: Easing.linear,
                    duration: 2000,
                    useNativeDriver: true,
                }),
                Animated.timing(loadSpinValue, {
                    toValue: 0,
                    easing: Easing.linear,
                    duration: 2000,
                    useNativeDriver: true,
                })
            ]).start(() => {
                whenFinished();
                enableRotation();
            });
        };
        enableRotation();
    }, [loadSpinValue, duration, whenFinished]);


    //     Animated.timing(loadSpinValue, {
    //         toValue: 1,
    //         easing: Easing.linear,
    //         duration: 2000,
    //         useNativeDriver: true,
    //     }),
    //     Animated.timing(loadSpinValue, {
    //         toValue: 0,
    //         easing: Easing.linear,
    //         duration: 2000,
    //         useNativeDriver: true,
    //     }).start(() => {
    //         if (whenFinished) {
    //             whenFinished();
    //         }
    //     });
    // }, [loadSpinValue, duration, whenFinished]);

    const rotationBoundaries = loadSpinValue.interpolate({
        inputRange: [0,0.5,1],
        outputRange: ['0deg','180deg','360deg'],
    });

    const boundaryDirection = {
        transform: [{rotate: rotationBoundaries}],
    };

    return (
        <Animated.View style={[boundaryDirection,style]}>
            {children}
        </Animated.View>
    );
};

export default RotationsLoading;
