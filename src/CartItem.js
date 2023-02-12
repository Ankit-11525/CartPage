import React from 'react'
// import index from './index.css'
class CartItem extends React.Component {
    render() {
        return (
            <div className='cart-item'>
                <div className='left-block'>
                     <img style={styles.image}/>
                </div>
                <div className='right-block'>
                    <div style={  {fontSize:25,color:'black'}}>  Phone</div>
                    <div style={  {fontSize:20,color:'#555'}}>  Rs 999</div>
                    <div style={  {fontSize:18,color:'#555'}}>  Qty: 1</div>
                    <div className='cart-item-actions'>
                        {
                            // Buttons
                        }  
                    </div>

                </div>
            </div>
        );
    }
}
const styles={
    image:{
        height:150,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}
export default CartItem;