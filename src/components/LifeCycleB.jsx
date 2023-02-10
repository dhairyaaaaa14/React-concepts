import React, { Component } from "react";

//Lifecycle methods in class based component

class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.setState = {
      name: "Dhairya",
    };

    console.log("LifeCycleB:constructor");

  }

  static getDerivedStateFromProps(props,state){
    console.log("LifeCycleB: getDerivedStateFromProps");
    return null;
  }

componentDidMount(){
    console.log("LifeCycleB: componentDidMount");
}


  render() {
    console.log("LifeCycleB: render");
    return <div>LifeCycleB</div>;
  }
}

export default LifeCycleB;
