import { useState } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Todo } from './types';
import TodoItem from './item';

export default function TodoList({list}: {list: [Todo]}) {
  return (
   <View style={styles.body}>
    <Text style={styles.caption}>Todo List </Text>
    <Text>there are {list.length} tasks</Text>
    <View>
        <FlatList 
          data={list}
          renderItem={ ({item,index})=> <TodoItem todo={item}/>}
          keyExtractor={ (item)=> item.id }
        />
      
    </View>
   </View>
  );
}


const styles = StyleSheet.create({
  body: {
    backgroundColor: 'lightblue',
  },
  caption: {
    fontSize: 24,
  }
})