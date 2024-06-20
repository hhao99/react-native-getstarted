import { useState } from 'react'
import { View, Text, Button, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
  displayMedium: {
    fontSize: 24,
  },
  displayHuge: {
    fontSize: 35,
  }
})

const Greeting = ({name}: {name: String}) => {
  return (
    <View style={styles.center}>
      <Text style={ styles.displayMedium}>Greeting: {name}</Text>
    </View>
  )
}
const Counter = ()=> {
  const [count, setCount] = useState(0)
  return (
    <View>
      <Text style={styles.displayHuge}
      >Counter: you have click {count} times</Text>
      <Button title="add" onPress={()=> { setCount(count+1)} }></Button>
    </View>
  )
}
export default function HomeScreen() {
  return (
   <View
    style={
      [styles.center,
      {top: 50},
    ]}
   >
    <View><Greeting name="Amelia" />
    <Greeting name="Joseph" />
    <Greeting name="Rebecca" /></View>
    <View>
      <Counter />
    </View>
    
   </View>
  );
}
