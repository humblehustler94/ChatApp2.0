// components/Chat.js

import { useState, useEffect } from 'react';
import { StyleSheet, View, KeyboardAvoidingView, Platform } from 'react-native';
// Import the Gifted Chat library
import { GiftedChat } from 'react-native-gifted-chat';

const Chat = ({ route, navigation }) => {
  // Extract name and color from the navigation route parameters
  const { name, color } = route.params;

  // State to hold the messages for the chat
  const [messages, setMessages] = useState([]);

  // The onSend function is called when the user sends a message
  const onSend = (newMessages) => {
    // Append the new message(s) to the existing messages state
    // GiftedChat.append is a helper function to make this easier
    setMessages(previousMessages => GiftedChat.append(previousMessages, newMessages));
  };

  // useEffect hook to run code when the component mounts
  useEffect(() => {
    // Set the navigation bar title to the user's name
    navigation.setOptions({ title: name });

    // Set initial static messages when the chat screen loads
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      // System message to indicate the user has entered the chat
      {
        _id: 2,
        text: 'You have entered the chat.',
        createdAt: new Date(),
        system: true, // This property makes it a system message
      },
    ]);
  }, []); // The empty dependency array [] ensures this runs only once

  return (
    // Use a View with the selected background color as the main container
    <View style={[styles.container, { backgroundColor: color }]}>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1 // The user's ID. This should be unique for each user.
        }}
      />
      { /* Add KeyboardAvoidingView for Android to prevent keyboard from covering the input */ }
      { Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default Chat;