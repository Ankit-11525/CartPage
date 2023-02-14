import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 9999,
          title: 'Mobile',
          qty: 1,
          id: 1,
          img: '',
        },
        {
          price: 99,
          title: 'Watch',
          qty: 1,
          id: 2,
          img: '',
        }
      ]
    }
  }
  handleIncreaseQuantity = (product) => {
    // console.log("increase the no. of quantity of ",product);
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1
    this.setState({ products: products });
  }
  handleDecreaseQuantity = (product) => {
    // console.log("decrease the no. of quantity of ",product);
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty >= 1) { products[index].qty -= 1 }

    this.setState({ products: products });
  }
  handleDeleteItem = (product) => {
    // console.log("this gonna be print");
    const { products } = this.state;
    const index = products.indexOf(product);
    products.splice(index, 1);
    this.setState({ products: products });
  }
  getCartCount =()=>
  {
    const {products}= this.state;
    let count=0;
    products.map((product)=>{
      count+=product.qty;
    })
    return count;
  }
  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        <Cart
          products={products}
          OnIncreaseQuantity={this.handleIncreaseQuantity}
          OnDecreaseQuantity={this.handleDecreaseQuantity}
          OneDeleteItem={this.handleDeleteItem}
        />
      </div>
    );
  }

}

export default App;
