import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import * as Progress from 'react-native-progress';
import GlobalStyles, {houseIcon, lockIcon, userIcon} from '../Styling/GlobalStyles.tsx';
/*
@link https://github.com/oblador/react-native-progress/blob/master/Example/App.tsx
@link https://www.npmjs.com/package/react-native-progress
 */

interface ProgressIndicatorProps{
    step: number;
}
const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({step}: {step: number; selectedStep?: number}) => {
    const totalSteps = 3;
    const progressValue = step / totalSteps;

    return(
        <View style={styles.container}>
            <Progress.Bar style={styles.statusbar}
                progress={progressValue}
                          height={20}
                          width={450}
                          color={'#5C6855'}
                          borderRadius={10}
            />
            <View style={styles.progressContainer}>
                <Image source={houseIcon} style={[styles.iconSize, {tintColor: step >= 1 ? '#000000' : '#CCCCCC'}]} />
                <Image source={userIcon} style={[styles.iconSize, {tintColor: step >= 2 ? '#000000' : '#CCCCCC'}]} />
                <Image source={lockIcon} style={[styles.iconSize, {tintColor: step >= 3 ? '#000000' : '#CCCCCC'}]} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        alignItems: 'center',
    },
    statusbar: {
        backgroundColor: '#ffffff',
    },
    progressContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 300,
        marginTop: 10,
    },
    iconSize: {
        height: 30,
        width: 30,
    },
});

export default ProgressIndicator;
