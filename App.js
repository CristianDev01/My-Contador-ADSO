import React from 'react';
import { StyleSheet, View } from 'react-native';
import Main from './src/components/Main.jsx';

export default function App() {
  return (
    <View style={styles.container}>
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D5B665'
  },
});