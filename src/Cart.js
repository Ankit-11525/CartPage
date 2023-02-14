import React from 'react'
import CartItem from './CartItem';
class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [
                {
                    price: 9999,
                    title: 'Mobile',
                    qty: 1,
                    id:1,
                    img: '',
                },
                {
                    price: 99,
                    title: 'Watch',
                    qty: 1,
                    id:2,
                    img: '',
                }
            ]
        }
    }
    handleIncreaseQuantity =(product)=>{
        // console.log("increase the no. of quantity of ",product);
        const {products}=this.state;
        const index=products.indexOf(product);
        products[index].qty+=1
        this.setState({products:products});
    }
    handleDecreaseQuantity =(product)=>{
        // console.log("decrease the no. of quantity of ",product);
        const {products}=this.state;
        const index=products.indexOf(product);
        products[index].qty-=1
        this.setState({products:products});
    }
    handleDeleteItem=(product)=>{
        // console.log("this gonna be print");
        const {products}=this.state;
        const index=products.indexOf(product);
        products.splice(index,1);
        this.setState({products:products});
    }
    render() {
        const { products } = this.state;
        return (
            <div className='cart'>

                {products.map((product) => {
                    return (
                        <CartItem 
                        key={product.id} 
                        product={product}
                        OnIncreaseQuantity={this.handleIncreaseQuantity}
                        OnDecreaseQuantity={this.handleDecreaseQuantity} 
                        OneDeleteItem={this.handleDeleteItem}/>
                    )
                })}

            </div>
        );
    }
}

export default Cart;