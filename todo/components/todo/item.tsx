
import { View, Text, StyleSheet } from 'react-native';
import { Todo } from './types';


export default function TodoItem({todo}: {todo: Todo}) {
  return (
   <View style={styles.container}>
    <Text style={styles.id}>{todo.id}</Text>
    <Text style={styles.task}>{todo.task}</Text> 
   </View>
  );
}


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
        padding: 2,
    },

    id: {
      fontSize: 12,
    },
    task: {
        fontSize: 12,
        fontWeight: 'bold'
    }
  })