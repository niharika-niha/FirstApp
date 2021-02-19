import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0
    };
  }

  handleIncrease = () => {
    this.setState(prevState => ({
      num: prevState.num + 1
    }));
  };

  handleDecrease = () => {
    this.setState(prevState => ({
      num: prevState.num - 1
    }));
  };

  render() {
    return (
      <div>
        <p>{this.state.num + this.props.counter}</p>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}

export default Counter;