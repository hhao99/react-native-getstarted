import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router'

export default function Page() {
  return (
    <View style={styles.container}>
      <Text>Home Page!</Text>
      <Link href={{ pathname: 'details'}}>detail page</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
