import { useState } from 'react'
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import TodoList from './list'
import AddTodo from './add'
import { Todo } from './types'
const styles = StyleSheet.create({
  caption: {
    color: 'amber',
    fontSize: 24
  },
  body: {
    padding: 40,
    fontSize: 12
  },
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: '#ccc',
    borderStyle: 'solid',
    borderColor: 'amber',
    borderWidth: 1,
  }
})

const todos: [Todo] = [
  { id: '1', task: 'first task', completed: false},
  { id: '2', task: 'second task', completed: false},
  { id: '3', task: 'third task', completed: true},
];
export default function TodoApp() {
  return (
   <SafeAreaView className='flex flex-1 justify-center items-center bg-white'>
    <Text style={styles.caption}>Todo App </Text> 
    <Text style={styles.body}>A Demo app for the testing purpose.</Text>
    <AddTodo />
    <TodoList list={todos}/>
   </SafeAreaView>
  );
}
