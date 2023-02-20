import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import { updateDoc,addDoc,getFirestore, doc, onSnapshot, collection } from "firebase/firestore";
/// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUvUO8r7bKr1cXY8TIFmXzZIpFZd1opdo",
  authDomain: "cart-ede06.firebaseapp.com",
  projectId: "cart-ede06",
  storageBucket: "cart-ede06.appspot.com",
  messagingSenderId: "190337897842",
  appId: "1:190337897842:web:31a0a74c264a33e77639eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true
    }
  }
  componentDidMount() {
    // const db = getFirestore(); 
    // const colRef = collection(db, 'products');
    // const docsSnap = getDocs(colRef);
    // docsSnap.then((ankit) => {

    //   // console.log(ankit);
    //   const products = ankit.docs.map((doc) => {
    //     const data = doc.data();
    //     // to provide key
    //     data['id'] = doc.id;
    //     return data;
    //   })
    //   // console.log(products);
    //   this.setState({
    //     products,
    //     loading: false
    //   })
    // })




    // realtime update .............
    const db = getFirestore();
    const colRef = collection(db, 'products');
    onSnapshot(colRef, (ankit) => {

      // console.log(ankit);
      const products = ankit.docs.map((doc) => {
        const data = doc.data();
        // to provide key
        data['id'] = doc.id;
        return data;
      })
      // console.log(products);
      this.setState({
        products,
        loading: false
      })
    })
  }

  handleIncreaseQuantity = (product) => {
    // console.log("increase the no. of quantity of ",product);
    const { products } = this.state;
    const index = products.indexOf(product);
    // products[index].qty += 1
    const db = getFirestore();
    // this.setState({ products: products });
    // console.log(product.id)
    const docRef = doc(db, 'products', product.id);
    console.log(docRef);
    updateDoc(docRef,{
      qty:products[index].qty+1
    } )
    .then(()=>{
      console.log("Entire Document has been updated successfully");
    })
    .catch(error => {
      console.log(error);
  })
  }
  handleDecreaseQuantity = (product) => {
    // console.log("decrease the no. of quantity of ",product);
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty >= 1) { 
      // products[index].qty -= 1 
      const db = getFirestore();
    // this.setState({ products: products });
    // console.log(product.id)
    const docRef = doc(db, 'products', product.id);
    console.log(docRef);
    updateDoc(docRef,{
      qty:products[index].qty-1
    } )
    .then(()=>{
      console.log("Entire Document has been updated successfully");
    })
    .catch(error => {
      console.log(error);
  })
    }

    // this.setState({ products: products });
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
  addproduct = () => {
    const db = getFirestore();
      const colref=collection(db, 'products');
        addDoc(colref,{
          img: '',
          price: 99,
          qty: 3,
          title: 'washing machine'
        })
        console.log('product has been added');
        // .then((docref)=>{
        //   console.log('product has been added');
        // })

  }
  getCartTotal = () => {
    const { products } = this.state;
    let totalprice = 0;
    products.map((product) => {
      totalprice += product.price * product.qty;
    })
    return totalprice;
  }
  render() {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <button onClick={this.addproduct} style={{padding:20,fontSize:25,cursor:'pointer'}}>Add Product</button>
        <Cart
          products={products}
          OnIncreaseQuantity={this.handleIncreaseQuantity}
          OnDecreaseQuantity={this.handleDecreaseQuantity}
          OneDeleteItem={this.handleDeleteItem}
        />
        {loading && <h1> The Page is Loading....</h1>}
        <div style={{ padding: 10, marginLeft: 400, fontSize: 20 }}>
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
