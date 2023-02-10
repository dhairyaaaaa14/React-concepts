import React, { Component } from "react";
import FunHeader from "./components/FunHeader";
import ClassHeader from "./components/ClassHeader";
import Button from "./components/Button";
import ClassEventHandling from "./components/ClassEventHandling";
import ClassChangeEvent from "./components/ClassChangeEvent";
import Routing from "./components/Routing";
import LifeCycleA from "./components/LifeCycleA";
import Product from "./components/Product";
import PostList from "./components/PostList";
import HookCounter from "./components/HookCounter";
import UseEffectHookCounter from "./components/UseEffectHookCounter";
class App extends Component {

  constructor(){
    super();

    this.style = {
      textAlign: "center"
    }
  }

  render() {
   return (
     <div className="App" style={this.style}>
{/*    
    <FunHeader name="Dhairya">
    <p>He is a React Developer</p>
    </FunHeader>
     
   
    <ClassHeader name = "Apoorv" />

   <Button />

   <ClassEventHandling />

   <ClassChangeEvent roll="22" /> 
  <Routing></Routing> 
  <LifeCycleA /> 
  <PostList />
  */}

  <HookCounter />

  <UseEffectHookCounter />

   
  </div>  
   )
  }
}

export default App;
