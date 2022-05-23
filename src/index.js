import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
    apiKey: "AIzaSyACv31Vg3y0V2fuzgtCS_i2xK6z7ga07iQ",
    authDomain: "chat-react-d9a63.firebaseapp.com",
    projectId: "chat-react-d9a63",
    storageBucket: "chat-react-d9a63.appspot.com",
    messagingSenderId: "129083114475",
    appId: "1:129083114475:web:437fcf6fa66420bde20fae",
    measurementId: "G-6M5VXXQPXN"
  }
);

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()


ReactDOM.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);

