import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      task: ''
    }
  }

  handleChange = (event) => {this.setState({ input: event.target.value })};

  render() {
    return (
      <div>
        <form>
          <input type="text" onChange={this.props.handleChange} value={this.props.inputValue} />
          <input type="submit" onClick={this.props.onClick} />
        </form>
        <p>{this.state.input}</p>
        <h1>{this.state.task}</h1>
      </div>
    )
  }
}

export default SearchBar;
