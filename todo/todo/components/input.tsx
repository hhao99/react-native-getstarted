import React, { useState} from 'react'
import { TextInput, Button, StyleSheet, Text, View } from 'react-native'

 const TodoInput = ({onSubmit}) => {
    const [task, setTask] = useState('')
    return (<View style={styles.container}>
        <Text style={styles.header}>New Todo:</Text>
        <View>
            <TextInput 
                style={styles.input}
                value={task} 
                placeholder='new task'
                onChangeText={ (value)=> setTask(value)} 
                onSubmitEditing={ () => {
                    if(!task) return
                    onSubmit(task)
                    setTask('')
                }}
                />          
        </View>
    </View>);
 }

const styles = StyleSheet.create({
    container: {
        padding: 12,
    },
    header: {
        fontSize: 24,
    },
   
    input: {
        fontWeight: 'bold',
        backgroundColor: '#cdf',
        padding: 16,
        height: 48,
    }
})

export default TodoInput