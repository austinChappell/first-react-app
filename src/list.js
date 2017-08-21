import React, { Component } from 'react';
import Todo from './todo';

class List extends Component {
  constructor(props) {
    super(props);
  }

  finishTodo = (index) => {
    this.props.finishTodo(index);
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map((item, index) => {
            return <Todo key={index} done={item.done} task={item.task} finishTodo={this.props.finishTodo} />
          })}
        </ul>
      </div>
    )
  }
}

export default List;
