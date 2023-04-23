import "./App.css";
import React from 'react';
import TodoList from './components/TodoList';
import Form from './components/Form';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: [
          {
            name: 'Organize Garage',
            id: 1528817077286, // could look different, you could use a timestamp to generate it
            completed: false
          },
          {
            name: 'Bake Cookies',
            id: 1528817084358,
            completed: false
          },
      ] 
    };
  }

  hideCompleted = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => {
        return (!todo.completed);
      })
    })
  }

  addNewTask = (name) => {
    const newTodo = {
      name:name,
      id: Date.now(),
      completed: false
    }
    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    });
  }

  completeTask = (clickedId) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map((todo) => {
        if(todo.id === clickedId){
          return {
            ...todo,
            completed: !todo.completed
          }
        } 
        return todo;
      })
    })
  }

  render() {
    return (
      <header className="App-header">
        <h1>My Todo List</h1>
        <TodoList completeTask={this.completeTask} todos={this.state.todos}/>
        <Form addNewTask={this.addNewTask}/>
        <button onClick={this.hideCompleted}>Remove Completed Tasks</button>
      </header>
    )
  }
}
