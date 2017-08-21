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
      <div>
        <li>{this.props.task} <button onClick={this.props.finishTodo}>Mark As Complete</button></li>
      </div>
    )
  }
}

export default Todo;
