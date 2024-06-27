import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { Todo } from '../types/todo.type'

import TodoItem from './item';
 const TodoList = ({list, onRemove}: {list: [Todo], onRemove: (id:string) => void})=> (
    <View style={styles.container}>
        <Text>Todo List</Text>
        <FlatList 
            data={list}
            keyExtractor= { (item: Todo) => item.id }
            renderItem={ ({item,index}) => <TodoItem todo={item} remove={()=> onRemove(item.id)}/> }
        />
    </View>
)

const styles = StyleSheet.create({
    container: {
        height: 'auto',
        backgroundColor: '#ace',
        marginTop: 10,
    },
})

export default TodoList