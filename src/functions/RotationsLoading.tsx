import React, {useEffect, useRef} from 'react';
import {Animated} from 'react-native';

const Loading = () => {
    const loadSpinValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.timing(loadSpinValue, {
                toValue: 1,
                duration: 2000,
                useNativeDriver: true,
            })
        ).start();
    }, [loadSpinValue]);

    const rotate = loadSpinValue.interpolate({
        inputRange: [0,1];
        outputRange: ['0deg','360deg'],
    });
};

export default Loading();
