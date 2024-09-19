import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todoList: []
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (todo, action) => {
            let todoText = action.payload.todoText;
            todo.todoList.push({ id: todo.todoList.length + 1, todoData: todoText, finished: false });
        },
        editTodo: (todo, action) => {
            let todoText = action.payload.todoText;
            let payloadTodo = action.payload.todo;
            todo.todoList = todo.todoList.map(t => {
                if (t.id === payloadTodo.id) {
                    return { ...t, todoData: todoText }; // Corrected: properly updating the todoData field
                }
                return t;
            });
        },
        todoFinished: (todo, action) => {
            let payloadTodo = action.payload.todo;
            let isFinished = action.payload.isFinished;
            todo.todoList = todo.todoList.map(t => {
                if (t.id === payloadTodo.id) {
                    return { ...t, finished: isFinished }; // Corrected: properly updating the finished field
                }
                return t;
            });
        },
        deleteTodo: (todo, action) => {
            let payloadTodo = action.payload.todo;
            todo.todoList = todo.todoList.filter(t => t.id !== payloadTodo.id);
        }
    }
});

export const { deleteTodo, addTodo, todoFinished, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
