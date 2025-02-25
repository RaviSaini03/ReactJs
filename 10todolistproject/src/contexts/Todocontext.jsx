import {createContext, useContext} from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: " Ravi Saini ",
            complete: false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (todo, id) => {},
    deleteTodo: (id) => {},
    checkTodo: (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = ({children, value}) => (
    <TodoContext.Provider value={value}>
        {children}
    </TodoContext.Provider>
);