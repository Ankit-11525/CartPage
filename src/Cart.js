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
    render() {
        const { products } = this.state;
        return (
            <div className='cart'>

                {products.map((product) => {
                    return (
                        <CartItem 
                        key={product.id} 
                        product={product} />
                    )
                })}

            </div>
        );
    }
}

export default Cart;