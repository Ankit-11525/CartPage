import React from 'react'
import CartItem from './CartItem';
const Cart = (props) => {
        const { products } = props;
        return (
            <div className='cart'>

                {products.map((product) => {
                    return (
                        <CartItem
                            key={product.id}
                            product={product}
                            OnIncreaseQuantity={props.OnIncreaseQuantity}
                            OnDecreaseQuantity={props.OnDecreaseQuantity}
                            OneDeleteItem={props.OneDeleteItem} />
                    )
                })}

            </div>
        );
}

export default Cart;