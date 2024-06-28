import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Slot } from 'expo-router'
export default function RootLayout({children}) {
  return (
    <View style={styles.container}>
      <Text>Header</Text>
      <View>
        <Slot />
      </View>
      <Text>footer</Text>
      <StatusBar style="auto" />
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
