import React, { Component } from "react";

class Product extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         productId: '',
         qty: 0
      }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Component Updated");
      }
    

    addToCart = (pid) => {
        console.log(pid);
        this.setState({
            productId:pid,
            qty:this.state.qty+1
        })
    }

  render() {
    return (
      <div>
      <button onClick={() => {this.addToCart(1)}}>Add To Cart</button>
        <Cart></Cart>
      </div>
    );
  }
}

export default Product;

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      qty: 0,
    };
  }

  updateQty = () => {
    this.setState({
      qty: this.state.qty + 1,
    });
  };

  componentDidMount() {
    console.log("Execute after component render");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component Updated");
  }

  render() {
    return (
      <div>
        <h1>CART: {this.state.qty}</h1>
        <button onClick={this.updateQty}>Update Quantity</button>
      </div>
    );
  }
}
