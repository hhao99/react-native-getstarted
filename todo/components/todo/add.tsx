import { useState } from 'react'
import { View, Button, Text,TextInput, StyleSheet, } from 'react-native';
import { Todo } from './types';
export default function AddTodo() {
    const [task, setTask] = useState('')
  return (
   <View style={styles.body}>
    <Text>New Task</Text>
    <TextInput 
        style={styles.input}
        value={task}  
        onChangeText={setTask} />
    <Button title='add new task'/>
   </View>
  );
}


const styles = StyleSheet.create({
  body: {
    backgroundColor: 'amber',
    borderColor: 'red'
  },
  input: {
    borderBottomColor: 'black',
    margin: 4,
  },
  caption: {
    fontSize: 24,
  }
})