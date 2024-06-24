import { useState } from 'react'
import { 
  Button,
  SafeAreaView, 
  View, 
  Text,
  TextInput,
  StyleSheet, } from 'react-native';
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
  const [list,setList] = useState<[Todo]>(todos);

  function addTodo(todo: Todo) {
    const _todos = [...list]
    if(todo.id==='') {
      todo.id = (list.length).toString()
    }
    _todos.push(todo)
    setList(_todos)
  }
  return (
   <SafeAreaView style={styles.center}>
    <Text style={styles.caption}>Todo Demo</Text>
    <View>
      <AddTodo add={addTodo} />
      <TodoList list={list} />
    </View> 
   </SafeAreaView>
  );
}

const AddTodo = ({add}) => {
  const [task, setTask] = useState('')

  const addTask = (e)=> {
    const todo: Todo = {
      id: '',
      task,
      completed: false,
    }
    add(todo);
    setTask('')
  }
  return (
    <View>
      <TextInput value={task} onChangeText={setTask} placeholder='new task'></TextInput>
      <Button title='add' onPress={addTask} />
    </View>
  )
}


const TodoList = ({list}: {list: [Todo]}) => {
  return (
    <View>
      { list && list.length >0 ?
      list.map( (todo: Todo) => <TodoItem key={todo.id} todo={todo}/> )
      :
      (<Text>List is empty</Text>)}
    </View>
  )
}
const TodoItem = ({todo}: {todo: Todo})=> (
    <View>
      <Text>{todo.id} - </Text>
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

