import React from 'react';
export default class Model extends React.Component {
    constructor() {
        super();
        this.storeKey = "todos";
        this.todos = localStorage.getItem(this.storeKey) ? JSON.parse(localStorage.getItem(this.storeKey)) : [];
        this.listeners = [];
    }

    subscribe = (listener) => {
        this.listeners.push(listener);
    }

    emit = () => {
        this.listeners.forEach(listener=>listener());
    }

    AddAndEmit(todos) {
        localStorage.setItem(this.storeKey, JSON.stringify(this.todos));
        this.todos = todos;
        this.emit(todos);
    }

    addTodo = (content) => {
        let todos = this.todos;
        let todo = Object.assign(content, { id: Math.random(), completed: false });
        todos.push(todo);
        this.AddAndEmit(todos);
        // this.setState({ todos });
    }

    delTodo = (id) => {
        let todos = this.todos;
        let index = todos.findIndex(xx => xx === id);
        todos.splice(index, 1);
        // this.setState({ todos });
        this.AddAndEmit(todos);
    }

    togger = (id) => {
        let todos = this.todos;
        todos.map((todo, index) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        // this.setState({ todos });
        this.AddAndEmit(todos);
    }

    toggerAll = (event) => {
        // let checked = event.target.checked;
         let todos = this.todos;
         todos.map((todo, index) => {
            todo.completed = event.target.checked;
            return todo;
        });
        // this.setState({ todos });
        this.AddAndEmit(todos);
    }

    delAllCompleted = () =>{
        let todos = this.todos;
        todos = todos.filter((todo)=>{
            if(!todo.completed){
                return todo;
            }
        });
        // this.setState({todos});
        this.AddAndEmit(todos);
    }

}