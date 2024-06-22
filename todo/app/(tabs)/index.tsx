import { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  caption: {
    color: 'amber',
    fontSize: 24
  },
  body: {
    padding: 40,
    fontSize: 12
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default function HomeScreen() {
  return (
   <View style={styles.center}>
    <Text style={styles.caption}>Todo App </Text> 
    <Text style={styles.body}>A Demo app for the testing purpose.</Text>
   </View>
  );
}
