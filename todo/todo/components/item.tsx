import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Todo } from '../types/todo.type'
 const TodoItem = ({todo, remove}: {todo: Todo, remove: (id: string) => void })=> {
    return (
    <View style={styles.container}>      
        <TouchableOpacity
           onPress={ ()=> {
            remove(todo.id);
           }}
        >
            <Text style={styles.id}>id: {todo.id}</Text>
            <Text style={styles.task}>task: {todo.task}</Text>
        </TouchableOpacity>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#acf',
        margin: 4,
    },
    id: {
        color: 'gray',
        fontSize: 12,
    },
    task: {
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold'
    }
})

export default TodoItem