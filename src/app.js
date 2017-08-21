import React, { Component } from 'react';
import SearchBar from './search-bar';
import ListSection from './list-section';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          task: 'thing 1',
          done: false
        },
        {
          task: 'thing 4',
          done: true
        }
      ],
      input: ''
    }
  }

  handleClick = (event) => {
    event.preventDefault();
    let todoArray = this.state.todos;
    let newTodo = {task: this.state.input, done: false};
    todoArray.push(newTodo)
    this.setState({ todo: todoArray });
    this.setState({ input: '' });
  };

  handleChange = (event) => {this.setState({ input: event.target.value })};

  handleFinishTodo = (index) => {
    let task = this.state.todos[index];
    let taskDone = task.done
    this.setState({taskDone: !this.done})
  }

  render() {
    let undone = this.state.todos.filter((todo) => {
      return !todo.done;
    })
    let done = this.state.todos.filter((todo) => {
      return todo.done;
    });

    return (
      <div>
        <h1>
          To Do List
        </h1>
        <SearchBar onClick={this.handleClick} handleChange={this.handleChange} inputValue={this.state.input} />
        <ListSection sectionTitle="To Do" todos={undone} finsihTodo={this.handleFinishTodo} />
        <ListSection sectionTitle="Finished" todos={done} finishTodo={this.handleFinishTodo} />
      </div>
    )
  }
}

export default App;
