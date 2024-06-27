import uuid from 'react-native-uuid';
import type { Todo, AppState} from '../types/todo.type'

export const initialState: AppState = {
    list: [
        {id: uuid.v4(), task: 'click to remove', completed: false},
        {id: uuid.v4(), task: 'Learn React Native', completed: false},
        {id: uuid.v4(), task: 'Setup Environment', completed: true},
        {id: uuid.v4(), task: 'Write code', completed: true}
    ]
}

const actionType = {
    ADD: 'item_add',
    REMOVE: 'item_remove',
}
export const actionCreators = {
    add: (task: string) => ({type: actionType.ADD, payload: task}),
    remove: (id: string) => ({ type: actionType.REMOVE, payload: id}),
}

export function reducers(state,action) {
    switch(action.type) {
        case actionType.ADD:
            const todo = {id: uuid.v4(), task: action.payload, completed: false}
            return {...state, list: [...state.list, todo]}
        case actionType.REMOVE:
            return {
                ...state,
                list: state.list.filter( (item: Todo) => item.id !== action.payload)
            }
    }
}

