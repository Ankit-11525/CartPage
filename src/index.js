import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import * as firebase from 'firebase';
import 'firebase/firestore';

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
