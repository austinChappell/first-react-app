import React, { Component } from 'react';
import Title from './title';
import List from './list';

class ListSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Title title={this.props.sectionTitle} />
        <List todos={this.props.todos} markDone={this.props.markDone} />
      </div>
    )
  }
}

export default ListSection;
