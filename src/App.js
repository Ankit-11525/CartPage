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
          img: 'https://img5.gadgetsnow.com/gd/images/products/additional/large/G390874_View_1/mobiles/smartphones/apple-iphone-14-pro-max-1-tb-deep-purple-6-gb-ram-.jpg',
        },
        {
          price: 99,
          title: 'Watch',
          qty: 1,
          id: 2,
          img: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/a09a67f0-75bd-42b8-8f0d-58ffad51e03b_600x.png?v=1625045372',
        },
        {
          price: 99999,
          title: 'Laptop',
          qty: 1,
          id: 3,
          img: 'https://lh3.googleusercontent.com/spp/AHlUXW2ILc2NqvCKChWwx_ZoLEHmCnt24lNa-XvWSs4R0U8UJW0zOmq0LTL6QLf_-pNMUq1J5pmOtHdUJ_wlbfX32Mw3EKoxqydtfub3yrbVnI--x1CZO67Bs7pTFrWtBq19epdCEXLb7dTrkLHrACyUqHHP9-_QBVGhISchdy8DZNjI1dMU8cZWD6uTbQBtzwFGqqT0Zdcp=s512-rw-pd-pc0x00ffffff',
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
  getCartCount = () => {
    const { products } = this.state;
    let count = 0;
    products.map((product) => {
      count += product.qty;
    })
    return count;
  }
  getCartTotal=()=>{
    const { products } = this.state;
    let totalprice = 0;
    products.map((product) => {
      totalprice += product.price*product.qty;
    })
    return totalprice;
  }
  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          OnIncreaseQuantity={this.handleIncreaseQuantity}
          OnDecreaseQuantity={this.handleDecreaseQuantity}
          OneDeleteItem={this.handleDeleteItem}
        />
        <div style={{padding:10,marginLeft:400,fontSize:20}}>
          TOTAL : {this.getCartTotal()}
        </div>
      </div>
    );
  }

}
// const styles={
//   cartTotal:{
//     Margin:'100',
//   }
// }
export default App;
