import { useState } from 'react'
import { SafeAreaView, View, Text, StyleSheet, FlatList } from 'react-native';

const styles = StyleSheet.create({
  caption: {
    color: 'amber',
    fontSize: 24
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default function TodoApp() {
  return (
   <SafeAreaView style={styles.center}>
    <Text style={styles.caption}>Todo Demo</Text>
    <View>
      <TodoList list={todos} />
    </View> 
   </SafeAreaView>
  );
}

const TodoList = ({list}: {list: [Todo]}) => {
  return (
    <View>
      { list && list.length >0 ?
      list.map( (todo: Todo) => <TodoItem todo={todo}/> )
      :
      (<Text>List is empty</Text>)}
    </View>
  )
}
const TodoItem = ({todo}: {todo: Todo})=> (
    <View>
      <Text>{todo.task}</Text>
    </View>
  )
type Todo = {
  id: string,
  task: string,
  completed: boolean,
}

type todoState = {
  list:  [Todo],
}

const todos : [Todo] = [
  { id: '1', task: 'first task', completed: false},
  { id: '2', task: 'second task', completed: false},
  { id: '3', task: 'third task', completed: true},
 
]

