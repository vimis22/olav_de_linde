import React, {useCallback, useEffect, useState} from 'react';
import firestore, {where, query, orderBy, onSnapshot, serverTimestamp} from '@react-native-firebase/firestore';
import {FlatList, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import {Platform, View} from 'react-native';

interface Message{
  id: string;
}

interface ChatScreenProps{
  room: string;
}

/*
@link https://www.youtube.com/watch?v=0gLr-pBIPhI&t=2179s
@link https://github.com/machadop1407/react-firebase-chat-app/blob/main/src/components/Chat.js
 */

const ChatScreen: React.FC<ChatScreenProps> = ({room}) => {
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesReference = firestore().collection('MessageEmployee');


  useEffect(() => {
    const currentUser = auth().currentUser;
    if (!room || !currentUser) {
      setMessages([]);
      return;
    }
    const queryMessages = query(
        messagesReference,
        where('room', '==', room),
        orderBy('createdAt','asc')
    );
    const unsubscribe = onSnapshot(queryMessages, snapshot => {
      const fetchedMessages: Message[] = [];
      snapshot.forEach((doc) => {
        fetchedMessages.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setMessages(prevMessages => {
        const prevMessagesStr = JSON.stringify(prevMessages);
        const fetchedMessagesStr = JSON.stringify(fetchedMessages);
        if (prevMessagesStr === fetchedMessagesStr) {
          return prevMessages;
        }
        return fetchedMessages;
      });
    });


    return () => unsubscribe();
  }, [room, messagesReference]);


  const handleSubmit = useCallback(async () => {
    const currentUser = auth().currentUser;
    if (!newMessage.trim() || !currentUser || !room) {
      return;
    }
    await messagesReference.add({
      message: newMessage,
      createdAt: serverTimestamp(),
      sender: currentUser.uid,
      room,
    });
    setNewMessage('');
  }, [newMessage, messagesReference, room]);

  const renderItem = useCallback(({item}: {item: Message}) => (
      <View>
        <Text style={styles.user}>{item.id}</Text>
      </View>
      ),
    [],
  );

  return (
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Textnpm</Text>
        </View>
        <FlatList data={messages} keyExtractor={item => item.id} renderItem={renderItem} contentContainerStyle={styles.messages} />
        <View style={styles.newMessageForm}>
          <TextInput style={styles.newMessageInput} placeholder={'Skriv din besked her'} value={newMessage} onChangeText={setNewMessage} onSubmitEditing={handleSubmit}/>
          <TouchableOpacity style={styles.sendButton} onPress={handleSubmit}>
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 16,
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#ccc',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  messages: {
    padding: 16,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#ccc',
  },
  newMessageForm: {
    flex: 1,
    height: 40,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  newMessageInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  sendButton: {
    marginLeft: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    backgroundColor: '#007aff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  user: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default ChatScreen;
