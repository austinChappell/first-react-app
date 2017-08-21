import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    this.props.markDone();
  }

  render() {
    return (
      <li>{this.props.task} <button id={this.props.task} onClick={this.props.finishTodo}>Mark As Complete</button></li>
    )
  }
}

export default Todo;
