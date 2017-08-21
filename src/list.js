import React, { Component } from 'react';
import Todo from './todo';

class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map((item, index) => {
            return <Todo key={index} task={item} />
          })}
        </ul>
      </div>
    )
  }
}

export default List;
