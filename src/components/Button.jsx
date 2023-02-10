import React, { Component } from "react";
//Component for understanding state in class based component
class Button extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  incrementCounter() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  render() {
    return (
      <div>
        <p>{this.state.counter}</p>
        <button
          onClick={() => {
            this.incrementCounter();
          }}
        >
          Click me
        </button>
      </div>
    );
  }
}

export default Button;
