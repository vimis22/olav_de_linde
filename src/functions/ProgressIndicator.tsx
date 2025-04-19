import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
/*
@link https://github.com/oblador/react-native-progress/blob/master/Example/App.tsx
@link https://www.npmjs.com/package/react-native-progress
 */

interface ProgressIndicatorProps{
    step: number;
    icon1: any;
    icon2: any;
    icon3: any;
    width?: number;
    height?: number;
    progressColor?: string;
    backgroundColor?: string;
}
const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({step, icon1, icon2, icon3, width=350, height=40, progressColor = '#5C68555', backgroundColor = '#E0E0E0'}) => {
    const totalSteps = 3;
    const progressValue = step / totalSteps;
    const iconHeight = height - 10;

    return(
          <View style={[styles.container, {width: width, height: height}]}>
          <View style={[styles.statusbar, {backgroundColor, height: height}]}/>

          <View style={[styles.progressContainer, {backgroundColor: progressColor, width: width * progressValue, height: height}]}/>

          <View style={[styles.iconContainer, {width}]}>
            <View style={[styles.iconCaptivity, {left: "10%"}]}>
              <Image source={icon1} style={[styles.icon, {width: iconHeight, height: iconHeight}, step >= 1 && styles.activeIcon]}/>
            </View>
            <View style={[styles.iconCaptivity, {left: "45%"}]}>
              <Image source={icon2} style={[styles.icon, {width: iconHeight, height: iconHeight}, step >= 1 && styles.activeIcon]}/>
            </View>
            <View style={[styles.iconCaptivity, {left: "80%"}]}>
              <Image source={icon3} style={[styles.icon, {width: iconHeight, height: iconHeight}, step >= 1 && styles.activeIcon]}/>
            </View>
          </View>
          {/*</View>*/}
          {/*  <Progress.Bar style={styles.statusbar}*/}
          {/*      progress={progressValue}*/}
          {/*                height={20}*/}
          {/*                width={450}*/}
          {/*                color={'#5C6855'}*/}
          {/*                borderRadius={10}*/}
          {/*  />*/}
          {/*  <View style={styles.progressContainer}>*/}
          {/*      <Image source={houseIcon} style={[styles.iconContainer, {tintColor: step >= 1 ? '#000000' : '#CCCCCC'}]} />*/}
          {/*      <Image source={userIcon} style={[styles.iconContainer, {tintColor: step >= 2 ? '#000000' : '#CCCCCC'}]} />*/}
          {/*      <Image source={lockIcon} style={[styles.iconContainer, {tintColor: step >= 3 ? '#000000' : '#CCCCCC'}]} />*/}
          {/*  </View>*/}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      position: 'relative',
      alignItems: 'center',
    },
    statusbar: {
      position: 'absolute',
      width: '100%',
      borderRadius: 10,
    },
    progressContainer: {
      position: 'absolute',
      borderRadius: 10,
      left: 0,
    },
    iconContainer: {
      position: 'absolute',
      height: '100%',
      flexDirection: 'row',
      alignItems: 'center',
    },
    iconCaptivity: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      tintColor: '#FFFFFFF',
      opacity: 0.5,
    },
    activeIcon: {
      opacity: 1,
      tintColor: '#ffffff',
    },
});

export default ProgressIndicator;
