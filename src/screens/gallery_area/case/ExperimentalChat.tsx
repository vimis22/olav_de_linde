import {View, FlatList, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';
import ImageManager from '../../../functions/manager_services/ImageManager.tsx';
import NormalText from '../../../components/textual/NormalText.tsx';
import OptionButton from '../../../components/buttons/OptionButton.tsx';
import {imageIcon, penIcon, userIcon} from '../../../styling/GlobalStyles.tsx';
import InputFieldArea from '../../../components/textual/InputFieldArea.tsx';

const mockMessages = [
  {id: '1', sender: 'Vivek Misra', content: 'Message 1', reciever: 'Henrik'},
  {id: '2', sender: 'Henrik Stærkær', content: 'Message 2', reciever: 'Vivek'},
];


const ExperimentalChat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState(mockMessages);

  const attachProvider = ImageManager({
    onImageSelected: (imageUri) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: Date.now().toString(),
          sender: 'Vivek',
          content: '',
          reciever: 'Henrik',
          image: imageUri,
        },
      ]);
    },
  });
  const sendMessage = () => {
    if (message.trim()){
      setMessages([...messages,
        {id: '3',
          sender: 'Vivek',
          content: message,
          reciever: 'Henrik'}]);
      setMessage('');
    }
  };


  const renderMessageContainer = ({item}: any) => (
    <View style={styles.messageContainer}>
      <View style={styles.messageContent}>
        <NormalText text={item.sender} fontSize={16} textColor={'#000000'} fontWeight={'bold'}/>
        {item.content ? (
          <NormalText text={styles.messageText} text={item.content} borderRadius={50} backgroundColor={'#D8D8CE'} fontSize={16} textColor={'black'}/>

        ) : null}
        {item.image ? (
          <Image style={styles.messageImage}
                 source={{uri: item.image}}
                 resizeMode={'contain'}
          />
        ) : null}
      </View>
    </View>
  );
  return (
    <View style={styles.pageContainer}>
      <FlatList
        data={messages}
        renderItem={renderMessageContainer}
        keyExtractor={item => item.id}
        style={styles.messageListContainer}
      />
      <View style={styles.inputContainer}>
        <OptionButton fieldIcon={imageIcon} fieldIconBackground={'#5C6855'} tickMarkIcon={userIcon} fieldIconSize={28} backgroundColor={'transparent'} textColor={'#000000'} borderRadius={'10%'}
                      height={'75%'} width={'12%'} onPress={() => attachProvider.addImage()} />
        <InputFieldArea fieldIcon={penIcon} fieldIconSize={28} backgroundColor={'#ffffff'} textColor={'#000000'} placeholder={'Skriv....'}
                        value={message} onChangeText={(text) => setMessage(text)} containerHeight={'75%'} containerWidth={'78%'} containerRadius={50}
                        marginLeft={'8%'} returnKeyType={'send'} onSubmitEditing={sendMessage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  messageContent: {
    flex: 1,
  },
  messageTime: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white',
  },
  messageText: {
    marginBottom: 5,
    color: 'black',
    backgroundColor: '#e6e6e6',
    borderRadius: 5,
    padding: 10,
  },
  messageImage: {
    width: '100%',
    height: 200,
    marginBottom: 5,
    borderRadius: 5,
  },
  messagePersonInfo: {
    color: 'white',
    marginBottom: 15,
  },
  messageListContainer: {
    flex: 1,
    padding: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#D8D8CE',
    backgroundColor: '#D8D8CE',
  },
  inputFieldText: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
  },
  buttonContainer: {
    marginLeft: 10,
    backgroundColor: 'green',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  cameraButtonContainer: {
    marginRight: 10,
    backgroundColor: '#ffc700',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ExperimentalChat;
