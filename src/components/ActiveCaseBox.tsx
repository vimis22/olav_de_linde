import React from 'react';
import {TouchableOpacity, Text, Image, StyleSheet, View} from 'react-native';
interface ActiveCaseBoxProps{
  onPress: () => void;
  title1: string;
  title2: string;
  backgroundColor: string;
  textContainerBackgroundColor1?: string;
  textContainerBackgroundColor2?: string;
  textColor1?: string;
  textColor2?: string;
  textSize1: number;
  textSize2: number;
  caseContainerHeight?: any;
  caseContainerWidth?: any;
  caseContainerBorderRadius?: any;
  caseContainerBorderRadius1?: any;
  caseContainerBorderRadius2?: any;
  textContainerHeight1?: any;
  textContainerWidth1?: any;
  textContainerBorderColor1?: any
  textContainerHeight2?: any;
  textContainerWidth2?: any;
  textContainerBorderRadius1?: any;
  textContainerBorderRadius2?: any;
  textContainerBorderColor2?: any
  step: number;
  icon1: any;
  icon2: any;
  icon3: any;
  icon4: any;
  progressWidth?: number;
  progressHeight?: number;
  progressColor?: string;
  progressBackgroundColor?: string;

};

const ActiveCaseBox: React.FC<ActiveCaseBoxProps> = ({onPress, title1, title2, backgroundColor = '#ffec00', textColor1 = '#000000', textColor2 = '#000000', textSize1 = 20, textSize2 = 20,
                                           caseContainerHeight = 250, caseContainerBorderRadius, caseContainerWidth = 150, caseContainerBorderRadius1 = 10, caseContainerBorderRadius2 = 10, textContainerBackgroundColor1 = '#ffffff', textContainerBackgroundColor2 = '#ffffff',
                                           textContainerHeight1 = 50, textContainerWidth1 = '100%', textContainerBorderColor1 = '#ffec00', textContainerHeight2 = 50, textContainerWidth2 = '100%', textContainerBorderColor2 = '#ffec00',
                                                     step, icon1, icon2, icon3, icon4, progressWidth = 350, progressHeight = 40, progressColor = '#5C68555', progressBackgroundColor = '#E0E0E0'}) => {
  const totalSteps = 4;
  const progressValue = step / totalSteps;
  const iconHeight = progressHeight - 10;
  return (
    <TouchableOpacity style={[styles.caseContainer, { backgroundColor, height: caseContainerHeight, width: caseContainerWidth, borderRadius: caseContainerBorderRadius }]} onPress={onPress}>
      <View style={[ styles.textContainer, {height: textContainerHeight1, width: textContainerWidth1, backgroundColor: textContainerBackgroundColor1, borderRadius: caseContainerBorderRadius1, borderColor: textContainerBorderColor1}]}>
        <Text style={[styles.caseText, {color: textColor1, fontSize: textSize1}]}>{title1}</Text>
      </View>
      <View style={[ styles.textContainer, {height: textContainerHeight2, width: textContainerWidth2, backgroundColor: textContainerBackgroundColor2, borderRadius: caseContainerBorderRadius2, borderColor: textContainerBorderColor2}]}>
        <Text style={[styles.caseText, {color: textColor2, fontSize: textSize2}]}>{title2}</Text>
      </View>
      <View style={[styles.generalProgressContainer, {width: progressWidth, height: progressHeight}]}>
        <View style={[styles.statusbar, {backgroundColor: progressBackgroundColor, height: progressHeight}]}/>
        <View style={[styles.progressContainer, {backgroundColor: progressColor, width: progressWidth * progressValue, height: progressHeight}]}/>

        <View style={[styles.iconContainer, {width: progressWidth}]}>
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
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  caseContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  imageContainer: {
    overflow: 'hidden',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  caseText: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
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
export default ActiveCaseBox;
