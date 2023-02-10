import React, { useState,useEffect } from "react";
//Hooks in Functional Component
function HookCounter() {
  const [name, setName] = useState("Dhairya Parikh");

  const stateHandler = () => {
   setName("Hellooooo")
  };

  return (
    <div>
      {name}
      <button onClick={stateHandler}>Click me</button>
    </div>
  );
}

export default HookCounter;
