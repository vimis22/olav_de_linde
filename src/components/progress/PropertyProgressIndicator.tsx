import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
/**
 * This is a PropertyProgressIndicator component, which shows the progress of Property in Property-Filing Process.
 * @PropertyProgressIndicatorProps - defines the properties of the component.
 * @PropertyProgressIndicator - Is the component, that recieves props as parameters and returns a styled box.
 * @link https://github.com/oblador/react-native-progress/blob/master/Example/App.tsx
 * @link https://www.npmjs.com/package/react-native-progress
 */
interface ProgressIndicatorProps {
  step: number;
  icon1: any;
  icon2: any;
  icon3: any;
  icon4: any;
  width?: number;
  height?: number;
  progressColor?: string;
  backgroundColor?: string;
}
const PropertyProgressIndicator: React.FC<ProgressIndicatorProps> = ({step, icon1, icon2, icon3, icon4, width=350, height=40, progressColor = '#5C68555', backgroundColor = '#E0E0E0'}) => {
  const totalSteps = 4;
  const progressValue = step / totalSteps;
  const iconHeight = height - 10;

  return(
    <View style={[styles.generalProgressContainer, {width: width, height: height}]}>
      <View style={[styles.statusbar, {backgroundColor, height: height}]}/>

      <View style={[styles.progressContainer, {backgroundColor: progressColor, width: width * progressValue, height: height}]}/>

      <View style={[styles.iconContainer, {width}]}>
        <View style={[styles.iconCaptivity, {left: "5%"}]}>
          <Image source={icon1} style={[styles.icon, {width: iconHeight, height: iconHeight}, step >= 1 && styles.activeIcon]}/>
        </View>
        <View style={[styles.iconCaptivity, {left: "30%"}]}>
          <Image source={icon2} style={[styles.icon, {width: iconHeight, height: iconHeight}, step >= 1 && styles.activeIcon]}/>
        </View>
        <View style={[styles.iconCaptivity, {left: "60%"}]}>
          <Image source={icon3} style={[styles.icon, {width: iconHeight, height: iconHeight}, step >= 1 && styles.activeIcon]}/>
        </View>
        <View style={[styles.iconCaptivity, {left: "85%"}]}>
          <Image source={icon4} style={[styles.icon, {width: iconHeight, height: iconHeight}, step >= 1 && styles.activeIcon]}/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  generalProgressContainer: {
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

export default PropertyProgressIndicator;
