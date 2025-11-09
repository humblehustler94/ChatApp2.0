// Import necessary components
import { useState } from 'react';
// ADD KeyBoardAvoidingView and Platform to imports
import { StyleSheet, View, Text, Button, TextInput, ImageBackground, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';

const Start = ({ navigation }) => {
    const [name, setName] = useState('');
    // ADD state for the choosen background color.
    const [color, setColor] = useState('');

    // Define the color choices from your design specifications
    const colors = {
        black: '#090C08',
        purple: '#474056',
        grey: '#8A95A5',
        green: '#B9C6AE'
    };


    return (
        // ADD ImageBackground to use an image as the screen background
        <ImageBackground
            source={require('../assets/background-image.png')} // Make sure you have this image in an 'assets' folder
            resizeMode="cover"
            style={styles.backgroundImage}
        >
            {/* ADD the App Title */}
            <Text style={styles.appTitle}>ChatApp</Text>

            {/* ADD a container for the user inputs */}
            <View style={styles.inputContainer}>
                {/* Your Name TextInput - Apply new styles */}
                <TextInput
                    style={styles.textInput}
                    value={name}
                    onChangeText={setName}
                    placeholder='Your name'
                    placeholderTextColor="#757083" // Style the placeholder text
                />

                {/* ADD section for choosing background color */}
                {/* ADD Accessibilty Props to the color section buttons */}
                <Text style={styles.chooseColorText}>Choose background color:</Text>
                <View style={styles.colorSelector}>
                    <TouchableOpacity
                        style={[styles.colorCircle, { backgroundColor: colors.black }]}
                        onPress={() => setColor(colors.black)}
                        accessible = {true}
                        accessibilityLabel="Black color"
                        accessibilityHint="Selects black as the background color for the chat screen."
                        accessibilityRole="button"
                    />
                    <TouchableOpacity
                        style={[styles.colorCircle, { backgroundColor: colors.purple }]}
                        onPress={() => setColor(colors.purple)}
                        accessible = {true}
                        accessibilityLabel="Purple color"
                        accessibilityHint="Selects purple as the background color for the chat screen."
                        accessibilityRole="button"
                    />
                    <TouchableOpacity
                        style={[styles.colorCircle, { backgroundColor: colors.grey }]}
                        onPress={() => setColor(colors.grey)}
                        accessible={true}
                        accessibilityLabel="Grey color"
                        accessibilityHint="Selects grey as the background color for the chat screen."
                        accessibilityRole="button"
                    />
                    <TouchableOpacity
                        style={[styles.colorCircle, { backgroundColor: colors.green }]}
                        onPress={() => setColor(colors.green)}
                        accessible={true}
                        accessibilityLabel="Green color"
                        accessibilityHint="Selects green as the background color for the chat screen."
                        accessibilityRole="button"
                    />
                </View>

                {/* CHANGE the Button to a styled TouchableOpacity */}
                <TouchableOpacity
                    style={styles.startButton}
                    // UPDATE onPress to pass both name AND color to the Chat screen
                    onPress={() => navigation.navigate('Chat', { name: name, color: color })}
                    accessible={true}
                    accessibilityLabel="Start chatting"
                    accessibilityHint="Navigates to the chat screen"
                    accessibilityRole="button"
                >
                    <Text style={styles.startButtonText}>Start Chatting</Text>
                </TouchableOpacity>
            </View>

            { /* ADD KeyBoardAvoidingView specifically for iOS */}
            {Platform.OS === 'ios' ? <KeyboardAvoidingView behavior="padding" /> : null}
        </ImageBackground>
    );
}

// ADD all the styles from the design specifications
const styles = StyleSheet.create({

    backgroundImage: {
        flex: 1,
        justifyContent: 'space-evenly', // Evenly distribute content vertically
        alignItems: 'center',
    },
    appTitle: {
        fontSize: 45,
        fontWeight: '600',
        color: '#FFFFFF',
    },
    inputContainer: {
        backgroundColor: 'white',
        width: '88%',
        alignItems: 'center',
        padding: '6%',
    },
    textInput: {
        width: "100%",
        padding: 15,
        borderWidth: 1,
        borderColor: '#757083',
        fontSize: 16,
        fontWeight: '300',
        color: '#757083',
        opacity: 0.5,
        marginBottom: 15,
    },
    chooseColorText: {
        fontSize: 16,
        fontWeight: '300',
        color: '#757083',
        opacity: 1,
        marginBottom: 10,
    },
    colorSelector: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginBottom: 20,
    },
    colorCircle: {
        width: 50,
        height: 50,
        borderRadius: 25, // Half of width/height to make it a circle
    },
    startButton: {
        backgroundColor: '#757083',
        width: '100%',
        padding: 20,
        alignItems: 'center',
    },
    startButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFFFFF',
    }
});

export default Start;