import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todos: [
        ]
    },
    getters: {
        getTodos(state) {
            return state.todos;
        }
    },
    mutations: {
        // retriving data from local storage in vuex
        initializeTodos(state) {
            if(localStorage.getItem('todos')) {
                state.todos = JSON.parse(localStorage.getItem('todos'));
            }
        },
        addTodo(state, todo) {
                todo.id = state.todos.length + 1;
                state.todos.push(todo);
            
        },
        changeComplete(state, data) {
            
            state.todos = state.todos.map(todo => {
                if(todo.id === data.id) {
                    todo.completed = data.complete;
                }

                return todo;
            })
        },
        deleteTodo(state, id) {
            state.todos = state.todos.filter(todo => todo.id !== id);
        },
        changeTodo(state, data) {
            state.todos = state.todos.map(todo => {
                if(todo.id === data.id) {
                    todo.title = data.text;
                }
                return todo;
            })
        }
    },

})