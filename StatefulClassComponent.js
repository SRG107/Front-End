import React, { Component } from 'react';

class Statement2 extends Component{
  state = { count: 0 };

  incrementCount = () => {
    this.setState((prevState) => ({count: prevState.count + 1}));
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h2>Count: {count}</h2>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default Statement2;
