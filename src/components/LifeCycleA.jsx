import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

//Lifecycle methods in class based component

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.setState = {
      name: "Dhairya",
    };

    console.log("LifeCycleA:constructor");

  }

  static getDerivedStateFromProps(props,state){
    console.log("LifeCycleA: getDerivedStateFromProps");
    return null;
  }

componentDidMount(){
    console.log("LifeCycleA: componentDidMount");
}


  render() {
    console.log("LifeCycleA: render");
    return <div>LifeCycleA
    <LifeCycleB />
    </div>;
  }
}

export default LifeCycleA;
