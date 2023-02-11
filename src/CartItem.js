import React from 'react'
// import index from './index.css'
class CartItem extends React.Component {
    render() {
        return (
            <div className='card-item'>
                <div className='left-block'>
                    {/* <img/> */}
                </div>
                <div className='right-block'>
                    <div>  Phone</div>
                    <div>  Rs 999</div>
                    <div>  Qty: 1</div>
                    <div className='card-item-actions'>
                        {
                            // Buttons
                        }  
                    </div>

                </div>
            </div>
        );
    }
}
export default CartItem;