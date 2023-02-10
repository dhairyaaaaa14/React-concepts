import React, { Component } from 'react'
//Event handling
export default class ClassEventHandling extends Component {

    constructor(){
        super();

    }

    showMessage(){
        console.log("Button is Clicked!");
    }

  render() {
    return (
      <div>
        <button onClick={this.showMessage}>Click ME!</button>
      </div>
    )
  }
}
