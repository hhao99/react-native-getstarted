import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.caption}>Hello!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7a7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  caption: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});
