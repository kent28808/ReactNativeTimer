import React from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <StatusBar barStyle="light-content" />
      <TouchableOpacity onPress={() => null} style={styles.button}>
          <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#07121B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
      borderWidth: 10,
      borderColor: '#B9AAFF',
  },
  buttonText: {
      fontSize:45,
      color: '#B9AAFF',
  }
});
