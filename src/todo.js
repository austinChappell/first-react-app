import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    this.props.markDone();
  }

  render() {
    let buttonText;

    if (this.props.done) {
      buttonText = 'Nevermind';
    } else {
      buttonText = 'Mark As Complete';
    };

    return (
      <li>{this.props.task} <button id={this.props.task} onClick={this.props.finishTodo}>{buttonText}</button></li>
    )
  }
}

export default Todo;
