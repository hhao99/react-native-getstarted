import React, { useReducer } from 'react'

import {StyleSheet, View, Text } from 'react-native'
import { TodoList, TodoInput } from './components'

import { actionCreators, reducers, initialState } from './reducers/todo'
export default function App() {
    const [state, dispatch] = useReducer(reducers, initialState)

    return (
        <View style={styles.container}>
            <Text>Todo demo</Text>
            <TodoInput onSubmit={ (task) => dispatch(actionCreators.add(task))} />
            <TodoList list={state.list} onRemove={ (id) => { 
                dispatch(actionCreators.remove(id));
             }} />
        </View>
    )
}

const styles = StyleSheet.create( {
    container: {
        display: 'flex',
        marginTop: 48,
    }
})