
import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer";


export const useTodo = ({ initialState }) => {

    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    }
    
    const [todos, dispatch] = useReducer( todoReducer, initialState, init );

    
    const handleNewTodo = ( todo ) => {
        
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        dispatch( action );
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        });
    }

    const onToggleTodo = (id) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        });
    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos) );
    
    }, [todos])


    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        onToggleTodo,
        todosCount: todos.length,
        pendingTodosCount: todos.filter( todo => !todo.done).length,
    }
}
