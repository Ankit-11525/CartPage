import React from 'react'
// import index from './index.css'

// no this keyword in function based component only
const CartItem = (props) =>{
    // constructor() {
    //     super();
    //     this.state = {
    //         price: 99,
    //         title: 'Mobile',
    //         qty: 1,
    //         img: ''
    //     }
    // }
    // increaseQuantity=()=>
    // {
        // console.log("this.state", this.state);
        // this.state.qty=this.state.qty+1;
        // console.log(this.state.qty)



        // when new state is defined
        // this.setState({
        //     qty:this.state.qty+1 
        // });


        // when prevstate is being used to update 
        // this.setState(
        //     (prevState)=>{
        //         return{
        //             qty:prevState.qty+1
        //         }
        //     },()=>{console.log("this.state", this.state);}
        // );
        //callback func becoz setstate is asnychronous 
    // }
    // decreaseQuantity=()=>
    // {
        // console.log("this.state", this.state);
        // this.state.qty=this.state.qty+1;
        // console.log(this.state.qty)
        // if(this.state.qty-1>=0)
        // {
        //     this.setState({
        //     qty:this.state.qty-1 
        // });
        // }
        
    // }
    // render() {
        const { price, title, qty ,img} = props.product; // object destructuring
        // console.log('this.props',this.props);
        return (
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image} src={img}/>
                </div>
                <div className='right-block'>

                    {/* <div style={  {fontSize:25,color:'black'}}> {this.state.title}</div> */}
                    <div style={{ fontSize: 25, color: 'black' }}>  {title}</div>
                    <div style={{ fontSize: 20, color: '#555' }}>  Rs {price}</div>
                    <div style={{ fontSize: 18, color: '#555' }}>  Qty: {qty}</div>
                    <div className='cart-item-actions'>
                        <img 
                        alt='Increase' 
                        className='action-icons' 
                        src="https://cdn-icons-png.flaticon.com/512/992/992651.png" 
                        onClick={()=>{props.OnIncreaseQuantity(props.product)}}
                        />
                        <img 
                        alt='Decrease' 
                        className='action-icons' 
                        src="https://cdn-icons-png.flaticon.com/512/66/66889.png" 
                        onClick={()=>{props.OnDecreaseQuantity(props.product)}}
                        />
                        <img 
                        alt='Delete' 
                        className='action-icons' 
                        src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png" 
                        onClick={()=>{props.OneDeleteItem(props.product)}}
                        />
                    </div>
                </div>
            </div>
        );
    // }
}
const styles = {
    image: {
        height: 150,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}
export default CartItem;