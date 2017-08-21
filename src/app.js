import React, { Component } from 'react';
import SearchBar from './search-bar';
import ListSection from './list-section';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ['thing 1', 'thing 2', 'thing 3'],
      finished: ['thing 4', 'thing 5'],
      input: ''
    }
  }

  handleClick = (event) => {
    event.preventDefault();
    let todoArray = this.state.todo;
    let newTodo = this.state.input;
    todoArray.push(newTodo)
    this.setState({ todo: todoArray });
    this.setState({ input: '' });
  };

  handleChange = (event) => {this.setState({ input: event.target.value })};

  render() {
    return (
      <div>
        <h1>
          To Do List
        </h1>
        <SearchBar onClick={this.handleClick} handleChange={this.handleChange} inputValue={this.state.input} />
        <ListSection sectionTitle="To Do" todos={this.state.todo} />
        <ListSection sectionTitle="Finished" todos={this.state.finished} />
      </div>
    )
  }
}

export default App;
