import { useState, useEffect } from 'react'; // add useState in imports
import { GiftedChat, Bubble } from 'react-native-gifted-chat'; // Step 1 : import the bubble component.
import { StyleSheet, View, KeyboardAvoidingView, Platform } from 'react-native'; // Import KeyboardingView and Platform


const Chat = ({ route, navigation }) => {
  // GET both name and color from the route parameters
  const { name, color } = route.params; // Now you can use the 'name' variable in your component.

  // State to hold the messages
  const [messages, setMessages] = useState([]);

  // This function is called when the user sends a message
  const onSend = (newMessages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, newMessages)
    );
  };

  useEffect(() => {
    // Set the navigation header title to the user's name
    navigation.setOptions({ title: name });

    // Create timestamps with a guaranteed order
    const now = new Date();
    const systemMessageTime = now;
    const welcomeMessageTime = new Date(now.getTime() + 1000); // 1 second later

    // Set an intial static message
    setMessages([
      {
        
        _id: 1,
        text: `Hello, ${name}!`, // Personalize the welcome msg
        createdAt: welcomeMessageTime, // Use the newer timestamp
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },

      {
      _id: 2,
      text: 'You have entered the chat.',
      createdAt: systemMessageTime, // Use the older timestamp
      system: true,
    },
  
    ]);
  }, []); // The empty array [] means this runs only once.

  // Step 2 : Create the renderBubble function
  const renderBubble = (props) => {
    return (
      <Bubble
      {...props}
      wrapperStyle={{
        right: {
          backgroundColor: '#000'
        },
        left: {
          backgroundColor: '#FFF'
        }
      }}
      />
    )
  }

  return (
    // APPLY the selected background color to the main container
    <View style={[styles.container, { backgroundColor: color }]}>
      {/* Step 3: Add the renderBubble prop */}
      {/*<Text>Hello {name}!</Text> */}
      <GiftedChat
        messages={messages}
        renderBubble={renderBubble}
        onSend={onSend} // <-- simplified version.
        user={{
          _id: 1,
        }}
      />
      {/* ADD THE KEYBOARDAVOIDINGVIEW SPECIFICALLY FOR ANDROID */}
      {Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center', // No longer needed used to house the old "Hello" Text.
    //alignItems: 'center'
  }
});

export default Chat;