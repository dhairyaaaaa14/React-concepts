import React, { Component, Fragment } from "react";
//States in class based component
export default class ClassChangeEvent extends Component {
  constructor() {
    super();
    this.state = {
      college: "GU",
    };
  }

  show = () => {
    this.setState({
      college: "DAIICT",
      roll: this.props.roll
    });

    // setTimeout(1000)
    console.log("Hello Dhairya ",this.props.roll);
    // console.log(this.state.college);
  };

  render() {
    console.log(this.state.college);
    return (
      <Fragment>
        <button onClick={this.show}>Change College Name</button>
        {this.state.college}
      </Fragment>
    );
  }
}
