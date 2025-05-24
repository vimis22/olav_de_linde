import React from 'react';
import {Modal, Text, View, TouchableOpacity, StyleSheet} from 'react-native';

interface PopupScreenProps {
  title?: string;
  description?: string;
  backgroundColor?: string;
  titleColor?: string;
  descriptionColor?: string;
  height?: number | 'auto';
  width?: number;
  borderRadius?: number;
  optionText1?: string;
  optionText2?: string;
  onEnable?: () => void;
  onDisable?: () => void;
  optionTextColor1?: string;
  optionTextColor2?: string;
  optionTextBackgroundColor1?: string;
  optionTextBackgroundColor2?: string;
  optionTextBorderRadiusColor1?: string;
  optionTextBorderRadiusColor2?: string;
  optionTextBorderWidth1?: number;
  optionTextBorderWidth2?: number;
  optionText3?: string;
  onOption3?: () => void;
  optionTextColor3?: string;
  optionTextBackgroundColor3?: string;
  visible?: boolean;
  onRequestClose?: () => void;
  children?: React.ReactNode;
}

const PopupScreen: React.FC<PopupScreenProps> = ({title, description, backgroundColor = '#ffffff', titleColor = '#000000', descriptionColor = '#000000', height = 'auto', width = 300, borderRadius = 10,
  optionText1, optionText2, onEnable, onDisable, optionTextColor1 = '#000000', optionTextColor2 = '#000000', optionTextBackgroundColor1 = '#ffffff', optionTextBackgroundColor2 = '#ffffff',
  optionText3, onOption3, optionTextColor3 = '#000000', optionTextBackgroundColor3 = '#ffffff', optionTextBorderRadiusColor1 = '#ffffff', optionTextBorderRadiusColor2 = '#ffffff', optionTextBorderWidth1 = 1, optionTextBorderWidth2 = 1, visible = true, onRequestClose = () => {}, children}) => {
  return (
    <Modal visible={visible} animationType="fade" transparent={true} onRequestClose={onRequestClose}>
      <View style={[styles.modalOverlay, {backgroundColor: 'transparent'}]}>
        <View style={[styles.modalContent, {backgroundColor, height, width, borderRadius}]}>
          {title && (
            <Text style={[styles.title, {color: titleColor}]}>{title}</Text>
          )}
          {description && (
            <Text style={[styles.description, {color: descriptionColor}]}>
              {description}
            </Text>
          )}

          {children ? (
            children
          ) : (
            <View style={styles.optionContainer}>
              {optionText3 && onOption3 ? (
                <TouchableOpacity onPress={onOption3} style={[styles.button, {backgroundColor: optionTextBackgroundColor3}]}>
                  <Text style={[styles.buttonText, {color: optionTextColor3}]}>
                    {optionText3}
                  </Text>
                </TouchableOpacity>
              ) : (
                <View style={styles.optionContainer}>
                  {optionText1 && onEnable && (
                    <TouchableOpacity onPress={onEnable} style={[styles.button, {backgroundColor: optionTextBackgroundColor1, borderColor: optionTextBorderRadiusColor1, borderWidth: optionTextBorderWidth1}]}>
                      <Text style={[styles.buttonText, {color: optionTextColor1}]}>
                        {optionText1}
                      </Text>
                    </TouchableOpacity>
                  )}
                  {optionText2 && onDisable && (
                    <TouchableOpacity onPress={onDisable} style={[styles.button, {backgroundColor: optionTextBackgroundColor2, borderColor: optionTextBorderRadiusColor2, borderWidth: optionTextBorderWidth2}]}>
                      <Text
                        style={[styles.buttonText, {color: optionTextColor2}]}>
                        {optionText2}
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>
              )}
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    minWidth: 300,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    minWidth: 100,
    elevation: 2,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default PopupScreen;
