import React from 'react';
import {View,  StyleSheet} from 'react-native';
import {imageIcon, penIcon, userIcon} from '../../../styling/GlobalStyles.tsx';
import InputFieldArea from '../../../components/InputFieldArea.tsx';
import OptionButton from '../../../components/OptionButton.tsx';

const ExperimentalChat = () => {
  const [message, setMessage] = React.useState('');

  return (
    <View>
      <View style={styles.messageListField} />
      <View style={styles.inputContainer}>
        <OptionButton fieldIcon={imageIcon} fieldIconBackground={'#5C6855'} tickMarkIcon={userIcon} fieldIconSize={28} backgroundColor={'transparent'} textColor={'#000000'} borderRadius={'10%'} height={'75%'} width={'12%'} />
        <InputFieldArea fieldIcon={penIcon} fieldIconSize={28} backgroundColor={'#ffffff'} textColor={'#000000'} placeholder={'Password'}
                        value={message} onChangeText={setMessage} containerHeight={'75%'} containerWidth={'78%'} containerRadius={5}
                        marginLeft={'8%'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#D8D8CE',
    borderTopWidth: 1,
  },
  messageListField: {
    height: '93%',
    backgroundColor: '#D8D8CE',
  },
});
export default ExperimentalChat;
