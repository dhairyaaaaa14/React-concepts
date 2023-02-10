import React, { Component } from "react";
//Component for the understanding of the Class based Component
class ClassHeader extends Component {
  render() {
    return (
      <div>
        <h1>Hi! {this.props.name}</h1>
      </div>
    );
  }
}

export default ClassHeader;
