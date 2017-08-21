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

  handleFinishTodo = (event) => {
    // let task = this.state.todos[index];
    // let taskDone = task.done
    // this.setState({taskDone: !this.done})
    const id = event.target.id;
    const changeTodos = this.state.todos.map((todo) => {
      if (todo.task === id) {
        todo.done = !todo.done;
        return todo;
      } else {
        return todo;
      }
    })
    console.log(event.target.id);
    console.log(changeTodos);
    this.setState({todos: changeTodos})
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
        <ListSection sectionTitle="To Do" todos={undone} finishTodo={this.handleFinishTodo} />
        <ListSection sectionTitle="Finished" todos={done} finishTodo={this.handleFinishTodo} />
      </div>
    )
  }
}

export default App;
