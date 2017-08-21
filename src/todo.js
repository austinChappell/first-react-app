import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <li>{this.props.task}<button>Mark As Complete</button></li>
      </div>
    )
  }
}

export default Todo;
