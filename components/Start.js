// components/Start.js

import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, ImageBackground, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';

const Start = ({ navigation }) => {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');

  const image = require('../assets/background-image.png');

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.title}>Chat App</Text>
      <View style={styles.box}>
        {/* Wrap the input and color choices in KeyboardAvoidingView */}
        <KeyboardAvoidingView
          style={styles.keyboardAvoidingView}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={setName}
            placeholder='Your Name'
          />
          <View>
            <Text style={styles.chooseColorText}>Choose Background Color:</Text>
            <View style={styles.colorSelector}>
              <TouchableOpacity style={[styles.colorCircle, { backgroundColor: '#090C08' }]} onPress={() => setColor('#090C08')} />
              <TouchableOpacity style={[styles.colorCircle, { backgroundColor: '#474056' }]} onPress={() => setColor('#474056')} />
              <TouchableOpacity style={[styles.colorCircle, { backgroundColor: '#8A95A5' }]} onPress={() => setColor('#8A95A5')} />
              <TouchableOpacity style={[styles.colorCircle, { backgroundColor: '#B9C6AE' }]} onPress={() => setColor('#B9C6AE')} />
            </View>
          </View>
        </KeyboardAvoidingView>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Chat', { name: name, color: color })}
        >
          <Text style={styles.buttonText}>Start Chatting</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 45,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 'auto',
    marginTop: 60,
  },
  box: {
    backgroundColor: '#FFFFFF',
    width: '88%',
    height: '44%',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 20,
    paddingVertical: 20,
  },
  keyboardAvoidingView: {
    width: '88%',
    alignItems: 'center',
  },
  textInput: {
    width: '100%',
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
    textAlign: 'center',
    marginBottom: 10,
  },
  colorSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  colorCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    margin: 5,
  },
  button: {
    backgroundColor: '#757083',
    width: '88%',
    padding: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  }
});

export default Start;