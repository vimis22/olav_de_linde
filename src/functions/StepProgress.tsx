import React, { useState } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';

/*
@link https://medium.com/@senalisa/creating-a-customizable-multi-step-progress-component-in-react-native-1678f4a0ae45
 */
const StepProgress = ({navigation}: any) => {
    const [step, setStep] = useState(1);
    const totalSteps = 3;

    const handleNext = () => {
        setStep(prevStep => Math.min(prevStep + 1, totalSteps));
    };

    const handlePrevious = () => {
        setStep(prevStep => Math.max(prevStep - 1, 1));
    };

    const renderStepIndicator = () => {
        const indicators = [];
        for (let i = 1; i <= totalSteps; i++) {
            indicators.push(
                <View key={i} style={styles.stepContainer}>
                    <View style={[styles.stepIndicator, i <= step && styles.activeStep]}>
                        <Text style={[styles.stepText, i <= step && styles.activeStepText]}>{i}</Text>
                    </View>
                    {i < totalSteps && <View style={[styles.line, i < step && styles.activeLine]} />}
                </View>
            );
        }
        return <View style={styles.indicatorContainer}>{indicators}</View>;
    };

    return (
        <View style={styles.container}>
            {renderStepIndicator()}

            <View style={styles.contentContainer}>
                {step === 1 && <Text>Content for Step 1</Text>}
                {step === 2 && <Text>Content for Step 2</Text>}
                {step === 3 && <Text>Content for Step 3</Text>}
            </View>

            <View style={styles.buttonContainer}>
                {step > 1 && (
                    <TouchableOpacity onPress={handlePrevious} style={[styles.button, styles.backButton]}>
                        <Text style={styles.backButtonText}>Back</Text>
                    </TouchableOpacity>
                )}
                {step < totalSteps ? (
                    <TouchableOpacity onPress={handleNext} style={[styles.button, styles.nextButton]}>
                        <Text style={styles.nextButtonText}>Next</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity onPress={() => Alert.alert('Done!')} style={[styles.button, styles.nextButton]}>
                        <Text style={styles.nextButtonText}>Done</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 100,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    indicatorContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    stepContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    stepIndicator: {
        width: 35,
        height: 35,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#E7E7E7',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 500,
    },
    activeStep: {
        borderColor: 'pink',
        backgroundColor: 'pink',
    },
    stepText: {
        color: '#E7E7E7',
        fontWeight: 'bold',
        fontSize: 16,
    },
    activeStepText: {
        color: 'white',
    },
    line: {
        width: 20,
        height: 2,
        backgroundColor: '#E7E7E7',
        marginHorizontal: 10,
    },
    activeLine: {
        backgroundColor: 'pink',
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    backButton: {
        backgroundColor: '#E7E7E7',
        marginRight: 10,
    },
    backButtonText: {
        color: 'gray',
        fontWeight: 'bold',
    },
    nextButton: {
        backgroundColor: 'pink',
    },
    nextButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default StepProgress;
