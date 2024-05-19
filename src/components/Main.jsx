import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Main = () => {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(count + 5);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 5);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Usa el contador</Text>
      <View style={styles.counterBox}>
      <Text style={styles.counterText}>{count}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonRed} onPress={decrementCount}>
          <Text style={styles.buttonText}>Disminuir</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonGreen} onPress={incrementCount}>   
          <Text style={styles.buttonText}>Incrementar</Text> 
          </TouchableOpacity>
        </View>
      </View>  
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },

  title: {
    fontSize: 22,
    paddingVertical: 6,
    color: 'white',
    width: 300,
    textAlign: 'center',
    backgroundColor: '#171204'
  },

  counterBox: {
    width: 300,
    height:200,
    padding: 30, 
    borderColor: 'black',
    backgroundColor: '#fff',
    alignItems: 'center'
  },

  counterText: {
    fontSize: 40,
    paddingTop: 18,
    fontWeight: 'bold'
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    paddingTop: 32
  },

  buttonRed: {
    backgroundColor: '#B32D2D',
    padding: 8,
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 10,
    width: 118,
    alignItems: 'center'
  },

  buttonGreen: {
    backgroundColor: '#25A411',
    padding: 8,
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 10,
    width: 118,
    alignItems: 'center'
  },
    
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
});

export default Main