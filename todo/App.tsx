import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import './global.css'
export default function App() {
  return (
    <View className='flex-1 justify-center items-center bg-slate-600'>
      <Text className="text-3xl text-red-500">Hello!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

