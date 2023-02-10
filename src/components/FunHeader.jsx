import React from "react";
//Component for the understanding of the Function based Component
function FunHeader(props) {
  return (
    <div>
   
      <h1>Hello {props.name}</h1>
      {props.children}
    </div>
  );
}

export default FunHeader;
